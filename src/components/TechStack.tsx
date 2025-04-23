// components/TechStack.tsx
"use client";
import { TechItem } from "@/data/techStack";

interface Props {
  items: TechItem[];
}

export default function TechStack({ items }: Props) {
  return (
    <section aria-labelledby="tech-heading" className="pt-8 mx-auto pt-20">
      <ul className="flex flex-wrap gap-8">
        {items.map(({ Icon, color, label }) => (
          <li key={label} aria-label={label}>
            <Icon size={60} style={{ color }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
