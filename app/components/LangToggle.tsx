"use client";

import Link from "next/link";
import type { Lang } from "@/lib/i18n";

function rememberChoice(lang: Lang) {
  document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
}

export default function LangToggle({ current }: { current: Lang }) {
  return (
    <div className="lang-toggle" role="group" aria-label="Idioma / Language">
      <Link
        href="/pt"
        onClick={() => rememberChoice("pt")}
        className={current === "pt" ? "active" : undefined}
      >
        PT
      </Link>
      <span className="sep">/</span>
      <Link
        href="/en"
        onClick={() => rememberChoice("en")}
        className={current === "en" ? "active" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
