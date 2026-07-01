export type PlanKey = "starter" | "pro";

export type TrainerPlan = {
  key: PlanKey;
  name: string;
  price: number;
  limit: string;
  description: string;
  features: string[];
  featured: boolean;
};

export const trainerPlans: TrainerPlan[] = [
  {
    key: "starter",
    name: "Wings Starter",
    price: 10,
    limit: "Up to 5 active clients",
    description:
      "A focused workspace for independent trainers building their client base.",
    features: [
      "Workout and nutrition planning",
      "Progress tracking and check-ins",
      "Trainer-client messaging",
      "Client photos and measurements",
    ],
    featured: false,
  },
  {
    key: "pro",
    name: "Wings Pro",
    price: 20,
    limit: "Up to 30 active clients",
    description:
      "More capacity for established trainers running a growing coaching business.",
    features: [
      "Everything in Starter",
      "Manage up to 30 active clients",
      "Organized coaching workflow",
      "Built for higher client volume",
    ],
    featured: true,
  },
];
