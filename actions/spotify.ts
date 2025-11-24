"use server";

interface SpotifyTrack {
  track: {
    name: string;
    artists: Array<{ name: string }>;
    external_urls: {
      spotify: string;
    };
  };
}

interface SpotifyResponse {
  items: SpotifyTrack[];
}

interface TokenCache {
  accessToken: string;
  expiresAt: number;
}

let tokenCache: TokenCache | null = null;

async function getAccessToken(): Promise<string | null> {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    return null;
  }

  if (tokenCache && tokenCache.expiresAt > Date.now()) {
    return tokenCache.accessToken;
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    const expiresIn = data.expires_in || 3600;

    tokenCache = {
      accessToken: data.access_token,
      expiresAt: Date.now() + (expiresIn - 60) * 1000,
    };

    return tokenCache.accessToken;
  } catch {
    return null;
  }
}

export async function getLastPlayedTrack(): Promise<{
  name: string;
  artist: string;
  url: string;
} | null> {
  const token = await getAccessToken();

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data: SpotifyResponse = await response.json();

    if (!data.items || data.items.length === 0) {
      return null;
    }

    const track = data.items[0].track;
    return {
      name: track.name,
      artist: track.artists[0]?.name || "Unknown Artist",
      url: track.external_urls.spotify,
    };
  } catch {
    return null;
  }
}
