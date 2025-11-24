import { getYearsCoding } from "lib/utils";
import { getLastPlayedTrack } from "actions/spotify";

export default async function Page() {
  const yearsCoding = getYearsCoding();
  const lastTrack = await getLastPlayedTrack();
  const trackName = lastTrack?.name;

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kian Villeno
      </h1>
      <p className="mb-4">
        {`I'm a Filipino full stack developer living in Australia. I work at Standing by Co and I've been coding for ${yearsCoding} years.`}
      </p>
      <p className="mb-4">{`I'm learning and building AI projects and when I'm not shipping features I'm DJing or producing. My purpose is simple to make people's lives easier with technology and leave something worth remembering. `}</p>
      <p className="mb-4">
        I'm locked into this tune rn{" "}
        {lastTrack?.url ? (
          <a
            href={lastTrack.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            {trackName}
          </a>
        ) : (
          <span className="font-bold">{trackName}</span>
        )}
      </p>
      <h3>Some of my projects</h3>
      <ul className="list-disc pl-6">
        <li>SWOP</li>
        <li>Australian Traveller</li>
        <li>Indaily SA</li>
        <li>The New Daily</li>
      </ul>
    </section>
  );
}
