import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Simão — Especialista Senior Front-End",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang === "en" ? "en" : "pt"}>
      <body>{children}</body>
    </html>
  );
}
