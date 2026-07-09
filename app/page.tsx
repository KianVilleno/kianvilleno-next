import { getYearsCoding } from "lib/utils";

export default function Page() {
  const yearsCoding = getYearsCoding();

  return (
    <section>
      <h1 className="mb-4 w-full font-bold uppercase whitespace-nowrap text-[12vw] sm:text-6xl tracking-tight">
        &ldquo;KIAN VILLENO&rdquo;
      </h1>
      <p className="mb-4 text-copy text-white">
        {`A filo full stack dev / AI engineer living in Australia. Been coding for ${yearsCoding} years. I js make cool ahh shii.`}
      </p>
    </section>
  );
}
