import { getYearsCoding } from "lib/utils";
import { getLastPlayedTrack } from "actions/spotify";
import Link from "next/link";
import { WORK_PROJECTS } from "lib/constants";

export default async function Page() {
  const yearsCoding = getYearsCoding();
  const lastTrack = await getLastPlayedTrack();
  const trackName = lastTrack?.name;

  return (
    <section>
      <h1 className="mb-8 text-xl">Kian Villeno</h1>
      <p className="mb-4">
        {`I'm a Filipino full stack developer living in Australia. I work at `}
        <Link
          href="https://standingby.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Standing by Co
        </Link>
        {` and I've been coding for ${yearsCoding} years.`}
      </p>
      <p className="mb-4">{`I’m learnin’ and building AI projects and when I’m off the clock I’m locked into DJing and producing. I keep tech simple make people’s lives easier and try to leave something they’ll actually remember.`}</p>
      {lastTrack && (
        <>
          <p className="mb-4">
            {"Last thing I had spinning on my Spotify rn "}
            {lastTrack?.url ? (
              <>
                <Link
                  href={lastTrack.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {trackName}
                </Link>
                {` by ${lastTrack.artist}`}
              </>
            ) : (
              <span>
                {trackName} by {lastTrack.artist}
              </span>
            )}
            {"."}
          </p>
        </>
      )}
      <h3 className="mb-4">Some of my work projects:</h3>
      <ul className="list-disc pl-6 space-y-1">
        {WORK_PROJECTS.map((project) => (
          <li key={project.name}>
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
