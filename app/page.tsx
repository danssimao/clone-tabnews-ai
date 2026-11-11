import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { LANGS, isLang, type Lang } from "@/lib/i18n";

function detectLangFromBrowser(acceptLanguage: string | null): Lang | null {
  if (!acceptLanguage) return null;

  const ranked = acceptLanguage
    .split(",")
    .map((entry) => {
      const [tag = "", ...params] = entry.trim().split(";");
      const qParam = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="));
      const quality = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
      return { tag: tag.trim().toLowerCase(), quality };
    })
    .filter(({ tag, quality }) => tag.length > 0 && Number.isFinite(quality))
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of ranked) {
    const primary = tag === "*" ? null : tag.split("-")[0];
    if (isLang(primary)) return primary;
  }

  return null;
}

function detectLangFromIp(): Lang | null {
  // Ponto de extensão para detecção por IP/país (futura).
  // O header da requisição está disponível em `requestHeaders` neste escopo.
  // Ex.: Vercel → requestHeaders.get("x-vercel-ip-country") com regra de países
  //      (BR/PT → "pt"); servidor próprio → geoip-lite + banco MaxMind.
  return null;
}

/**
 * Rota raiz: detecta o idioma e redireciona para /pt ou /en.
 *
 * Prioridade: cookie (escolha manual) > idioma do navegador (Accept-Language)
 * > IP (a implementar) > padrão "pt".
 */
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const cookieStore = await cookies();
  const saved = cookieStore.get("lang")?.value;
  const fromCookie = LANGS.find((lang) => lang === saved);

  const requestHeaders = await headers();
  const lang =
    fromCookie ??
    detectLangFromBrowser(requestHeaders.get("accept-language")) ??
    detectLangFromIp() ??
    "pt";

  // Preserva a query string original (utm, etc.) no destino.
  const search = await searchParams;
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(search)) {
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item));
    } else if (value !== undefined) {
      query.append(key, value);
    }
  }
  const qs = query.toString();

  redirect(`/${lang}${qs ? `?${qs}` : ""}`);
}
