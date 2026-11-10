import { navItems, services, steps, faqs } from "./content.js";

const routes = {
  "/": { label: "Início" },
  "/empresa": { label: "A empresa" },
  "/fundador": { label: "Fundador" },
  "/servicos": { label: "Serviços" },
  "/projetos": { label: "Projetos" },
  "/processo": { label: "Como trabalhamos" },
  "/manifesto": { label: "Manifesto" },
  "/contato": { label: "Solicitar orçamento" },
};

const socialImagePath = "./images/hero-architecture.webp";
const seoMetadata = {
  "/": {
    title: "Construprime | Construção civil, reformas e gestão de obras",
    description: "Construção civil, reformas, gestão de obras e acabamentos. Apresente seu projeto à Construprime pelo WhatsApp.",
    keywords: "Construprime, construção civil, reformas, gestão de obras, acabamentos",
  },
  "/empresa": {
    title: "A Construprime | Construção com propósito",
    description: "Conheça a Construprime e sua atuação em construção civil, reformas, gestão de obras e acabamentos.",
    keywords: "Construprime, empresa de construção, construção civil, reformas",
  },
  "/fundador": {
    title: "Flávio | Fundador da Construprime",
    description: "Conheça Flávio, fundador e CEO da Construprime, e converse sobre seu projeto de construção ou reforma.",
    keywords: "Flávio, fundador Construprime, construção civil, reformas",
  },
  "/servicos": {
    title: "Serviços de construção e reforma | Construprime",
    description: "Conheça as frentes de atuação da Construprime: construção civil, reformas e melhorias, gestão de obras gerais e acabamentos.",
    keywords: "construção civil, reformas, gestão de obras, acabamentos, Construprime",
  },
  "/projetos": {
    title: "Converse sobre seu projeto | Construprime",
    description: "Organize as informações do seu projeto de construção ou reforma e converse com a Construprime pelo WhatsApp.",
    keywords: "projeto de construção, projeto de reforma, orçamento de obra, Construprime",
  },
  "/processo": {
    title: "Como trabalhamos | Construprime",
    description: "Entenda as etapas de conversa, definição de escopo, proposta e acompanhamento de uma obra com a Construprime.",
    keywords: "processo de obra, gestão de obras, construção, acompanhamento, Construprime",
  },
  "/manifesto": {
    title: "Construir com propósito | Construprime",
    description: "Planejamento, clareza e cuidado em cada etapa: conheça a visão da Construprime sobre construir com propósito.",
    keywords: "Construprime, construção com propósito, construção civil, planejamento de obra",
  },
  "/contato": {
    title: "Fale com a Construprime | Solicite um orçamento",
    description: "Fale com a Construprime pelo WhatsApp e conte sobre sua obra para conversar sobre os próximos passos.",
    keywords: "contato Construprime, orçamento de obra, construção civil, reformas",
  },
};

const canonicalHome = document.head.querySelector('link[rel="canonical"]')?.href || "https://construprime-ybsupctp.manus.space/";
const canonicalBase = new URL("./", canonicalHome);
const socialImage = new URL(socialImagePath, canonicalBase).href;
const siteBasePath = canonicalBase.pathname;
const currentPathname = window.location.pathname === siteBasePath.replace(/\/$/, "") ? siteBasePath : window.location.pathname;
const routeRelativePath = currentPathname.startsWith(siteBasePath) ? currentPathname.slice(siteBasePath.length) : currentPathname.replace(/^\/+/, "");
const normalizedRoute = routeRelativePath.replace(/\/+$/, "");
const requestedPath = normalizedRoute ? `/${normalizedRoute}` : "/";
const path = requestedPath.endsWith(".html") ? requestedPath.slice(0, -5) || "/" : requestedPath;
const isKnownRoute = Object.prototype.hasOwnProperty.call(routes, path);
const routeHref = (href) => (href === "/" ? "./" : `./${href.slice(1)}.html`);
const routeLink = (href, label, className = "") => `<a class="${className}" href="${routeHref(href)}">${label}</a>`;
const imageNote = `<span class="image-note"><span aria-hidden="true">◆</span> Imagem editorial de arquitetura</span>`;
const whatsappNumber = "5511969435549";
const formattedWhatsappNumber = "+55 (11) 96943-5549";

function logo() {
  return `<a class="brand" href="${routeHref("/")}" aria-label="Construprime — Início">
    <img src="./images/construprime-logo.jpg" alt="" width="42" height="42">
    <span class="brand-copy"><strong>Construprime</strong><small>CONSTRUINDO COM PROPÓSITO</small></span>
  </a>`;
}

function siteHeader() {
  const links = navItems.map((item) => routeLink(item.href, item.label, path === item.href ? "nav-link is-current" : "nav-link")).join("");
  return `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div class="trust-bar"><span><b>CONSTRUÇÃO CIVIL</b> · REFORMAS · GESTÃO DE OBRAS · ACABAMENTOS</span><a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">Atendimento pelo WhatsApp ↗</a></div>
    <header class="site-header"><div class="header-inner">${logo()}
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span></button>
      <nav class="main-nav" id="main-nav" aria-label="Navegação principal">${links}${routeLink("/contato", "Solicitar orçamento <span aria-hidden='true'>↗</span>", "button button-small nav-cta")}</nav>
    </div></header>`;
}

function footer() {
  const links = navItems.filter((item) => item.href !== "/").map((item) => routeLink(item.href, item.label)).join("");
  return `<section class="closing-cta"><div class="closing-inner"><span class="eyebrow eyebrow-light">VAMOS CONVERSAR</span><h2>Conte sobre sua obra. Vamos conversar sobre o próximo passo.</h2>${routeLink("/contato", "Fale com a Construprime <span aria-hidden='true'>↗</span>", "button button-light")}</div><div class="closing-mark" aria-hidden="true">C<span>◆</span></div></section>
    <footer class="site-footer"><div class="footer-main"><div class="footer-brand">${logo()}<p>Construção civil, reformas, gestão de obras e acabamentos.</p><a class="footer-cta" href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">Converse sobre sua obra ↗</a></div>
      <div class="footer-column"><span class="footer-title">NAVEGAÇÃO</span>${links}</div>
      <div class="footer-column"><span class="footer-title">CONTATO</span><a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">WhatsApp · ${formattedWhatsappNumber}</a><span>Atendimento inicial pelo WhatsApp</span></div>
    </div><div class="footer-bottom"><span>© 2026 Construprime</span><span>Construindo com propósito <b>◆</b></span></div></footer>`;
}

function serviceCards() {
  return services.map((service) => `<article class="service-card"><span class="service-number">${service.number}<span class="service-rule"></span></span><h3>${service.title}</h3><p>${service.description}</p><small>${service.note}</small></article>`).join("");
}

function processSteps() {
  return steps.map((step) => `<article class="step-card"><span class="step-index">${step.number}</span><div><h3>${step.title}</h3><p>${step.description}</p></div></article>`).join("");
}

function faqBlock() {
  return `<section class="faq-section section"><div class="section-inner faq-layout"><div class="faq-intro"><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2>Antes de começar.</h2><p>Conte o que você pretende construir ou transformar e converse diretamente com a Construprime.</p>${routeLink("/contato", "Fale com a equipe ↗", "text-link")}</div><div class="faq-list">${faqs.map((item) => `<details class="faq-item"><summary>${item.question}<span aria-hidden="true">+</span></summary><p>${item.answer}</p></details>`).join("")}</div></div></section>`;
}

function homePage() {
  return `<main id="conteudo">
    <section class="hero"><img class="hero-image" src="./images/hero-architecture.webp" alt="Imagem editorial de arquitetura contemporânea." fetchpriority="high"><div class="hero-shade"></div>
      <div class="hero-content"><span class="eyebrow eyebrow-light"><span class="eyebrow-line"></span>CONSTRUÇÃO COM PROPÓSITO</span><h1>Seu projeto merece uma base <em>extraordinária.</em></h1><p>Da primeira ideia à entrega, cada etapa da sua obra merece planejamento, cuidado e atenção aos detalhes.</p><div class="hero-actions">${routeLink("/contato", "Converse sobre sua obra <span aria-hidden='true'>↗</span>", "button button-primary")}${routeLink("/servicos", "Conheça os serviços <span aria-hidden='true'>↗</span>", "button button-outline-light")}</div><div class="hero-caption"><span>Um parceiro para transformar planos em espaços reais — com clareza em cada etapa.</span><span><b>Construprime</b><br>Construindo com propósito.</span></div></div>
      <div class="hero-bottom"><span>↓ &nbsp; CONHEÇA A CONSTRUPRIME</span><span>CONSTRUÇÃO · REFORMAS · GESTÃO DE OBRAS</span></div>${imageNote}</section>
    <section class="intro-section section"><div class="section-inner intro-layout"><div class="intro-title"><span class="eyebrow"><span class="eyebrow-line"></span>QUEM SOMOS</span><h2>Construir é mais do que <em>erguer paredes.</em></h2>${routeLink("/empresa", "Conheça a empresa <span aria-hidden='true'>↗</span>", "text-link")}</div><div class="intro-copy"><p><strong>A Construprime atua em construção civil, reformas e transformação de espaços.</strong> Cada obra começa com uma conversa sobre necessidades, prioridades e objetivos.</p><p>Planejamento, clareza e atenção às etapas orientam o diálogo com cada cliente — da definição do escopo aos próximos passos.</p><div class="company-pillars"><div><span>01</span><b>Planejamento</b><small>Entender o que a obra precisa.</small></div><div><span>02</span><b>Clareza</b><small>Alinhar escopo e prioridades.</small></div><div><span>03</span><b>Acompanhamento</b><small>Combinar etapas e responsabilidades.</small></div></div></div></div></section>
    <section class="founder-band"><div class="founder-portrait"><span aria-hidden="true">F</span><small>FUNDADOR E CEO</small></div><div class="founder-copy"><span class="eyebrow eyebrow-light"><span class="eyebrow-line"></span>QUEM CONDUZ</span><h2>Uma obra se faz com técnica. <em>E também com presença.</em></h2><p><strong>Flávio é fundador e CEO da Construprime.</strong> Para apresentar seu projeto, conte sobre a obra e converse diretamente com a equipe.</p>${routeLink("/fundador", "Conheça o fundador <span aria-hidden='true'>↗</span>", "text-link text-link-light")}</div></section>
    <section class="services-section section section-cream"><div class="section-inner"><div class="section-heading"><div><span class="eyebrow">O QUE FAZEMOS</span><h2>Para cada desafio,<br><em>um jeito de construir.</em></h2></div><div class="section-heading-side"><p>Construção, reformas, gestão e acabamentos: converse com a equipe para avaliar o escopo do seu projeto.</p>${routeLink("/servicos", "Ver serviços ↗", "text-link")}</div></div><div class="service-grid">${serviceCards()}</div></div></section>
    <section class="projects-section section"><div class="section-inner"><div class="section-heading"><div><span class="eyebrow">SEU PROJETO</span><h2>Cada obra começa<br><em>com boas decisões.</em></h2></div><div class="section-heading-side"><p>Compartilhe o local, o objetivo e o tipo de serviço. Essas informações ajudam a iniciar uma conversa clara sobre os próximos passos.</p>${routeLink("/projetos", "Organize seu projeto ↗", "text-link")}</div></div><div class="project-start"><article><span>01</span><h3>O que você quer fazer?</h3><p>Construir, reformar, melhorar um ambiente, organizar uma obra ou concluir acabamentos.</p></article><article><span>02</span><h3>Onde será a obra?</h3><p>Informe a cidade e o bairro para contextualizar o projeto na conversa inicial.</p></article><article><span>03</span><h3>Em que etapa está?</h3><p>Conte se está planejando, se já possui projeto ou se a obra está em andamento.</p></article></div></div></section>
    <section class="process-section section section-cream"><div class="section-inner process-layout"><div class="process-intro"><span class="eyebrow">COMO TRABALHAMOS</span><h2>Clareza do primeiro contato à execução.</h2><p>Conhecer o projeto, alinhar o escopo e combinar as etapas ajuda a orientar os próximos passos.</p>${routeLink("/processo", "Entenda nosso processo ↗", "text-link")}</div><div class="steps-list">${processSteps()}</div></div></section>
    ${faqBlock()}
  </main>`;
}

function pageHero(label, title, intro = "") {
  return `<section class="page-hero"><div class="page-hero-inner"><span class="eyebrow"><span class="eyebrow-line"></span>${label.toUpperCase()}</span><h1>${title}</h1>${intro ? `<p>${intro}</p>` : ""}<div class="page-hero-meta"><span>CONSTRUPRIME · CONSTRUINDO COM PROPÓSITO</span><span>WHATSAPP · ${formattedWhatsappNumber}</span></div></div></section>`;
}

function companyPage() {
  return `<main id="conteudo">${pageHero("Quem somos", "Construir é mais do que erguer paredes.", "Construção civil, reformas e transformação de espaços com atenção a cada etapa.")}
    <section class="section"><div class="section-inner inner-story"><div class="story-lead"><span class="eyebrow">A EMPRESA</span><h2>Espaços pensados<br>para durar.</h2></div><div class="story-copy"><p><strong>A Construprime atua em construção civil, reformas e gestão de obras.</strong> O trabalho começa pela compreensão do local, dos objetivos e das prioridades de cada projeto.</p><p>Com o escopo alinhado, os próximos passos são conversados com clareza: serviços envolvidos, etapas, responsabilidades e acompanhamento.</p><p>Para apresentar sua obra, fale diretamente com a Construprime pelo WhatsApp.</p>${routeLink("/contato", "Converse sobre sua obra ↗", "button button-primary")}</div></div></section><section class="company-promise"><div class="section-inner"><span class="eyebrow eyebrow-light">CONSTRUINDO COM PROPÓSITO</span><h2>Da primeira ideia à entrega, cada etapa da sua obra merece planejamento, cuidado e atenção aos detalhes.</h2>${routeLink("/contato", "Conte sobre seu projeto ↗", "button button-light")}</div></section></main>`;
}

function founderPage() {
  return `<main id="conteudo">${pageHero("Quem conduz", "Uma obra se faz com técnica. E também com presença.", "Flávio · Fundador e CEO")}
    <section class="section"><div class="section-inner founder-detail"><figure class="founder-monogram"><span aria-hidden="true">F</span><figcaption>Flávio · Fundador e CEO da Construprime</figcaption></figure><div class="story-copy"><span class="eyebrow">FUNDADOR</span><h2>Flávio, fundador e CEO da Construprime.</h2><p>À frente da empresa, Flávio conduz conversas sobre construção, reformas e projetos. Para conhecer as necessidades da sua obra e conversar sobre os próximos passos, entre em contato com a equipe.</p>${routeLink("/contato", "Fale com a Construprime ↗", "text-link")}</div></div></section></main>`;
}

function servicesPage() {
  return `<main id="conteudo">${pageHero("O que fazemos", "Para cada desafio, um jeito de construir.", "Conheça as frentes de atuação da Construprime e conte à equipe sobre o que você precisa.")}
    <section class="section section-cream"><div class="section-inner"><div class="service-grid service-grid-page">${serviceCards()}</div><p class="service-guidance">O escopo, as etapas e os próximos passos são conversados conforme as características de cada obra.</p></div></section><section class="closing-strip"><span>Tem um projeto em mente?</span>${routeLink("/contato", "Converse sobre sua obra ↗", "text-link text-link-light")}</section></main>`;
}

function projectsPage() {
  return `<main id="conteudo">${pageHero("Projetos", "Seu projeto tem um ponto de partida.", "Organize as informações essenciais para iniciar uma conversa produtiva sobre a obra.")}
    <section class="section"><div class="section-inner"><div class="project-start project-start-page"><article><span>01 · OBJETIVO</span><h2>O que precisa ser feito?</h2><p>Descreva o que pretende construir, reformar, melhorar ou concluir.</p></article><article><span>02 · LOCAL</span><h2>Onde será a obra?</h2><p>Informe cidade e bairro para dar contexto ao seu pedido.</p></article><article><span>03 · MOMENTO</span><h2>Em que etapa está?</h2><p>Conte se está iniciando o planejamento, se já tem projeto ou se a execução começou.</p></article></div><div class="project-brief-cta"><div><span class="eyebrow">O PRÓXIMO PASSO</span><h2>Vamos conversar sobre sua obra.</h2><p>A equipe poderá entender melhor a demanda e orientar a conversa sobre escopo e próximos passos.</p></div>${routeLink("/contato", "Apresentar meu projeto ↗", "button button-primary")}</div></div></section></main>`;
}

function processPage() {
  return `<main id="conteudo">${pageHero("Como trabalhamos", "Clareza do primeiro contato à execução.", "As etapas ajudam a organizar o entendimento do projeto e a conversa sobre os próximos passos.")}
    <section class="section section-cream"><div class="section-inner process-page"><div class="process-page-intro"><span class="eyebrow">UM PASSO DE CADA VEZ</span><p>Conhecer a necessidade, alinhar as informações e combinar responsabilidades contribui para uma condução mais clara da obra. As etapas e o acompanhamento são definidos de acordo com o escopo.</p>${routeLink("/contato", "Converse sobre sua obra ↗", "text-link")}</div><div class="steps-list steps-list-page">${processSteps()}</div></div></section></main>`;
}

function manifestoPage() {
  return `<main id="conteudo">${pageHero("Manifesto", "Construir com propósito.", "Planejamento, clareza e cuidado em cada etapa da obra.")}
    <section class="section manifesto-section"><div class="section-inner manifesto-inner"><span class="eyebrow">CONSTRUPRIME</span><h2>Um parceiro para transformar planos em espaços reais — com clareza em cada etapa.</h2><p>Construir é fazer escolhas que impactam o espaço e a vida de quem vai usá-lo. Por isso, cada projeto merece atenção ao que importa: entender a necessidade, alinhar o escopo e conduzir a conversa com responsabilidade.</p><p>É assim que a Construprime constrói com propósito.</p>${routeLink("/contato", "Converse sobre sua obra ↗", "text-link")}</div></section></main>`;
}

function contactPage() {
  return `<main id="conteudo">${pageHero("Vamos conversar", "O próximo capítulo do seu espaço começa com uma boa conversa.", "Conte o que você pretende construir ou transformar e converse com a Construprime.")}
    <section class="section section-cream"><div class="section-inner contact-layout"><div class="contact-info"><span class="eyebrow">FALE COM A GENTE</span><h2>Comece por uma conversa.</h2><p>Compartilhe o objetivo, a localização e o momento da obra para iniciar o diálogo sobre os próximos passos.</p><div class="contact-detail"><span>WHATSAPP</span><a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">${formattedWhatsappNumber} ↗</a></div><p class="contact-promise">Você confere a mensagem no WhatsApp e decide se deseja enviá-la.</p></div>
      <form class="contact-form" id="contact-form"><span class="eyebrow">SOLICITAR ORÇAMENTO</span><h2>Fale sobre sua obra.</h2><label>Seu nome<input name="name" autocomplete="name" required placeholder="Como podemos chamar você?"></label><label>Seu e-mail (opcional)<input name="email" type="email" autocomplete="email" placeholder="voce@exemplo.com"></label><label>Sobre o projeto<select name="project" required><option value="" selected disabled>Selecione uma opção</option><option>Construção civil</option><option>Reformas e melhorias</option><option>Gestão de obras gerais</option><option>Acabamentos</option><option>Outro / ainda estou entendendo</option></select></label><label>Conte um pouco mais<textarea name="message" rows="4" placeholder="Local da obra, objetivo e etapa atual"></textarea></label><button class="button button-primary" type="submit">Continuar no WhatsApp <span aria-hidden="true">↗</span></button><p class="form-note" id="form-note">O WhatsApp abrirá com uma mensagem preenchida. Revise os dados e envie pelo aplicativo se desejar; o site não envia nem armazena sua mensagem.</p></form></div></section></main>`;
}

const pageContent = {
  "/": homePage,
  "/empresa": companyPage,
  "/fundador": founderPage,
  "/servicos": servicesPage,
  "/projetos": projectsPage,
  "/processo": processPage,
  "/manifesto": manifestoPage,
  "/contato": contactPage,
};

function setMeta(attribute, key, value) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = value;
}

const pageSeo = seoMetadata[path] || {
  title: "Página não encontrada | Construprime",
  description: "A página solicitada não está disponível na Construprime.",
  keywords: "",
};
const canonicalUrl = new URL(path === "/" ? "./" : `${path.slice(1)}.html`, canonicalBase).href;
document.title = pageSeo.title;
setMeta("name", "description", pageSeo.description);
setMeta("name", "keywords", pageSeo.keywords);
setMeta("name", "robots", isKnownRoute ? "index, follow, max-image-preview:large" : "noindex, follow");
setMeta("property", "og:type", "website");
setMeta("property", "og:site_name", "Construprime");
setMeta("property", "og:title", pageSeo.title);
setMeta("property", "og:description", pageSeo.description);
setMeta("property", "og:url", canonicalUrl);
setMeta("property", "og:image", socialImage);
setMeta("property", "og:image:alt", "Imagem editorial ilustrativa de arquitetura contemporânea");
setMeta("name", "twitter:card", "summary_large_image");
setMeta("name", "twitter:title", pageSeo.title);
setMeta("name", "twitter:description", pageSeo.description);
setMeta("name", "twitter:image", socialImage);
const canonicalLink = document.head.querySelector('link[rel="canonical"]') || document.createElement("link");
canonicalLink.rel = "canonical";
canonicalLink.href = canonicalUrl;
if (!canonicalLink.isConnected) document.head.append(canonicalLink);

document.querySelector("#app").innerHTML = `${siteHeader()}${(pageContent[path] || homePage)()}${footer()}`;

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  mainNav?.classList.toggle("is-open", !isOpen);
});
mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  mainNav.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const email = String(data.get("email") || "").trim();
  const message = [
    "Olá! Gostaria de conversar sobre um projeto com a Construprime.",
    "",
    `Nome: ${data.get("name")}`,
    ...(email ? [`E-mail: ${email}`] : []),
    `Serviço: ${data.get("project")}`,
    "",
    `Projeto: ${data.get("message") || "(quero conversar sobre os próximos passos)"}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const notice = document.querySelector("#form-note");
  if (notice) notice.textContent = "O WhatsApp foi aberto com a mensagem preenchida. Revise os dados e envie pelo aplicativo se desejar; nada é enviado automaticamente pelo site.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
