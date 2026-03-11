import GraduallyHighlight from "@/components/GraduallyHighlight";
import ReadingSection from "@/components/ReadingSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[650px] px-6 md:px-8 py-16 md:py-24">
        {/* Hero */}
        <header className="py-12 md:py-20">
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight tracking-tight text-foreground">
            OCD Treatment:
            <br />
            What You Need to Know
          </h1>
          <p className="mt-8 font-body text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[540px]">
            Being diagnosed with Obsessive-Compulsive Disorder can feel
            overwhelming. But it's important to know that OCD is highly
            treatable.
          </p>
          <p className="mt-6 font-body text-lg md:text-xl leading-relaxed text-muted-foreground max-w-[540px]">
            With the right support and evidence-based care, many people are able
            to regain control and live fulfilling lives.
          </p>
        </header>

        {/* Divider via space */}
        <div className="h-px w-16" style={{ backgroundColor: "hsl(var(--stone))" }} />

        {/* Is OCD Treatable? */}
        <ReadingSection>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            Is OCD Actually Treatable?
          </h2>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            Yes — and there's strong research to support that.
          </p>
          <p className="mt-6 font-body text-base md:text-lg leading-[1.85] text-foreground">
            Roughly half of individuals respond very well to standard first-line
            treatments. Even if the first attempt doesn't work perfectly, about
            70% of people see meaningful improvement when they stay engaged with
            treatment and adjust strategies as needed.
          </p>
          <p className="mt-10 font-heading text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            Recovery doesn't always happen overnight, but progress is absolutely
            possible.
          </p>
        </ReadingSection>

        <div className="h-px w-16" style={{ backgroundColor: "hsl(var(--stone))" }} />

        {/* What Treatments Work Best? */}
        <ReadingSection>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            What Treatments Work Best?
          </h2>
        </ReadingSection>

        {/* Specialized Therapy */}
        <ReadingSection>
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
            Specialized Therapy
          </h3>
          <p className="mt-2 font-body text-sm uppercase tracking-widest text-muted-foreground">
            ERP-Based CBT
          </p>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            OCD involves two main components:
          </p>
          <div className="mt-6 space-y-4">
            <p className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              <span className="font-heading font-semibold">Obsessions</span> —
              intrusive, distressing thoughts or urges.
            </p>
            <p className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              <span className="font-heading font-semibold">Compulsions</span> —
              repetitive behaviors done to reduce anxiety.
            </p>
          </div>
          <p className="mt-10 font-body text-base md:text-lg leading-[1.85] text-foreground">
            The most effective therapy for OCD is a specific form of Cognitive
            Behavioral Therapy called Exposure and Response Prevention (ERP).
          </p>
          <p className="mt-6 font-body text-base md:text-lg leading-[1.85] text-foreground">
            Instead of avoiding anxiety triggers, ERP helps individuals:
          </p>
          <ul className="mt-6 space-y-4 pl-0 list-none">
            <li className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              <GraduallyHighlight /> face feared thoughts or situations
            </li>
            <li className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              Resist performing the usual compulsive response
            </li>
            <li className="font-body text-base md:text-lg leading-[1.85] text-foreground">
              Learn that anxiety naturally decreases without rituals
            </li>
          </ul>
          <p className="mt-10 font-heading text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            Over time, this retrains the brain's fear response.
          </p>
          <p className="mt-10 font-body text-base md:text-lg leading-[1.85] text-foreground">
            Therapy is typically conducted weekly over several months. During
            this period, clients also practice exercises between sessions. While
            anxiety may temporarily increase during exposures, this discomfort is
            part of the healing process.
          </p>
          <p className="mt-6 font-body text-base md:text-lg leading-[1.85] text-foreground">
            Studies suggest that a majority of people who fully engage in ERP
            experience significant symptom reduction.
          </p>
        </ReadingSection>

        <div className="h-px w-16" style={{ backgroundColor: "hsl(var(--stone))" }} />

        {/* Getting Started */}
        <ReadingSection>
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
            How Do You Get Started?
          </h3>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            The first step is reaching out to a healthcare professional — this
            could be a primary care provider, psychiatrist, or an OCD-trained
            therapist.
          </p>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            Effective care should include:
          </p>
          <ul className="mt-6 space-y-3 pl-0 list-none">
            {[
              "Clear education about OCD",
              "Discussion of treatment options",
              "Shared decision-making",
              "Consideration of your preferences and goals",
            ].map((item) => (
              <li
                key={item}
                className="font-body text-base md:text-lg leading-[1.85] text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 font-body text-base md:text-lg leading-[1.85] text-foreground">
            Treatment goals often include:
          </p>
          <ul className="mt-6 space-y-3 pl-0 list-none">
            {[
              "Reducing symptom intensity",
              "Improving daily functioning",
              "Increasing quality of life",
              "Building coping tools for stressful situations",
            ].map((item) => (
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
            A Final Word
          </h2>
          <p className="mt-8 font-body text-base md:text-lg leading-[1.85] text-foreground">
            OCD can be persistent, but it is manageable. Many people — including
            clinicians, researchers, and individuals with lived experience — have
            dedicated their work to improving outcomes for those affected.
          </p>
          <p className="mt-10 font-heading text-xl md:text-2xl italic leading-relaxed" style={{ color: "hsl(var(--teal))" }}>
            With the right combination of treatment, patience, and support,
            meaningful recovery is possible.
          </p>
        </ReadingSection>

        {/* Footer breathing room */}
        <div className="py-10" />
      </div>
    </main>
  );
};

export default Index;
