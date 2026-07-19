import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";

const title = "Terms of Service | Wings";
const description =
  "Read the terms that govern access to and use of the Wings fitness coaching app, website, trainer subscriptions, coaching packages, and related services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.wingsapp.fit/terms-of-service",
  },
  openGraph: {
    type: "website",
    url: "https://www.wingsapp.fit/terms-of-service",
    title,
    description,
    siteName: "Wings",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wings Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "subheading"; text: string };

type LegalSection = {
  number: number;
  title: string;
  id: string;
  blocks: LegalBlock[];
};

const sections: LegalSection[] = [
  {
    number: 1,
    title: "AGREEMENT TO THESE TERMS",
    id: "section-1-agreement-to-these-terms",
    blocks: [
      {
        type: "paragraph",
        text: 'These Terms of Service ("Terms") constitute a legally binding agreement between POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ, doing business as Wings ("Wings", "Company", "we", "us", or "our"), and you ("you" or "User"), governing your access to and use of the Wings mobile application, the website located at https://www.wingsapp.fit, and any related products, services, software, content, or features (collectively, the "Services").',
      },
      {
        type: "paragraph",
        text: "By creating an account, accessing, downloading, installing, or using any part of the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.",
      },
      {
        type: "paragraph",
        text: "If you do not agree with these Terms, you must not access or use the Services.",
      },
      {
        type: "paragraph",
        text: "These Terms apply to all users of the Services, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Personal trainers;",
          "Fitness coaches;",
          "Nutrition coaches;",
          "Clients;",
          "Visitors of our website.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "ABOUT WINGS",
    id: "section-2-about-wings",
    blocks: [
      {
        type: "paragraph",
        text: "Wings is a technology platform designed to facilitate communication and collaboration between fitness professionals and their clients.",
      },
      { type: "paragraph", text: "Through Wings, trainers may:" },
      {
        type: "list",
        items: [
          "create workout programs;",
          "create nutrition plans;",
          "monitor client progress;",
          "communicate with clients;",
          "assign coaching packages;",
          "receive payments through integrated third-party payment providers;",
          "manage their coaching business.",
        ],
      },
      { type: "paragraph", text: "Clients may:" },
      {
        type: "list",
        items: [
          "access workout plans;",
          "access nutrition plans;",
          "log workouts;",
          "track body measurements and progress;",
          "upload progress photos;",
          "communicate with their trainer;",
          "purchase coaching packages when offered by their trainer.",
        ],
      },
      {
        type: "paragraph",
        text: "Wings acts solely as the technology provider and is not a fitness provider, healthcare provider, medical organization, nutrition clinic, employment agency, or marketplace connecting the public with trainers.",
      },
      {
        type: "paragraph",
        text: "Any coaching relationship exists exclusively between the trainer and the client.",
      },
    ],
  },
  {
    number: 3,
    title: "ELIGIBILITY",
    id: "section-3-eligibility",
    blocks: [
      {
        type: "paragraph",
        text: "To create an account and use the Services, you must:",
      },
      {
        type: "list",
        items: [
          "be at least 16 years of age;",
          "have the legal capacity to enter into a binding agreement;",
          "comply with all applicable laws in your jurisdiction.",
        ],
      },
      {
        type: "paragraph",
        text: "By creating an account, you represent and warrant that you satisfy these requirements.",
      },
      {
        type: "paragraph",
        text: "If you are under the age required by the laws of your jurisdiction to independently enter into legal agreements, you may use the Services only where permitted by applicable law and under any required supervision or consent.",
      },
      {
        type: "paragraph",
        text: "We reserve the right to suspend or terminate any account if we reasonably believe that the user does not satisfy these eligibility requirements.",
      },
    ],
  },
  {
    number: 4,
    title: "ACCOUNT REGISTRATION",
    id: "section-4-account-registration",
    blocks: [
      {
        type: "paragraph",
        text: "To access certain features of the Services, you must create an account.",
      },
      { type: "paragraph", text: "You agree to:" },
      {
        type: "list",
        items: [
          "provide accurate, current, and complete information;",
          "keep your information updated;",
          "maintain the confidentiality of your login credentials;",
          "immediately notify us of any unauthorized use of your account;",
          "accept responsibility for all activities occurring under your account.",
        ],
      },
      {
        type: "paragraph",
        text: "You are responsible for maintaining the security of your device and your account credentials.",
      },
      { type: "paragraph", text: "You may not:" },
      {
        type: "list",
        items: [
          "create an account using false information;",
          "impersonate another individual or organization;",
          "share your account with another person;",
          "sell, transfer, or assign your account without our written consent.",
        ],
      },
      {
        type: "paragraph",
        text: "Each user may maintain only one personal account unless expressly authorized by Wings.",
      },
    ],
  },
  {
    number: 5,
    title: "TRAINER ACCOUNTS",
    id: "section-5-trainer-accounts",
    blocks: [
      {
        type: "paragraph",
        text: "Trainer accounts are intended exclusively for legitimate fitness coaching activities.",
      },
      {
        type: "paragraph",
        text: "By registering as a trainer, you represent and warrant that:",
      },
      {
        type: "list",
        items: [
          "you are authorized to provide the services you offer;",
          "you will provide accurate information regarding your services;",
          "you will comply with all applicable laws and regulations governing your business;",
          "you are solely responsible for your coaching services, communications, pricing, and relationships with your clients.",
        ],
      },
      {
        type: "paragraph",
        text: "Wings does not verify professional certifications, qualifications, licenses, insurance, or experience of trainers unless explicitly stated.",
      },
      {
        type: "paragraph",
        text: "Clients are solely responsible for evaluating whether a trainer is appropriate for their needs.",
      },
    ],
  },
  {
    number: 6,
    title: "CLIENT ACCOUNTS",
    id: "section-6-client-accounts",
    blocks: [
      {
        type: "paragraph",
        text: "Clients may access the Services only after creating an account and, where applicable, receiving an invitation or coaching assignment from a trainer.",
      },
      { type: "paragraph", text: "Clients acknowledge that:" },
      {
        type: "list",
        items: [
          "workouts and nutrition plans are provided by their trainer;",
          "Wings does not independently verify the suitability of any coaching program;",
          "progress tracking information is provided for informational purposes only.",
        ],
      },
      {
        type: "paragraph",
        text: "Clients remain solely responsible for determining whether participation in any exercise or nutrition program is appropriate for their individual circumstances.",
      },
    ],
  },
  {
    number: 7,
    title: "MODIFICATIONS TO THESE TERMS",
    id: "section-7-modifications-to-these-terms",
    blocks: [
      {
        type: "paragraph",
        text: "We may revise these Terms from time to time to reflect changes in our Services, legal obligations, security requirements, or business practices.",
      },
      {
        type: "paragraph",
        text: "When material changes are made, we may notify users through the Services, by email, or through other reasonable means.",
      },
      {
        type: "paragraph",
        text: 'The updated version will become effective on the date indicated by the "Last updated" notice at the beginning of these Terms.',
      },
      {
        type: "paragraph",
        text: "Your continued use of the Services after the effective date of any revised Terms constitutes your acceptance of the updated Terms.",
      },
      {
        type: "paragraph",
        text: "If you do not agree with the revised Terms, you must discontinue your use of the Services and close your account.",
      },
    ],
  },
  {
    number: 8,
    title: "CONTACT INFORMATION",
    id: "section-8-contact-information",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions regarding these Terms, you may contact us at:",
      },
      { type: "paragraph", text: "POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ" },
      { type: "paragraph", text: "Business Name: Wings" },
      { type: "paragraph", text: "Address:" },
      { type: "paragraph", text: "B-dul Bucureștii Noi, 136" },
      { type: "paragraph", text: "Ground Floor, Apartment 5" },
      { type: "paragraph", text: "Sector 1" },
      { type: "paragraph", text: "Bucharest" },
      { type: "paragraph", text: "Romania" },
      { type: "paragraph", text: "Email: wings.app@yahoo.com" },
      { type: "paragraph", text: "Website: https://www.wingsapp.fit" },
    ],
  },
  {
    number: 9,
    title: "INTELLECTUAL PROPERTY RIGHTS",
    id: "section-9-intellectual-property-rights",
    blocks: [
      { type: "subheading", text: "Our Intellectual Property" },
      {
        type: "paragraph",
        text: 'The Services, including but not limited to the Wings mobile application, website, software, source code, databases, algorithms, user interface, visual design, graphics, icons, logos, trademarks, text, photographs, videos, audio, workout templates, nutrition templates, documentation, and all related content (collectively, the "Content") are owned by or licensed to Wings and are protected by applicable copyright, trademark, trade secret, and other intellectual property laws.',
      },
      {
        type: "paragraph",
        text: "Except as expressly permitted under these Terms, no part of the Services or Content may be copied, reproduced, modified, translated, distributed, sold, licensed, reverse engineered, decompiled, publicly displayed, or otherwise exploited without our prior written consent.",
      },
      {
        type: "paragraph",
        text: '"Wings" and all related logos, branding, graphics, and service names are trademarks or trade dress of the Company. Nothing contained in these Terms grants you any right to use our trademarks without our prior written permission.',
      },
      { type: "subheading", text: "Limited License" },
      {
        type: "paragraph",
        text: "Subject to your compliance with these Terms, Wings grants you a limited, personal, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for their intended purpose.",
      },
      { type: "paragraph", text: "This license does not permit you to:" },
      {
        type: "list",
        items: [
          "copy the application;",
          "redistribute the application;",
          "modify or create derivative works;",
          "extract source code;",
          "sell access to the Services;",
          "use the Services to develop a competing product.",
        ],
      },
      { type: "paragraph", text: "Any rights not expressly granted remain reserved by Wings." },
    ],
  },
  {
    number: 10,
    title: "USER CONTENT",
    id: "section-10-user-content",
    blocks: [
      {
        type: "paragraph",
        text: "Certain features of the Services allow users to create, upload, transmit, or store content, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "workout logs;",
          "nutrition plans;",
          "messages;",
          "progress photos;",
          "body measurements;",
          "profile information;",
          "exercise notes;",
          "comments;",
          "documents;",
          "other materials uploaded through the Services.",
        ],
      },
      { type: "paragraph", text: "You retain ownership of the content you submit." },
      {
        type: "paragraph",
        text: "However, by uploading or submitting content through the Services, you grant Wings a worldwide, non-exclusive, royalty-free license to host, store, process, reproduce, transmit, display, and use such content solely for the purpose of operating, maintaining, improving, securing, and providing the Services.",
      },
      {
        type: "paragraph",
        text: "This license automatically terminates when your content is permanently deleted from our systems, except where retention is required by law or reasonably necessary for backup, fraud prevention, dispute resolution, or legal compliance.",
      },
    ],
  },
  {
    number: 11,
    title: "PROGRESS PHOTOS",
    id: "section-11-progress-photos",
    blocks: [
      {
        type: "paragraph",
        text: "The Services allow trainers and clients to upload progress photographs.",
      },
      { type: "paragraph", text: "You acknowledge and agree that:" },
      {
        type: "list",
        items: [
          "progress photographs may contain sensitive personal information;",
          "photographs are uploaded voluntarily;",
          "photographs are visible only to users authorized within the coaching relationship, unless you choose to share them otherwise;",
          "Wings processes such photographs solely to provide progress tracking features.",
        ],
      },
      {
        type: "paragraph",
        text: "You are responsible for ensuring that you have the necessary rights and permissions to upload any photograph.",
      },
      {
        type: "paragraph",
        text: "You must not upload photographs belonging to another individual without their authorization.",
      },
    ],
  },
  {
    number: 12,
    title: "CHAT MESSAGES",
    id: "section-12-chat-messages",
    blocks: [
      {
        type: "paragraph",
        text: "The Services include communication features that allow trainers and clients to exchange messages.",
      },
      { type: "paragraph", text: "You acknowledge that:" },
      {
        type: "list",
        items: [
          "messages are stored to provide the communication functionality;",
          "Wings may process message content when necessary to maintain, secure, investigate abuse, comply with legal obligations, or improve the Services;",
          "private conversations remain private between participants except where disclosure is required by law or necessary to protect the security or integrity of the Services.",
        ],
      },
      {
        type: "paragraph",
        text: "You are solely responsible for the content you send through the messaging system.",
      },
    ],
  },
  {
    number: 13,
    title: "USER REPRESENTATIONS",
    id: "section-13-user-representations",
    blocks: [
      {
        type: "paragraph",
        text: "By submitting any content through the Services, you represent and warrant that:",
      },
      {
        type: "list",
        items: [
          "you own the content or possess all necessary rights to upload it;",
          "your content does not infringe the rights of any third party;",
          "your content is accurate to the best of your knowledge;",
          "your content complies with applicable laws;",
          "your content does not violate these Terms.",
        ],
      },
      {
        type: "paragraph",
        text: "You agree that Wings may remove any content that reasonably appears to violate these Terms or applicable law.",
      },
    ],
  },
  {
    number: 14,
    title: "ACCEPTABLE USE",
    id: "section-14-acceptable-use",
    blocks: [
      {
        type: "paragraph",
        text: "You agree to use the Services only for lawful purposes.",
      },
      { type: "paragraph", text: "You shall not:" },
      {
        type: "list",
        items: [
          "violate any applicable law or regulation;",
          "infringe intellectual property rights;",
          "impersonate another person;",
          "use false identity information;",
          "share your account credentials;",
          "attempt unauthorized access to another account;",
          "interfere with the operation or security of the Services;",
          "upload malicious software or code;",
          "distribute spam or unsolicited communications;",
          "scrape or systematically collect data from the Services;",
          "reverse engineer the Services except where permitted by applicable law;",
          "bypass subscription, payment, or security mechanisms;",
          "use automated bots or scripts to access the Services;",
          "interfere with other users' enjoyment of the Services;",
          "upload unlawful, abusive, defamatory, threatening, discriminatory, or hateful content;",
          "upload sexually explicit material unrelated to legitimate fitness coaching;",
          "upload viruses, malware, ransomware, or similar harmful software;",
          "use the Services to conduct fraudulent activity;",
          "advertise or promote products or services unrelated to legitimate coaching activities through the Services;",
          "sell, transfer, rent, or otherwise assign your account to another person.",
        ],
      },
      {
        type: "paragraph",
        text: "Violation of this section may result in immediate suspension or termination of your account.",
      },
    ],
  },
  {
    number: 15,
    title: "TRAINER CONTENT",
    id: "section-15-trainer-content",
    blocks: [
      { type: "paragraph", text: "Trainers are solely responsible for:" },
      {
        type: "list",
        items: [
          "workout programs they create;",
          "nutrition plans they provide;",
          "educational materials;",
          "exercise demonstrations;",
          "recommendations;",
          "coaching advice;",
          "package descriptions;",
          "pricing;",
          "communications with clients.",
        ],
      },
      {
        type: "paragraph",
        text: "Wings does not review, verify, endorse, approve, or guarantee the accuracy, legality, effectiveness, or safety of trainer-created content.",
      },
      {
        type: "paragraph",
        text: "Clients acknowledge that all coaching content originates from their trainer and not from Wings.",
      },
    ],
  },
  {
    number: 16,
    title: "FEEDBACK",
    id: "section-16-feedback",
    blocks: [
      {
        type: "paragraph",
        text: "If you provide suggestions, feature requests, ideas, comments, bug reports, or other feedback regarding the Services, you grant Wings a perpetual, worldwide, irrevocable, royalty-free license to use, modify, publish, implement, and incorporate such feedback into the Services without compensation or acknowledgment.",
      },
      {
        type: "paragraph",
        text: "Providing feedback does not create any obligation for Wings to implement your suggestions.",
      },
    ],
  },
  {
    number: 17,
    title: "SERVICE MANAGEMENT",
    id: "section-17-service-management",
    blocks: [
      {
        type: "paragraph",
        text: "To protect the integrity and security of the Services, Wings reserves the right, but not the obligation, to:",
      },
      {
        type: "list",
        items: [
          "monitor compliance with these Terms;",
          "investigate suspected violations;",
          "remove unlawful or prohibited content;",
          "restrict or suspend accounts;",
          "refuse access to the Services;",
          "preserve evidence relating to suspected abuse;",
          "cooperate with law enforcement authorities where required by law;",
          "take any reasonable action necessary to protect users, trainers, clients, the Services, or the Company.",
        ],
      },
      {
        type: "paragraph",
        text: "Nothing in these Terms obligates Wings to actively monitor all user content, communications, or activities.",
      },
    ],
  },
  {
    number: 18,
    title: "SUBSCRIPTIONS",
    id: "section-18-subscriptions",
    blocks: [
      {
        type: "paragraph",
        text: "Certain features of the Services are available only through a paid trainer subscription.",
      },
      {
        type: "paragraph",
        text: "Trainer subscriptions provide access to premium features, which may include, without limitation:",
      },
      {
        type: "list",
        items: [
          "client management;",
          "workout programming;",
          "nutrition planning;",
          "progress tracking;",
          "payment tools;",
          "business management features;",
          "analytics;",
          "additional premium functionality made available by Wings.",
        ],
      },
      {
        type: "paragraph",
        text: "Subscription features may change over time as the Services evolve.",
      },
      {
        type: "paragraph",
        text: "We reserve the right to modify, add, or discontinue subscription features at any time.",
      },
      { type: "subheading", text: "Free Trial" },
      {
        type: "paragraph",
        text: "Where offered, Wings may provide a free trial period for eligible trainer accounts.",
      },
      {
        type: "paragraph",
        text: "Unless otherwise stated, the current free trial period is 14 days.",
      },
      {
        type: "paragraph",
        text: "At the end of the trial period, continued access to premium features requires an active paid subscription.",
      },
      {
        type: "paragraph",
        text: "We reserve the right to determine eligibility for free trials and to withdraw or modify trial offers at any time.",
      },
      { type: "subheading", text: "Automatic Renewal" },
      {
        type: "paragraph",
        text: "Trainer subscriptions are billed on a recurring basis through Stripe.",
      },
      {
        type: "paragraph",
        text: "Unless canceled before the next billing date, subscriptions automatically renew at the end of each billing period.",
      },
      {
        type: "paragraph",
        text: "By purchasing a subscription, you authorize Stripe to charge your selected payment method for each renewal until the subscription is canceled.",
      },
      { type: "subheading", text: "Subscription Management" },
      {
        type: "paragraph",
        text: "Trainer subscriptions may be managed through the Stripe Billing Portal or any subscription management interface made available within the Services.",
      },
      {
        type: "paragraph",
        text: "Cancellation prevents future renewals but does not entitle the subscriber to a refund for the current billing period unless required by applicable law.",
      },
      {
        type: "paragraph",
        text: "Subscription fees already paid remain non-refundable except where applicable law provides otherwise.",
      },
    ],
  },
  {
    number: 19,
    title: "COACHING PACKAGES",
    id: "section-19-coaching-packages",
    blocks: [
      {
        type: "paragraph",
        text: "Trainers may create coaching packages that can be assigned to clients.",
      },
      {
        type: "paragraph",
        text: "Packages may include, among other things:",
      },
      {
        type: "list",
        items: [
          "workout coaching;",
          "nutrition coaching;",
          "progress monitoring;",
          "messaging;",
          "consultations;",
          "other services determined by the trainer.",
        ],
      },
      {
        type: "paragraph",
        text: "Package descriptions, prices, validity periods, and included services are determined exclusively by the trainer.",
      },
      {
        type: "paragraph",
        text: "Wings does not establish pricing or guarantee the quality or availability of any coaching package.",
      },
      { type: "subheading", text: "One-Time Purchases" },
      {
        type: "paragraph",
        text: "Unless expressly stated otherwise, coaching packages purchased by clients are one-time purchases.",
      },
      {
        type: "paragraph",
        text: "Purchasing a coaching package does not create a recurring subscription.",
      },
      {
        type: "paragraph",
        text: "Clients will never be charged automatically for future coaching packages solely because they previously purchased one.",
      },
      {
        type: "paragraph",
        text: "If a client wishes to purchase another package after the current package expires or is consumed, the client must complete a new purchase.",
      },
    ],
  },
  {
    number: 20,
    title: "PAYMENTS",
    id: "section-20-payments",
    blocks: [
      {
        type: "paragraph",
        text: "Payments within the Services are processed by independent third-party payment providers, including Stripe and Stripe Connect.",
      },
      {
        type: "paragraph",
        text: "Wings does not store complete payment card information.",
      },
      {
        type: "paragraph",
        text: "By making a purchase, you authorize the applicable payment processor to charge your selected payment method for the amount displayed at checkout.",
      },
      {
        type: "paragraph",
        text: "Payment processing is subject to the terms, privacy policies, and requirements of the applicable payment processor.",
      },
      { type: "subheading", text: "Trainer Payments" },
      {
        type: "paragraph",
        text: "Where supported, trainers may connect their Stripe Connect account to receive payments directly from clients.",
      },
      { type: "paragraph", text: "The trainer is solely responsible for:" },
      {
        type: "list",
        items: [
          "complying with tax obligations;",
          "maintaining accurate payout information;",
          "complying with applicable financial regulations;",
          "reporting income;",
          "resolving disputes relating to coaching services.",
        ],
      },
      {
        type: "paragraph",
        text: "Wings acts solely as the technology platform facilitating payment processing and does not become a party to any coaching agreement between trainers and clients.",
      },
      { type: "subheading", text: "Failed Payments" },
      {
        type: "paragraph",
        text: "If a payment cannot be completed due to insufficient funds, expired payment methods, banking issues, fraud prevention measures, or other payment failures, Wings or Stripe may suspend or reject the transaction.",
      },
      {
        type: "paragraph",
        text: "Certain premium features may become unavailable until payment is successfully completed.",
      },
    ],
  },
  {
    number: 21,
    title: "REFUNDS",
    id: "section-21-refunds",
    blocks: [
      {
        type: "paragraph",
        text: "Except where required by applicable law, all purchases made through the Services are final.",
      },
      { type: "paragraph", text: "This includes, without limitation:" },
      {
        type: "list",
        items: [
          "trainer subscriptions;",
          "coaching packages;",
          "premium features.",
        ],
      },
      { type: "paragraph", text: "Refunds are generally not provided for:" },
      {
        type: "list",
        items: [
          "unused subscription periods;",
          "partially used coaching packages;",
          "unused coaching sessions;",
          "accidental purchases where the purchased service has already become available;",
          "dissatisfaction with coaching services provided by an independent trainer.",
        ],
      },
      {
        type: "paragraph",
        text: "Nothing in these Terms limits any mandatory consumer rights available under applicable law.",
      },
    ],
  },
  {
    number: 22,
    title: "TRAINER RESPONSIBILITY",
    id: "section-22-trainer-responsibility",
    blocks: [
      { type: "paragraph", text: "Wings is solely a technology platform." },
      {
        type: "paragraph",
        text: "Each trainer operates independently and is solely responsible for:",
      },
      {
        type: "list",
        items: [
          "coaching services;",
          "exercise recommendations;",
          "nutrition advice;",
          "communication with clients;",
          "scheduling;",
          "pricing;",
          "refunds voluntarily offered by the trainer;",
          "legal compliance relating to their business.",
        ],
      },
      {
        type: "paragraph",
        text: "Wings does not supervise, employ, certify, endorse, or control trainers.",
      },
      {
        type: "paragraph",
        text: "No partnership, employment relationship, agency, franchise, or joint venture is created between Wings and any trainer through use of the Services.",
      },
      {
        type: "paragraph",
        text: "Clients acknowledge that any agreement regarding coaching services exists exclusively between the client and the trainer.",
      },
    ],
  },
  {
    number: 23,
    title: "HEALTH AND MEDICAL DISCLAIMER",
    id: "section-23-health-and-medical-disclaimer",
    blocks: [
      {
        type: "paragraph",
        text: "The Services are intended solely for general fitness, wellness, and educational purposes.",
      },
      { type: "paragraph", text: "Wings does not provide:" },
      {
        type: "list",
        items: [
          "medical advice;",
          "diagnosis;",
          "treatment;",
          "rehabilitation services;",
          "physical therapy;",
          "emergency medical services.",
        ],
      },
      {
        type: "paragraph",
        text: "Information provided through the Services should never be interpreted as medical advice.",
      },
      {
        type: "paragraph",
        text: "Before beginning any exercise program, nutrition program, or lifestyle change, users should consult an appropriately qualified healthcare professional.",
      },
      {
        type: "paragraph",
        text: "Users participate in workouts and nutrition programs entirely at their own risk.",
      },
      {
        type: "paragraph",
        text: "If you experience pain, dizziness, injury, difficulty breathing, chest pain, or any other concerning symptoms, you should discontinue the activity immediately and seek appropriate medical attention.",
      },
    ],
  },
  {
    number: 24,
    title: "NUTRITION DISCLAIMER",
    id: "section-24-nutrition-disclaimer",
    blocks: [
      {
        type: "paragraph",
        text: "Nutritional information, calorie estimates, macronutrient calculations, meal plans, and food databases available through the Services are provided for informational purposes only.",
      },
      { type: "paragraph", text: "Such information may contain inaccuracies due to:" },
      {
        type: "list",
        items: [
          "manufacturer changes;",
          "regional product differences;",
          "database limitations;",
          "user modifications.",
        ],
      },
      {
        type: "paragraph",
        text: "Users remain responsible for verifying nutritional information where accuracy is important for medical, dietary, or allergy-related reasons.",
      },
      {
        type: "paragraph",
        text: "Wings makes no warranty regarding the accuracy or completeness of nutritional information provided through the Services.",
      },
    ],
  },
  {
    number: 25,
    title: "FITNESS RESULTS DISCLAIMER",
    id: "section-25-fitness-results-disclaimer",
    blocks: [
      {
        type: "paragraph",
        text: "Individual fitness results vary significantly between users.",
      },
      { type: "paragraph", text: "Wings does not guarantee that any user will:" },
      {
        type: "list",
        items: [
          "lose weight;",
          "gain muscle;",
          "improve athletic performance;",
          "achieve specific body composition goals;",
          "recover from injury;",
          "achieve any particular health outcome.",
        ],
      },
      {
        type: "paragraph",
        text: "Results depend upon numerous factors including genetics, consistency, nutrition, sleep, lifestyle, medical conditions, adherence to coaching, and other variables beyond the control of Wings.",
      },
      {
        type: "paragraph",
        text: "Any testimonials, success stories, photographs, or examples displayed through the Services are illustrative only and should not be interpreted as guarantees of future results.",
      },
    ],
  },
  {
    number: 26,
    title: "DISCLAIMER OF WARRANTIES",
    id: "section-26-disclaimer-of-warranties",
    blocks: [
      {
        type: "paragraph",
        text: 'THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.',
      },
      {
        type: "paragraph",
        text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WINGS DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO WARRANTIES OF:",
      },
      {
        type: "list",
        items: [
          "merchantability;",
          "fitness for a particular purpose;",
          "non-infringement;",
          "uninterrupted availability;",
          "security;",
          "reliability;",
          "accuracy;",
          "completeness.",
        ],
      },
      { type: "paragraph", text: "We do not warrant that:" },
      {
        type: "list",
        items: [
          "the Services will always be available;",
          "the Services will be free from bugs or errors;",
          "defects will always be corrected;",
          "the Services will be compatible with every device;",
          "information available through the Services will always be accurate or up to date.",
        ],
      },
      {
        type: "paragraph",
        text: "You acknowledge that use of the Services is entirely at your own risk.",
      },
    ],
  },
  {
    number: 27,
    title: "LIMITATION OF LIABILITY",
    id: "section-27-limitation-of-liability",
    blocks: [
      {
        type: "paragraph",
        text: "To the fullest extent permitted by applicable law, Wings, its owner, employees, contractors, affiliates, licensors, service providers, and partners shall not be liable for any indirect, incidental, special, exemplary, punitive, or consequential damages arising out of or relating to:",
      },
      {
        type: "list",
        items: [
          "your use of the Services;",
          "inability to use the Services;",
          "loss of profits;",
          "loss of revenue;",
          "business interruption;",
          "loss of data;",
          "device damage;",
          "unauthorized access;",
          "security incidents;",
          "trainer-client disputes;",
          "coaching outcomes;",
          "injuries resulting from workouts or nutrition plans.",
        ],
      },
      {
        type: "paragraph",
        text: "This limitation applies regardless of the legal theory under which liability is asserted.",
      },
      {
        type: "paragraph",
        text: "To the maximum extent permitted by law, the total aggregate liability of Wings for all claims arising out of or relating to the Services shall not exceed the total amount actually paid by you to Wings during the twelve (12) months immediately preceding the event giving rise to the claim.",
      },
      {
        type: "paragraph",
        text: "Nothing in these Terms excludes or limits liability that cannot legally be excluded under applicable law.",
      },
    ],
  },
  {
    number: 28,
    title: "INDEMNIFICATION",
    id: "section-28-indemnification",
    blocks: [
      {
        type: "paragraph",
        text: "You agree to defend, indemnify, and hold harmless Wings, its owner, affiliates, contractors, employees, licensors, partners, and service providers from and against any claims, damages, liabilities, losses, judgments, penalties, costs, expenses, and reasonable legal fees arising out of or relating to:",
      },
      {
        type: "list",
        items: [
          "your use of the Services;",
          "your breach of these Terms;",
          "your violation of applicable law;",
          "your violation of any third-party rights;",
          "content uploaded by you;",
          "coaching services you provide as a trainer;",
          "disputes between trainers and clients;",
          "negligent or intentional misconduct.",
        ],
      },
      {
        type: "paragraph",
        text: "We reserve the right to assume exclusive control of any matter otherwise subject to indemnification, and you agree to cooperate fully with our defense.",
      },
    ],
  },
  {
    number: 29,
    title: "ACCOUNT SUSPENSION AND TERMINATION",
    id: "section-29-account-suspension-and-termination",
    blocks: [
      {
        type: "paragraph",
        text: "We reserve the right, at our sole discretion and without prior notice where permitted by law, to suspend, restrict, or permanently terminate your account if we reasonably determine that you have:",
      },
      {
        type: "list",
        items: [
          "violated these Terms;",
          "violated applicable law;",
          "engaged in fraudulent activity;",
          "abused other users;",
          "attempted unauthorized access;",
          "uploaded unlawful content;",
          "interfered with the operation or security of the Services;",
          "failed to pay applicable subscription fees;",
          "used the Services in a manner that may expose Wings or other users to legal or security risks.",
        ],
      },
      { type: "paragraph", text: "Upon termination:" },
      {
        type: "list",
        items: [
          "your right to access the Services immediately ends;",
          "subscription access may be revoked;",
          "coaching packages may become inaccessible where necessary to enforce these Terms;",
          "we may retain certain information as required by law or for legitimate business purposes.",
        ],
      },
      {
        type: "paragraph",
        text: "Termination does not affect any rights or obligations accrued before termination.",
      },
    ],
  },
  {
    number: 30,
    title: "SERVICE AVAILABILITY",
    id: "section-30-service-availability",
    blocks: [
      {
        type: "paragraph",
        text: "While we strive to provide reliable access to the Services, we do not guarantee uninterrupted availability.",
      },
      {
        type: "paragraph",
        text: "The Services may occasionally become unavailable due to:",
      },
      {
        type: "list",
        items: [
          "scheduled maintenance;",
          "software updates;",
          "infrastructure failures;",
          "internet outages;",
          "security incidents;",
          "force majeure events;",
          "third-party service interruptions.",
        ],
      },
      {
        type: "paragraph",
        text: "Wings shall not be liable for any damages arising from temporary interruptions or unavailability of the Services.",
      },
      {
        type: "paragraph",
        text: "We reserve the right to modify, suspend, discontinue, or remove any feature of the Services at any time.",
      },
    ],
  },
  {
    number: 31,
    title: "THIRD-PARTY SERVICES",
    id: "section-31-third-party-services",
    blocks: [
      {
        type: "paragraph",
        text: "The Services integrate with third-party providers, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Stripe;",
          "Stripe Connect;",
          "Apple Health (where enabled);",
          "Apple Watch;",
          "Google Fit or Health Connect (where supported);",
          "Firebase;",
          "Supabase;",
          "Expo services;",
          "other third-party infrastructure providers.",
        ],
      },
      {
        type: "paragraph",
        text: "These services are operated independently of Wings.",
      },
      {
        type: "paragraph",
        text: "Your use of third-party services is governed by their respective terms and privacy policies.",
      },
      { type: "paragraph", text: "Wings is not responsible for:" },
      {
        type: "list",
        items: [
          "third-party outages;",
          "payment processing failures;",
          "hardware failures;",
          "wearable device malfunctions;",
          "actions taken by third-party providers.",
        ],
      },
    ],
  },
  {
    number: 32,
    title: "SOFTWARE UPDATES",
    id: "section-32-software-updates",
    blocks: [
      {
        type: "paragraph",
        text: "From time to time, Wings may release updates, bug fixes, security patches, or new versions of the application.",
      },
      {
        type: "paragraph",
        text: "Certain updates may be mandatory to continue using the Services.",
      },
      {
        type: "paragraph",
        text: "Failure to install required updates may result in reduced functionality or inability to access certain features.",
      },
      {
        type: "paragraph",
        text: "We may also remotely modify server-side functionality without prior notice.",
      },
    ],
  },
  {
    number: 33,
    title: "FORCE MAJEURE",
    id: "section-33-force-majeure",
    blocks: [
      {
        type: "paragraph",
        text: "Wings shall not be liable for any delay or failure to perform resulting from causes beyond our reasonable control, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "natural disasters;",
          "floods;",
          "fires;",
          "earthquakes;",
          "war;",
          "terrorism;",
          "civil unrest;",
          "governmental actions;",
          "labor disputes;",
          "internet failures;",
          "cyberattacks;",
          "widespread power outages;",
          "failures of cloud infrastructure providers.",
        ],
      },
      {
        type: "paragraph",
        text: "Performance shall be suspended for the duration of the force majeure event.",
      },
    ],
  },
  {
    number: 34,
    title: "ELECTRONIC COMMUNICATIONS",
    id: "section-34-electronic-communications",
    blocks: [
      {
        type: "paragraph",
        text: "By using the Services, you consent to receive communications electronically.",
      },
      { type: "paragraph", text: "These communications may include:" },
      {
        type: "list",
        items: [
          "account notifications;",
          "payment confirmations;",
          "subscription notices;",
          "security alerts;",
          "product updates;",
          "legal notices;",
          "customer support communications.",
        ],
      },
      {
        type: "paragraph",
        text: "You agree that electronic communications satisfy any legal requirement that such communications be in writing.",
      },
    ],
  },
  {
    number: 35,
    title: "GOVERNING LAW",
    id: "section-35-governing-law",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms shall be governed by and interpreted in accordance with the laws of Romania, without regard to conflict of law principles.",
      },
      {
        type: "paragraph",
        text: "Where mandatory consumer protection laws provide additional rights under the laws of your country of residence, those rights remain unaffected.",
      },
    ],
  },
  {
    number: 36,
    title: "DISPUTE RESOLUTION",
    id: "section-36-dispute-resolution",
    blocks: [
      {
        type: "paragraph",
        text: "If a dispute arises between you and Wings, both parties agree to first attempt to resolve the matter through good-faith negotiations.",
      },
      {
        type: "paragraph",
        text: "If the dispute cannot be resolved informally within thirty (30) days, either party may submit the dispute to the competent courts of Bucharest, Romania, unless mandatory law requires jurisdiction elsewhere.",
      },
      {
        type: "paragraph",
        text: "Nothing in these Terms prevents either party from seeking urgent injunctive or equitable relief where appropriate.",
      },
    ],
  },
  {
    number: 37,
    title: "SEVERABILITY",
    id: "section-37-severability",
    blocks: [
      {
        type: "paragraph",
        text: "If any provision of these Terms is determined by a court of competent jurisdiction to be unlawful, invalid, or unenforceable, that provision shall be enforced to the maximum extent permitted by law, and the remaining provisions shall remain in full force and effect.",
      },
    ],
  },
  {
    number: 38,
    title: "NO WAIVER",
    id: "section-38-no-waiver",
    blocks: [
      {
        type: "paragraph",
        text: "Failure by Wings to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision.",
      },
      { type: "paragraph", text: "Any waiver must be made expressly and in writing." },
    ],
  },
  {
    number: 39,
    title: "ASSIGNMENT",
    id: "section-39-assignment",
    blocks: [
      {
        type: "paragraph",
        text: "You may not assign or transfer your rights or obligations under these Terms without our prior written consent.",
      },
      {
        type: "paragraph",
        text: "Wings may assign or transfer these Terms, in whole or in part, in connection with a merger, acquisition, sale of assets, corporate restructuring, or operation of the Services.",
      },
    ],
  },
  {
    number: 40,
    title: "ENTIRE AGREEMENT",
    id: "section-40-entire-agreement",
    blocks: [
      {
        type: "paragraph",
        text: "These Terms, together with our Privacy Policy and any additional legal notices expressly incorporated by reference, constitute the entire agreement between you and Wings regarding your use of the Services.",
      },
      {
        type: "paragraph",
        text: "They supersede all prior agreements, communications, representations, and understandings relating to the Services.",
      },
    ],
  },
  {
    number: 41,
    title: "CONTACT INFORMATION",
    id: "section-41-contact-information",
    blocks: [
      {
        type: "paragraph",
        text: "If you have any questions regarding these Terms, you may contact us at:",
      },
      { type: "paragraph", text: "POENAR REMUS PERSOANĂ FIZICĂ AUTORIZATĂ" },
      { type: "paragraph", text: "Trading Name: Wings" },
      { type: "paragraph", text: "Address:" },
      { type: "paragraph", text: "B-dul Bucureștii Noi, 136" },
      { type: "paragraph", text: "Ground Floor, Apartment 5" },
      { type: "paragraph", text: "Sector 1" },
      { type: "paragraph", text: "Bucharest" },
      { type: "paragraph", text: "Romania" },
      { type: "paragraph", text: "Email: wings.app@yahoo.com" },
      { type: "paragraph", text: "Website: https://www.wingsapp.fit" },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <main className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden"
        >
          <div
            className="absolute right-1/3 top-1/4 h-[600px] w-[600px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #10B981 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 h-[460px] w-[460px] rounded-full opacity-[0.07]"
            style={{
              background:
                "radial-gradient(circle, #3B82F6 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <header className="mb-10 flex flex-col items-center gap-4 text-center">
            <Link href="/" aria-label="Wings home">
              <Image
                src="/wings-logo.png"
                alt="Wings"
                width={64}
                height={43}
                className="object-contain drop-shadow-[0_0_24px_rgba(59,130,246,0.4)]"
                priority
              />
            </Link>
            <div>
              <h1 className="text-4xl font-extrabold text-white">
                Terms of Service
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Last updated: July 19, 2026
              </p>
            </div>
          </header>

          <nav
            id="table-of-contents"
            aria-label="Terms of Service table of contents"
            className="mb-12 scroll-mt-24 rounded-lg border border-white/10 bg-white/[0.035] px-5 py-6 sm:px-6"
          >
            <h2 className="text-base font-semibold text-white">
              Table of Contents
            </h2>
            <ol className="mt-5 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="flex gap-2 text-slate-400 transition-colors hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  >
                    <span className="w-7 shrink-0 text-slate-600">
                      {section.number}.
                    </span>
                    <span>{toTitleCase(section.title)}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="prose-legal">
            {sections.map((section) => (
              <LegalSectionView key={section.id} section={section} />
            ))}
          </article>

          <div className="mt-8 border-t border-white/5 pt-8 text-center">
            <Link
              href="/"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              &larr; Back to wingsapp.fit
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function LegalSectionView({ section }: { section: LegalSection }) {
  return (
    <section id={section.id} className="mb-12 scroll-mt-24">
      <h2 className="mb-4 border-l-2 border-cyan-500 pl-4 text-lg font-bold text-white">
        {section.number}. {section.title}
      </h2>
      <div className="space-y-3 pl-4 text-sm leading-relaxed text-slate-400">
        {section.blocks.map((block, index) => (
          <LegalBlockView key={index} block={block} />
        ))}
        <p className="pt-2">
          <a
            href="#table-of-contents"
            className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-400 transition-colors hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
          >
            Back to Table of Contents
          </a>
        </p>
      </div>
    </section>
  );
}

function LegalBlockView({ block }: { block: LegalBlock }) {
  if (block.type === "subheading") {
    return (
      <h3 className="pt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return <List items={block.items} />;
  }

  return (
    <p>
      <LinkedText text={block.text} />
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"
          />
          <span>
            <LinkedText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function LinkedText({ text }: { text: string }) {
  const pattern = /(https:\/\/www\.wingsapp\.fit|wings\.app@yahoo\.com)/g;
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, index) => {
        if (part === "https://www.wingsapp.fit") {
          return (
            <ExternalLink key={`${part}-${index}`} href={part}>
              {part}
            </ExternalLink>
          );
        }

        if (part === "wings.app@yahoo.com") {
          return (
            <EmailLink key={`${part}-${index}`}>
              {part}
            </EmailLink>
          );
        }

        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="break-words text-cyan-400 transition-colors hover:text-cyan-300"
    >
      {children}
    </a>
  );
}

function EmailLink({ children }: { children: ReactNode }) {
  return (
    <a
      href="mailto:wings.app@yahoo.com"
      className="break-words text-cyan-400 transition-colors hover:text-cyan-300"
    >
      {children}
    </a>
  );
}

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}
