// @ts-nocheck
import GraduallyHighlight from "../components/GraduallyHighlight";
import ReadingSection from "../components/ReadingSection";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

const Index = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background relative">
      <LanguageSwitcher />
      <div className="mx-auto max-w-[650px] px-6 md:px-8 py-16 md:py-24">
        {/* Hero */}
        <header className="py-12 md:py-20">
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
            {t("title").split(":")[0]}:
            <br />
            {t("title").split(":")[1]}
          </h1>
          <p className="mt-8 font-body text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[540px]">
            {t("hero.p1")}
          </p>
          <p className="mt-6 font-body text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[540px]">
            {t("hero.p2")}
          </p>
        </header>

        {/* Divider via space */}
        <div className="h-px w-16" style={{ backgroundColor: "hsl(var(--stone))" }} />

        {/* Is OCD Treatable? */}
        <ReadingSection>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            {t("is_treatable.title")}
          </h2>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("is_treatable.p1")}
          </p>
          <p className="mt-6 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("is_treatable.p2")}
          </p>
          <p className="mt-10 font-heading text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            {t("is_treatable.quote")}
          </p>
        </ReadingSection>

        <div className="h-px w-16" style={{ backgroundColor: "hsl(var(--stone))" }} />

        {/* What Treatments Work Best? */}
        <ReadingSection>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            {t("treatments.title")}
          </h2>
        </ReadingSection>

        {/* Specialized Therapy */}
        <ReadingSection>
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
            {t("treatments.specialized.title")}
          </h3>
          <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
            {t("treatments.specialized.subtitle")}
          </p>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("treatments.specialized.p1")}
          </p>
          <div className="mt-6 space-y-4">
            <p className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              <span className="font-heading font-semibold">{t("common.obsessions_label")}</span> —{" "}
              {t("treatments.specialized.obsessions")}
            </p>
            <p className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              <span className="font-heading font-semibold">{t("common.compulsions_label")}</span> —{" "}
              {t("treatments.specialized.compulsions")}
            </p>
          </div>
          <p className="mt-10 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("treatments.specialized.p2")}
          </p>
          <p className="mt-6 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("treatments.specialized.p3")}
          </p>
          <ul className="mt-6 space-y-4 pl-0 list-none">
            <li className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              <GraduallyHighlight /> {t("treatments.specialized.steps.1")}
            </li>
            <li className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              {t("treatments.specialized.steps.2")}
            </li>
            <li className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              {t("treatments.specialized.steps.3")}
            </li>
          </ul>
          <p className="mt-10 font-heading text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            {t("treatments.specialized.quote")}
          </p>
          <p className="mt-10 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("treatments.specialized.p4")}
          </p>
          <p className="mt-6 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("treatments.specialized.p5")}
          </p>
        </ReadingSection>

        <div className="h-px w-16" style={{ backgroundColor: "hsl(var(--stone))" }} />

        {/* Getting Started */}
        <ReadingSection>
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
            {t("get_started.title")}
          </h3>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("get_started.p1")}
          </p>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("get_started.p2")}
          </p>
          <ul className="mt-6 space-y-3 pl-0 list-none">
            {(t("get_started.care_items", { returnObjects: true }) as string[]).map((item) => (
              <li
                key={item}
                className="font-body text-base md:text-lg leading-[1.85] text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("get_started.goals_p")}
          </p>
          <ul className="mt-6 space-y-3 pl-0 list-none">
            {(t("get_started.goal_items", { returnObjects: true }) as string[]).map((item) => (
              <li
                key={item}
                className="font-body text-base md:text-lg leading-[1.85] text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </ReadingSection>

        <div className="h-px w-16" style={{ backgroundColor: "hsl(var(--stone))" }} />

        {/* Final Word */}
        <ReadingSection>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            {t("final_word.title")}
          </h2>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            {t("final_word.p1")}
          </p>
          <p className="mt-10 font-heading text-xl md:text-2xl italic leading-relaxed" style={{ color: "hsl(var(--teal))" }}>
            {t("final_word.quote")}
          </p>
        </ReadingSection>

        {/* Footer breathing room */}
        <div className="py-10" />
      </div>
    </main>
  );
};

export default Index;
