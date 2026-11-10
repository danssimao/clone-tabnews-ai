# Juliana Basilio — Folk Horror & Folclore

Site de página única (one-page) para a escritora **Juliana Basilio**, que escreve sobre
Folk Horror e Folclore. HTML, CSS e JavaScript puros — sem frameworks, sem build,
sem dependências, sem rastreamento.

## Rodar

Abra `index.html` direto no navegador, ou sirva a pasta:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Arquivos

| Arquivo       | O que faz                                                       |
| ------------- | --------------------------------------------------------------- |
| `index.html`  | Estrutura das 6 seções, navegação, modal e barra superior.      |
| `styles.css`  | Tema escuro/lantern, layout fullscreen, animações, responsivo.  |
| `script.js`   | Dados dos textos/arquivo, filtros, modal, oracle, áudio, form. |

## Seções (todas fullscreen, com scroll-snap)

1. **Início** — capa com título em efeito de scramble.
2. **Sobre** — biografia, ficha técnica e manifesto.
3. **Textos** — grade de obras filtrável (Folk Horror / Folclore / Ensaios / Traduções).
4. **Arquivo** — bestiário folclore com busca e filtro por tipo (mito, lenda, crença, prática).
5. **Sinal** — gerador de presságios com efeito de digitação.
6. **Contato** — e-mails, redes e formulário com validação.

## Interatividades

- **Tema lanterna** — alterna entre o modo `midnight` (escuro) e `lantern` (claro, quente),
  salvo em `localStorage`.
- **Áudio ambiente** — drone gerado via Web Audio API (ruído marrom filtrado + bordões
  graves), sem nenhum arquivo de áudio externo.
- **Filtros e busca** — textos e arquivo do folclore filtram ao vivo.
- **Modal de leitura** — clique em qualquer obra ou ficha de folclore.
- **Oracle de sinais** — 15 presságios sorteados aleatoriamente, digitados letra a letra.
- **Navegação** — pontos laterais, barra de progresso, setas do teclado, `Esc` fecha o modal.
- **Atmosfera** — grão de filme em SVG, vinheta, brilho que segue o cursor, revelações
  por `IntersectionObserver`.

## Acessibilidade

Marcos semânticos, `aria-label` nos controles, foco visível, `aria-live` no oracle e no
formulário, e suporte a `prefers-reduced-motion` (desliga animações e scrambling).

## Nota

Todas as obras, personagens, prêmios e dados do arquivo são **ficção**, criados para
demonstrar o site. Os textos e o estilo visual são originais.
