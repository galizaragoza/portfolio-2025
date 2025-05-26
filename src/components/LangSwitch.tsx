// components/LangSwitch.tsx
"use client";

import { usePathname, Link } from "@/i18n/navigation";
import { FaLanguage } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const locales = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "gl", label: "Gallego" },
] as const;

export default function LangSwitch() {
  const path = usePathname();

  return (
    <div className="absolute top-10 right-10 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 rounded-full bg-gray-200 transition">
          <FaLanguage size={40} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {locales.map(({ code, label }) => (
            <DropdownMenuItem key={code} asChild>
              <Link href={path} locale={code} className="w-full">
                {label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
