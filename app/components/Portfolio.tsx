import LangToggle from "./LangToggle";
import type { Content, Lang } from "@/lib/i18n";

export default function Portfolio({
  lang,
  content,
}: {
  lang: Lang;
  content: Content;
}) {
  return (
    <div className="screen">
      <header>
        <span>{content.headerLabel}</span>
        <LangToggle current={lang} />
      </header>

      <main>
        <h1>
          Daniel Simão
          <br />
          <span>{content.tagline}</span>
        </h1>

        <p className="intro">{content.intro}</p>

        <div className="status">
          <span className="dot" />
          {content.status}
        </div>

        <div className="skills">
          {content.skills.map((group) => (
            <div className="skill-group" key={group.title}>
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <span>{content.footerLocation}</span>
        <a href="mailto:daniel.simon@example.com">{content.contactLabel}</a>
      </footer>
    </div>
  );
}
