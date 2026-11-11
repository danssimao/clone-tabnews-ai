# clone-tabnews-ai
implementação do tabnews com agents de IA

## Front-end

Portfólio migrado de `index.html` estático para Next.js 16.2.12
(App Router, TypeScript, Turbopack), com roteamento por idioma.

```bash
npm install      # dependências
npm run dev      # servidor de desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # servir o build de produção
npm run lint     # ESLint
```

### Rotas

- `/` — detecta o idioma e redireciona (307) para `/pt` ou `/en`
- `/pt` — versão em português
- `/en` — versão em inglês
- qualquer outro valor em `[lang]` → 404

Ordem de detecção na raiz: **cookie `lang` (escolha manual) → `Accept-Language`
do navegador → IP (ponto de extensão, ainda não implementado) → padrão `pt`**.
A query string original (ex.: utm) é preservada no destino.

### Estrutura

- `app/page.tsx` — rota raiz: detecção de idioma + redirect
- `app/[lang]/page.tsx` — páginas PT/EN (estáticas, metadata por idioma)
- `app/components/Portfolio.tsx` — markup do portfólio (Server Component)
- `app/components/LangToggle.tsx` — toggle PT/EN (navega entre rotas e grava cookie)
- `lib/i18n.ts` — idiomas suportados e dicionário de textos PT/EN
- `app/layout.tsx` — layout raiz (`<html lang>` dinâmico)
- `app/globals.css` — estilos migrados do `<style>` original
