import { STANDING_BY_URL } from "lib/constants";
import { getAge, getYearsCoding } from "lib/utils";

export default function Page() {
  const age = getAge();
  const yearsCoding = getYearsCoding();

  return (
    <section>
      <h1 className="mb-4 w-full font-bold uppercase whitespace-nowrap text-[12vw] sm:text-6xl tracking-tight">
        &ldquo;KIAN VILLENO&rdquo;
      </h1>
      <p className="mb-4 text-copy text-white">
        {`A ${age} y/o filo senior lead developer / AI engineer at `}
        <a
          href={STANDING_BY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Standing By
        </a>
        {`, living in Bris, Australia. Been coding for ${yearsCoding} years. I js make cool ahh shii.`}
      </p>
    </section>
  );
}
