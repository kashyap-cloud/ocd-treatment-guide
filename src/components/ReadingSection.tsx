import { ReactNode } from "react";

interface ReadingSectionProps {
  children: ReactNode;
  ampersand?: boolean;
}

const ReadingSection = ({ children, ampersand }: ReadingSectionProps) => {
  return (
    <section className="relative py-20 md:py-32">
      {ampersand && (
        <span
          className="absolute top-8 -left-4 md:-left-16 font-heading text-[12rem] md:text-[16rem] leading-none select-none pointer-events-none"
          style={{ color: "hsl(var(--stone) / 0.4)" }}
          aria-hidden="true"
        >
          &amp;
        </span>
      )}
      <div className="relative">{children}</div>
    </section>
  );
};

export default ReadingSection;
