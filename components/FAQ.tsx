import { ChevronDown } from "lucide-react";
import RevealSection from "@/components/marketing/RevealSection";
import { SectionHeading } from "@/components/marketing/MarketingUI";

const faqs = [
  {
    question: "Who is Wings for?",
    answer:
      "Wings is built for personal trainers, online coaches, and fitness professionals who manage clients and want workouts, nutrition, scheduling, communication, and progress in one system.",
  },
  {
    question: "Can clients use the app for free?",
    answer:
      "Yes. Trainers choose a paid plan based on their active-client capacity. Invited clients use the Wings client experience without purchasing a subscription.",
  },
  {
    question: "Can I create workout templates?",
    answer:
      "Yes. Trainers can reuse structured workout templates and adapt them for each client's goals and current program.",
  },
  {
    question: "Can I create nutrition plans?",
    answer:
      "Yes. Wings supports trainer-created nutrition programs and gives clients a clear place to follow and log their nutrition activity.",
  },
  {
    question: "Can clients track meals and progress?",
    answer:
      "Yes. Clients can log meal activity, workouts, measurements, and other progress information for their trainer to review.",
  },
  {
    question: "Does Wings support progress photos?",
    answer:
      "Yes. Clients can upload private progress photos that stay organized within their coaching relationship.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Trainer subscriptions can be managed or canceled through the secure Stripe Customer Portal.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. New trainer subscriptions include a 14-day free trial. Existing subscriptions do not receive a second trial when changing plans.",
  },
];

export default function FAQ() {
  return (
    <RevealSection
      id="faq"
      className="px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Frequently asked questions"
          title="The details trainers ask before getting started"
        />

        <div className="reveal mt-14 border-t border-white/10">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-white/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left text-base font-semibold text-white">
                {faq.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
