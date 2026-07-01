import RevealSection from "@/components/marketing/RevealSection";
import {
  SectionHeading,
  VideoPlaceholder,
} from "@/components/marketing/MarketingUI";

const demos = [
  {
    title: "Creating a workout plan",
    description:
      "See how a trainer builds, structures, and assigns a complete workout program.",
  },
  {
    title: "Creating a nutrition plan",
    description:
      "See how nutrition guidance is created and delivered inside the coaching workflow.",
  },
  {
    title: "Client app experience",
    description:
      "See how clients follow plans, log activity, message their trainer, and review progress.",
  },
];

export default function DemoSection() {
  return (
    <RevealSection
      id="demo"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product demos"
          title="See Wings in action"
          description="Short, focused walkthroughs will show the complete trainer and client workflow. The final product videos will be added here."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {demos.map((demo) => (
            <VideoPlaceholder
              key={demo.title}
              title={demo.title}
              description={demo.description}
              className="reveal aspect-video rounded-lg"
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
