/* ============================================================
   Juliana Basilio — Folk Horror & Folclore
   ============================================================ */
(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------
     DADOS — TEXTOS
  --------------------------------------------------------- */
  const WORKS = [
    {
      title: "O Casamento da Ceia",
      kind: "Romance",
      tags: ["folk horror"],
      status: "publicado",
      year: 2024,
      desc: "Uma noiva e o que mora no riacho. O casamento começa na quarta-feira e dura um ano.",
      body: `<p>Em 1962, numa vila que hoje só existe no mapa do IBGE de 1970, uma mulher aceita casar com o que mora no riacho e, por três noites, toma o sobrenome do marido.</p>
             <p>O romance acompanha duas famílias e o rio que separa uma da outra — e que escolhe, a cada geração, um único escolhido. Um livro sobre casamento, herança e a economia afetiva do medo.</p>
             <blockquote>“Ninguém aqui foi de menos.”</blockquote>
             <p>Premiado na mostra de literatura de terror rural (2024), na categoria romance.</p>`,
      meta: ["Romance", "328 páginas", "Editora Bruma", "2024"]
    },
    {
      title: "Fome do Inverno",
      kind: "Romance curto",
      tags: ["folk horror"],
      status: "publicado",
      year: 2023,
      desc: "Três irmãs, um celeiro trancado desde o outono e o que a neve traz quando a despensa esvazia.",
      body: `<p>Escrito em onze noites de febre e relido em onze noites de insônia.</p>
             <p>Três irmãs confinadas numa casa de campo sem energia. O celeiro está trancado desde o outono. Alguém lá dentro come — e não come há muito tempo.</p>
             <blockquote>“A fome é uma coisa que se herda. O apetite é uma coisa que se pega.”</blockquote>`,
      meta: ["Romance curto", "124 páginas", "Edição Casa de Pedra", "2023"]
    },
    {
      title: "Cão Branco do Sertão",
      kind: "Conto",
      tags: ["folclore", "folk horror"],
      status: "no prelo",
      year: 2025,
      desc: "O cachorro que aparece na seca e cobra o que é devido. Reconstituo a partir de três arquivos de 1954.",
      body: `<p>Todos os camponeses do Cerrado Mineiro têm uma história sobre um cachorro branco que aparece no tempo da seca e cobra o que é devido.</p>
             <p>O conto reconstrói essa história a partir de três versões de um mesmo depoimento, gravados por missionários em 1954.</p>
             <blockquote>“Cão branco não bota. Cão branco chega.”</blockquote>`,
      meta: ["Conto", "38 páginas", "Em revisão", "2025"]
    },
    {
      title: "Encantarias Domésticas",
      kind: "Ensaio",
      tags: ["ensaios"],
      status: "publicado",
      year: 2022,
      desc: "Um manual do medo cotidiano: quinze práticas de proteção doméstica e o que elas de fato significam.",
      body: `<p>Encantamentos, sal, agulhas em porta, espelhos virados para baixo. Cada gesto doméstico tem uma função — e a função original não é a que a gente repete hoje.</p>
             <p>Este ensaio reconstrói a função original de quinze práticas e pergunta o que acontece quando repetimos o gesto sem a explicação que o sustentava.</p>
             <blockquote>“Não é superstição. É arquitetura do medo.”</blockquote>`,
      meta: ["Ensaio", "208 páginas", "Editora Bruma", "2022"]
    },
    {
      title: "O Corpo do Rio",
      kind: "Romance curto",
      tags: ["folk horror", "folclore"],
      status: "publicado",
      year: 2023,
      desc: "Uma cidade envia o que não quer para o rio. O rio devolve. Um romance sobre o que a água guarda.",
      body: `<p>Todo dia, às seis da manhã, a barreira passa. Ela leva o que ninguém quer. De volta, ela traz o que se dispensa. Nunca é a mesma quantidade.</p>
             <p>Um romance curto sobre a outra margem — o outro lado do rio, onde mora quem foi lavado pela correnteza.</p>`,
      meta: ["Romance curto", "96 páginas", "Editora Bruma", "2023"]
    },
    {
      title: "Diário de um Caçador de Medos",
      kind: "Ensaio de campo",
      tags: ["ensaios"],
      status: "inédito",
      year: 2026,
      desc: "Doze anos de anotação em cadernos de bolso, transcritos e comentados pela primeira vez.",
      body: `<p>Este é o livro que eu não consigo terminar, porque cada anotação exige três outras.</p>
             <p>São doze anos de caderno: o que ouvi, de quem, em que estação, e o que aconteceu depois. Trezentos e dezassete casos documentados — dos quais onze permanecem sem explicação.</p>
             <blockquote>“Um assombro é uma pessoa que você viu e não sabe o nome.”</blockquote>`,
      meta: ["Ensaio", "Em escrita", "2026"]
    },
    {
      title: "A Ceia e o Silêncio",
      kind: "Livro de contos",
      tags: ["folk horror"],
      status: "publicado",
      year: 2025,
      desc: "Nove contos de mesa posta, em que o último a chegar nem sempre é humano.",
      body: `<p>Nove contos. Nove mesas. Em todos eles, alguém espera há tempo demais e o pão já foi cortado.</p>
             <p>Reunidos pela primeira vez, os contos formam um único ritual: a ceia do medo, que só termina quando todos se sentam.</p>`,
      meta: ["Contos", "256 páginas", "Edição Casa de Pedra", "2025"]
    },
    {
      title: "Enciclopédia do Assombro",
      kind: "Tradução",
      tags: ["tradução", "folclore"],
      status: "publicado",
      year: 2021,
      desc: "Tradução anotada de um manual de assombros do século XIX, com apêndice brasileiro.",
      body: `<p>Um manual do século XIX que cataloga o que assombra, onde, em que hora e em que condição negocia a saída.</p>
             <p>Minha tradução traz notas de rodapé que ligam cada entrada a práticas ainda vivas no interior do Brasil — e um apêndice com dezoito casos recolhidos em campo.</p>`,
      meta: ["Tradução", "304 páginas", "Editora Bruma", "2021"]
    },
    {
      title: "Boi de Almas",
      kind: "Conto",
      tags: ["folclore"],
      status: "revisão",
      year: 2026,
      desc: "O rebanho que passa na estrada antes do amanhecer e o boi que ninguém quis comer.",
      body: `<p>Na Serra da Canastra, conta-se que à noite se ouve um grande mugido e se sente cheiro de curral queimado.</p>
             <p>Este conto reconstrói a história a partir de quatro versões orais recolhidas entre 1998 e 2024, com o material sonoro de cada informante preservado.</p>`,
      meta: ["Conto", "42 páginas", "Em revisão", "2026"]
    },
    {
      title: "Sapos, Ventos e Uivos",
      kind: "Ensaio de campo",
      tags: ["folclore", "ensaios"],
      status: "no prelo",
      year: 2025,
      desc: "O que se sabe — e o que se inventa — sobre o uivo animal e a morte anunciada pelos bichos.",
      body: `<p>Por que a coruja anuncia a morte? Por que o sapo é sempre associado ao diabo? Por que só o cachorro avisa?</p>
             <p>Um ensaio sobre a fala dos animais, a porteira da morte e as formas pelas quais uma comunidade decide que um sinal chegou.</p>`,
      meta: ["Ensaio", "176 páginas", "No prelo", "2025"]
    }
  ];

  /* ---------------------------------------------------------
     DADOS — ARQUIVO DO FOLCLORE
  --------------------------------------------------------- */
  const ARCHIVE = [
    {
      name: "O Vigia da Neblina",
      type: "mito",
      region: "Serra da Mantiqueira, MG",
      sum: "Figura humana vista dentro da neblina, sempre de costas, imóvel, na altura de um poste.",
      body: `<p>Quem entra na neblina depois das cinco da tarde e a vê descendo deve parar de andar e esperar. Não gritar, não virar as costas. A figura não se move enquanto houver alguém atrás dela — e o amanhecer é o único fim do turno.</p>
             <p>Há variantes em que o vigia é uma pessoa que se perdeu na serra e agora guarda o caminho de volta. Há versões mais antigas em que ele conta os que entram, e o número só desce quando alguém desiste de voltar.</p>
             <blockquote>“Você não olha para ele. Você espera que ele vá embora.”</blockquote>`,
      tags: ["neblina", "serra", "vigia"]
    },
    {
      name: "A Planteira",
      type: "lenda",
      region: "Galiza e Val de Doas",
      sum: "A cigana que bate à porta e pede um copo de leite. A hospitalidade é um contrato.",
      body: `<p>Uma mulher que bate três vezes à porta de noite. Aceita o que for oferecido — de preferência leite — e, ao amanhecer, deixou ouro na soleira. Recusá-la é um convite formal ao desastre.</p>
             <p>Há quatro versões registradas na Galiza e uma em Trás-os-Montes onde o que se recusa não é o leite, mas a saudade. Quem não dá de beber, dá de chorar.</p>
             <blockquote>“Bebe o leite, que é barato. O que vem depois é que é caro.”</blockquote>`,
      tags: ["galiza", "cigana", "hospitalidade", "leite"]
    },
    {
      name: "O Cobrador de Dívidas",
      type: "mito",
      region: "Nordeste brasileiro",
      sum: "Vem cobrar o que foi emprestado sem juro — e o juro nunca foi dinheiro.",
      body: `<p>Aparece na forma de um homem comum, sempre no fim de um evento: o fim de uma festa, o fim de um casamento, o fim de um aperto de mão. Ele pergunta, educadamente, o que lhe devem. Ninguém lembra ter pegado emprestado, e mesmo assim se paga.</p>
             <p>O que se paga nunca é dinheiro. É uma lembrança, uma estação, uma parte da vida que se perde sem perceber.</p>`,
      tags: ["dívida", "nordeste", "juro", "memória"]
    },
    {
      name: "A Caipira",
      type: "lenda",
      region: "Beira Baixa, Portugal",
      sum: "Mulher que se transforma em burro para castigar o homem que não lhe deu água.",
      body: `<p>A lenda do homem que não deu água: uma mulher que, com sede, aparece sob a forma de um burro nas festas e nos caminhos. Rir dela ou não a reconhecer é o que sela a maldição.</p>
             <p>Em cada aldeia o apelido muda — Caipira, Ferradeira, Malhadeira — mas o núcleo permanece: a transformação é a vingança de quem não foi tratada como gente.</p>`,
      tags: ["portugal", "maldição", "transformação", "festa"]
    },
    {
      name: "Mula sem Cabeça",
      type: "lenda",
      region: "Brasil interior",
      sum: "Corre pela estrada à noite, com os pelos arrepiados, procurando a cabeça que perdeu.",
      body: `<p>Ela corre sem cabeça, com o fogo dos olhos aceso, e o som de ferro arrastando. Quem ouve e não se esconde passa dez anos sem dormir direito; quem não ouve, morre em breve.</p>
             <p>As explicações variam: foi uma mulher que menstruou em caminho proibido, uma bruxa castigada, ou simplesmente a fundição local que perdeu um cavalo e nunca admitiu.</p>`,
      tags: ["mula", "estrada", "noite", "castigo"]
    },
    {
      name: "O Curupira",
      type: "mito",
      region: "Amazônia",
      sum: "Protetor do mato: pés invertidos, genitália fechada, caça quem caça demais.",
      body: `<p>Tem os pés virados para trás e a genitália tapada por uma cabaça ou por uma pedra. Caça quem caça demais e esvazia a caça do invasor, devolvendo tudo à mata.</p>
             <p>É ambíguo por natureza: em algumas narrativas protege o caçador honesto e castiga o preguiçoso; em outras, é ele próprio quem não se decide.</p>`,
      tags: ["amazônia", "mata", "protetor", "caça"]
    },
    {
      name: "A Cuca",
      type: "mito",
      region: "Folclore afro-brasileiro",
      sum: "Senhora dos dentes, Maria do Ingá, que atrai as crianças para o fundo do quintal.",
      body: `<p>Tem dentes de mar e uma boca que engole. Chama as crianças com voz de doce, oferece pão de mel e as leva para o fundo do quintal, de onde não voltam — até que a boca feche.</p>
             <p>Lida por muito tempo como reflexo da bruxa europeia e do medo de rua, a Cuca brasileira é também uma mistura de resistência: a senhora que protege, que ensina e que cobra.</p>`,
      tags: ["cuca", "criança", "afro-brasileiro", "dentes"]
    },
    {
      name: "O Lobisomem",
      type: "crença",
      region: "Europa mediterrânea e Sul",
      sum: "A maldição do sétimo filho varão, que se transforma em lobo na lua cheia.",
      body: `<p>Nasce da ideia de que o sétimo filho masculino carrega uma marca de nascença e uma sorte invertida — o mesmo fogo que, em outra parte da Europa, dá origem à lenda do músico de violino.</p>
             <p>No folclore português a condição é diferente: basta ser filho de uma mulher que já foi lobisomem, ou romper o último tabu à noite de lua cheia. A marca costuma ser a única herança que se transmite.</p>`,
      tags: ["lua", "sétimo filho", "maldição", "marca"]
    },
    {
      name: "Santa Muerte do Sertão",
      type: "prática",
      region: "Norte e Nordeste",
      sum: "Culto sincrético com oferendas práticas: velas, whisky e maços de cigarro.",
      body: `<p>Não é fé no sentido ocidental nem superstição: é uma relação contratual. A Santa Muerte é a intercessora dos casos que nenhuma igreja resolve — amor, dívida, proteção, vingança.</p>
             <p>Oferece-se o que se deseja em troca de uma proteção específica. A oferta é sempre precisa: não "algo", mas o objeto exato do pedido.</p>`,
      tags: ["culto", "oferenda", "sincrético", "proteção"]
    },
    {
      name: "O Boto Cor-de-Rosa",
      type: "lenda",
      region: "Bacia Amazônica",
      sum: "Macho de boto que vira homem de roupa branca e seduz as moças à beira-rio.",
      body: `<p>Tem mão de gente, o corpo de peixe e olhos que pedem arrependimento. Seduz, ama, e às vezes é amor de verdade — e sempre leva a mulher para debaixo d'água.</p>
             <p>Há versões em que é benigno e devolve a moça à margem, cansada mas viva. A divergência entre essas versões é, em si, o principal achado do meu arquivo.</p>`,
      tags: ["amazônia", "rio", "sedução", "transformação"]
    },
    {
      name: "O Wendigo",
      type: "mito",
      region: "Floresta norte-americana",
      sum: "A fome insaciável que nasce do inverno e da privação — o canibal que consome para sobreviver.",
      body: `<p>Mais antigo que a lenda moderna: a tradição oral do norte dos Grandes Lagos descreve uma figura de fome infinita que surge quando a caça falha e o inverno aperta.</p>
             <p>No folk horror contemporâneo o wendigo foi convertido em antagonista de filme de terror. No arquivo, ele volta a ser o que sempre foi: uma descrição do que a fome faz com o corpo — e a consciência de que a fome nunca se contenta com pouco.</p>`,
      tags: ["inverno", "fome", "floresta", "canibalismo"]
    },
    {
      name: "A Sereia do Rio Doce",
      type: "lenda",
      region: "Vale do Rio Doce, ES/MG",
      sum: "Canta à beira d'água no fim da tarde. Quem escuta a cantiga por três noites não volta.",
      body: `<p>Uma voz que pede ajuda e um banho. Se você ajudar, ela pede mais. Se ouvir até o fim, ela pede que você entre.</p>
             <p>Variantes de tradição oral e registros de candomblé convergem no mesmo ponto: o rio é caminho de ida, e a cantiga é o bilhete de retorno.</p>`,
      tags: ["rio", "canta", "sereia", "noite"]
    }
  ];

  /* ---------------------------------------------------------
     DADOS — SINAIS
  --------------------------------------------------------- */
  const SIGNS = [
    { text: "O rio sobe quando alguém mente na sua casa.", note: "Presságio de água. A correnteza não distingue quem mente." },
    { text: "Cão preto em caminho de terra é aviso de morte — a sua, ou de quem o vê.", note: "Registrado em 11 de 41 relatos. A parte do avistador nunca é opcional." },
    { text: "Planta-se parafusos com a cabeça virada para baixo, na entrada de casa.", note: "Protege. Desfaz, e o mal aprende o caminho." },
    { text: "Quem assobia de noite dentro de casa chama o que mora lá fora.", note: "A crença é quase universal. A prática, não." },
    { text: "Sete sinos na caveira: o sétimo não se repete.", note: "Contagem que aparece em sete países e nenhuma cidade." },
    { text: "Fogo aceso na janela mantém o que estiver fora longe da soleira.", note: "Fogo é a fronteira. Sem fogo, não há porta." },
    { text: "O caixão que se mexe é sempre de outro — nunca do seu.", note: "Versão em que o caixão é de madeira e está no porão." },
    { text: "Depois do terceiro sino, não se fala o nome de ninguém.", note: "A regra tem prazo, não motivo." },
    { text: "Sal na soleira não é contra o que entra: é contra o que sai.", note: "A inversão é o ponto. O sal guarda." },
    { text: "O espelho virado para baixo esconde o rosto, não a cena.", note: "Variante: espelho virado para a parede." },
    { text: "Chuva de sangue no pasto é aviso de trilha perdida.", note: "A trilha do gado e a trilha de gente não são a mesma." },
    { text: "A sorte anunciada em voz alta não se perde.", note: "A sorte contada em silêncio pertence a outro." },
    { text: "Alho na nuca, cravo no bolso, sal no bolso — o resto é rumo.", note: "Prática de feitiço defensivo, de defesa." },
    { text: "Uma pilha de pratos quebrados na porta impede a entrada.", note: "Quebra-se mais ao fim de cada temporal." },
    { text: "Não conte as portas de uma casa que você não conhece.", note: "Vinte e uma, na maioria dos relatos." }
  ];

  const TYPE_LABEL = { mito: "Mito", lenda: "Lenda", "crença": "Crença", "prática": "Prática" };

  /* ---------------------------------------------------------
     TEMA
  --------------------------------------------------------- */
  const themeBtn = $("#themeBtn");
  const storedTheme = localStorage.getItem("jb-theme");
  if (storedTheme) document.documentElement.dataset.theme = storedTheme;

  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "midnight" ? "lantern" : "midnight";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("jb-theme", next);
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", next === "lantern" ? "#e9dfc9" : "#09090b");
  });

  /* ---------------------------------------------------------
     EFEITO DE TEXTO
  --------------------------------------------------------- */
  const GLYPHS = "ÁÀÂÃÇÉÊÍÓÔÕÚabcdefghijklmnopqrstuvwxyz0123456789";

  function scramble(el, finalText) {
    if (reduceMotion) { el.textContent = finalText; return; }
    const chars = [...finalText];
    let frame = 0;
    const total = chars.length * 3 + 14;
    const tick = () => {
      el.textContent = chars
        .map((c, i) => {
          if (c === " ") return " ";
          if (frame > i * 3 + 4) return c;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");
      frame++;
      if (frame < total) requestAnimationFrame(tick);
      else el.textContent = finalText;
    };
    tick();
  }

  const heroTitle = $("#heroTitle");
  scramble(heroTitle, heroTitle.dataset.scramble);

  /* ---------------------------------------------------------
     REVEAL + DOTS + PROGRESSO
  --------------------------------------------------------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  const dotLinks = $$("#dots a");
  const panels = $$(".panel");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        dotLinks.forEach((d) => d.classList.toggle("is-active", d.dataset.dot === e.target.dataset.section));
      });
    },
    { threshold: 0.4 }
  );
  panels.forEach((p) => sectionObserver.observe(p));

  const progressBar = $("#progressBar");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------
     NAVEGAÇÃO POR TECLADO
  --------------------------------------------------------- */
  document.addEventListener("keydown", (e) => {
    if (modalOpen) return;
    if (/input|textarea|select/i.test(e.target.tagName)) return;
    if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "PageDown" ? 1 : -1;
    const idx = panels.findIndex((p) => {
      const r = p.getBoundingClientRect();
      return r.top <= window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5;
    });
    const next = panels[Math.min(Math.max(idx + dir, 0), panels.length - 1)];
    if (next) next.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });

  /* ---------------------------------------------------------
     MODAL
  --------------------------------------------------------- */
  const modal = $("#modal");
  const modalKicker = $("#modalKicker");
  const modalTitle = $("#modalTitle");
  const modalBody = $("#modalBody");
  const modalMeta = $("#modalMeta");
  let modalOpen = false;
  let lastFocused = null;

  function openModal({ kicker, title, body, meta }) {
    lastFocused = document.activeElement;
    modalKicker.textContent = kicker || "";
    modalTitle.textContent = title;
    modalBody.innerHTML = body || "";
    modalMeta.innerHTML = (meta || []).map((m) => `<span>${m}</span>`).join("");
    modal.hidden = false;
    modalOpen = true;
    document.body.style.overflow = "hidden";
    $(".modal-close", modal).focus();
  }

  function closeModal() {
    if (!modalOpen) return;
    modal.hidden = true;
    modalOpen = false;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  $$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  /* ---------------------------------------------------------
     TEXTOS
  --------------------------------------------------------- */
  const worksGrid = $("#worksGrid");

  function workCard(w) {
    const el = document.createElement("button");
    el.className = "work";
    el.type = "button";
    el.innerHTML = `
      <span class="w-kind">${w.kind}</span>
      <h3>${w.title}</h3>
      <p class="w-desc">${w.desc}</p>
      <span class="w-foot">
        <span>${w.year}</span>
        <span class="status" data-s="${w.status}">${w.status}</span>
      </span>`;
    el.addEventListener("click", () =>
      openModal({ kicker: w.kind, title: w.title, body: w.body, meta: [...w.meta, w.status] })
    );
    return el;
  }

  function renderWorks(filter = "todos") {
    worksGrid.innerHTML = "";
    const list = filter === "todos" ? WORKS : WORKS.filter((w) => w.tags.includes(filter));
    if (!list.length) {
      worksGrid.innerHTML = `<p class="empty">Nada por aqui ainda.</p>`;
      return;
    }
    list.forEach((w) => worksGrid.appendChild(workCard(w)));
  }

  $$("#workFilters .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$("#workFilters .chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      renderWorks(chip.dataset.filter);
    });
  });
  renderWorks();

  /* ---------------------------------------------------------
     ARQUIVO DO FOLCLORE
  --------------------------------------------------------- */
  const archiveGrid = $("#archiveGrid");
  const archiveSearch = $("#archiveSearch");
  const archiveEmpty = $("#archiveEmpty");
  let archiveType = "todos";

  const norm = (s) =>
    s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  function renderArchive() {
    const q = archiveSearch.value.trim().toLowerCase();
    const list = ARCHIVE.filter((item) => {
      const okType = archiveType === "todos" || item.type === archiveType;
      const hay = norm([item.name, item.region, item.sum, item.type, ...(item.tags || [])].join(" "));
      const okQ = !q || norm(q).split(/\s+/).every((term) => hay.includes(term));
      return okType && okQ;
    });

    archiveGrid.innerHTML = "";
    archiveEmpty.hidden = list.length > 0;

    list.forEach((item) => {
      const el = document.createElement("button");
      el.className = "entry";
      el.type = "button";
      el.innerHTML = `
        <span class="e-type">${TYPE_LABEL[item.type]}</span>
        <h3>${item.name}</h3>
        <p class="e-region">${item.region}</p>
        <p class="e-sum">${item.sum}</p>`;
      el.addEventListener("click", () =>
        openModal({
          kicker: `${TYPE_LABEL[item.type]} · ${item.region}`,
          title: item.name,
          body: item.body,
          meta: [TYPE_LABEL[item.type], item.region, ...(item.tags || []).slice(0, 3)]
        })
      );
      archiveGrid.appendChild(el);
    });
  }

  $$("#archiveFilters .chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      $$("#archiveFilters .chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      archiveType = chip.dataset.type;
      renderArchive();
    });
  });
  archiveSearch.addEventListener("input", renderArchive);
  renderArchive();

  /* ---------------------------------------------------------
     SINAL
  --------------------------------------------------------- */
  const oracleBtn = $("#oracleBtn");
  const oracleText = $("#oracleText");
  const oracleNote = $("#oracleNote");
  let lastIndex = -1;

  function typeOut(el, text, done) {
    if (reduceMotion) { el.textContent = text; done && done(); return; }
    let i = 0;
    el.textContent = "";
    const caret = document.createElement("i");
    caret.className = "caret";
    el.appendChild(caret);
    const step = () => {
      if (i < text.length) {
        caret.insertAdjacentText("beforebegin", text[i++]);
        setTimeout(step, 26 + Math.random() * 34);
      } else {
        caret.remove();
        done && done();
      }
    };
    step();
  }

  oracleBtn.addEventListener("click", () => {
    let i;
    do { i = Math.floor(Math.random() * SIGNS.length); } while (i === lastIndex && SIGNS.length > 1);
    lastIndex = i;
    const sign = SIGNS[i];
    oracleNote.textContent = "";
    typeOut(oracleText, sign.text, () => {
      oracleNote.textContent = sign.note;
      oracleNote.animate(
        [{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }],
        { duration: 600, easing: "ease-out" }
      );
    });
  });

  /* ---------------------------------------------------------
     FORMULÁRIO
  --------------------------------------------------------- */
  const form = $("#contactForm");
  const formStatus = $("#formStatus");

  const setError = (name, msg) => {
    const field = form.querySelector(`[name="${name}"]`).closest(".field");
    field.classList.toggle("invalid", Boolean(msg));
    field.querySelector(".err").textContent = msg || "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#fName").value.trim();
    const email = $("#fEmail").value.trim();
    const msg = $("#fMsg").value.trim();

    let ok = true;
    if (name.length < 2) { setError("name", "Diga-me como te chamar."); ok = false; } else setError("name", "");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setError("email", "Esse e-mail não parece válido."); ok = false; } else setError("email", "");
    if (msg.length < 10) { setError("message", "Conte um pouco mais — ao menos uma frase inteira."); ok = false; } else setError("message", "");

    formStatus.classList.toggle("error", !ok);
    if (!ok) {
      formStatus.textContent = "Falta um pouco de alguma coisa.";
      return;
    }

    formStatus.textContent = "Mensagem acesa. Respondo em até três noites — antes que a lua mude.";
    form.reset();
  });

  $$(".socials a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      formStatus.classList.remove("error");
      formStatus.textContent = `O ${a.dataset.social} da Juliana está em reformulação. Escreva por e-mail — chega mais rápido.`;
    });
  });

  $("#creditsLink").addEventListener("click", (e) => {
    e.preventDefault();
    openModal({
      kicker: "Ficha técnica",
      title: "Créditos",
      body: `<p>Site de página única, construído em HTML, CSS e JavaScript puro — sem frameworks, sem rastreamento, sem cookies.</p>
             <p>Tipografia: Cormorant Garamond e Inter. Texturas geradas em SVG e Web Audio. Todos os textos, o arquivo e as personagens são ficção.</p>
             <p>Feito com luz de vela, chumbo e muita paciência.</p>`,
      meta: ["HTML", "CSS", "JavaScript"]
    });
  });

  /* ---------------------------------------------------------
     ÁUDIO AMBIENTE
  --------------------------------------------------------- */
  const audioBtn = $("#audioBtn");
  let ctx = null;
  let masterGain = null;

  function startDrone() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return false;
    ctx = new AudioCtx();

    masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, ctx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.13, ctx.currentTime + 4);
    masterGain.connect(ctx.destination);

    // ruído marrom filtrado (vento / sussurro)
    const len = ctx.sampleRate * 4;
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const nf = ctx.createBiquadFilter();
    nf.type = "lowpass";
    nf.frequency.value = 380;
    nf.Q.value = 2.5;

    const ng = ctx.createGain();
    ng.gain.value = 0.55;
    noise.connect(nf).connect(ng).connect(masterGain);
    noise.start();

    // sopro lento no filtro
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.045;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 160;
    lfo.connect(lfoGain).connect(nf.frequency);
    lfo.start();

    // bordões graves
    [55, 82.41, 110].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 2 ? "triangle" : "sine";
      osc.frequency.value = freq;

      const g = ctx.createGain();
      g.gain.value = 0.3 / (i + 1);

      const vib = ctx.createOscillator();
      vib.frequency.value = 0.03 + i * 0.017;
      const vibGain = ctx.createGain();
      vibGain.gain.value = 0.12 / (i + 1);
      vib.connect(vibGain).connect(g.gain);

      osc.connect(g).connect(masterGain);
      osc.start();
      vib.start();
    });

    return true;
  }

  audioBtn.addEventListener("click", async () => {
    const wasOn = audioBtn.getAttribute("aria-pressed") === "true";

    if (!ctx) {
      const ok = startDrone();
      if (!ok) {
        audioBtn.title = "Áudio indisponível neste navegador";
        return;
      }
    }
    if (ctx.state === "suspended") await ctx.resume();

    const now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(wasOn ? 0 : 0.13, now + 1.2);

    audioBtn.setAttribute("aria-pressed", String(!wasOn));
  });

  /* ---------------------------------------------------------
     CURSOR GLOW
  --------------------------------------------------------- */
  const glow = $("#cursorGlow");
  let gx = 0, gy = 0, tx = 0, ty = 0;

  window.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
    glow.classList.add("on");
  });
  window.addEventListener("mouseleave", () => glow.classList.remove("on"));

  (function loop() {
    gx += (tx - gx) * 0.08;
    gy += (ty - gy) * 0.08;
    glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    requestAnimationFrame(loop);
  })();

  /* ---------------------------------------------------------
     MISC
  --------------------------------------------------------- */
  $("#year").textContent = new Date().getFullYear();
})();
