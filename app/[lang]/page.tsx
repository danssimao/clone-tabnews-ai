import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Portfolio from "../components/Portfolio";
import { LANGS, contentFor, isLang } from "@/lib/i18n";

type Props = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};

  return {
    title: contentFor(lang).documentTitle,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
      },
    },
  };
}

export default async function LanguagePage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return <Portfolio lang={lang} content={contentFor(lang)} />;
}
