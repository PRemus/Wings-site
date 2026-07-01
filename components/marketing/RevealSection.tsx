"use client";

import type { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function RevealSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const sectionRef = useScrollReveal();

  return (
    <section id={id} ref={sectionRef} className={className}>
      {children}
    </section>
  );
}
