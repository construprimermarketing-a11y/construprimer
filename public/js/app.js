import { navItems, services, projects, steps, faqs, testimonials } from "./content.js";

const routes = {
  "/": { title: "Construindo com propósito", label: "Início" },
  "/empresa": { title: "Construir é mais do que erguer paredes.", label: "A empresa" },
  "/fundador": { title: "Uma obra se faz com técnica. E também com presença.", label: "Fundador" },
  "/servicos": { title: "Para cada desafio, um jeito de construir.", label: "Serviços" },
  "/projetos": { title: "Espaços que começam antes da obra.", label: "Projetos" },
  "/processo": { title: "Clareza do primeiro contato à execução.", label: "Como trabalhamos" },
  "/manifesto": { title: "Construir com propósito.", label: "Manifesto" },
  "/contato": { title: "O próximo capítulo do seu espaço começa com uma boa conversa.", label: "Solicitar orçamento" },
};

const publicOrigin = "https://construprime-ybsupctp.manus.space";
const socialImage = `${publicOrigin}/manus-storage/async-images/223mdYCp21U4fcCRXVPFBC/image-1.webp`;
const seoMetadata = {
  "/": {
    title: "Construprime | Construção, reformas e gestão de obras",
    description: "Conheça a apresentação da Construprime sobre construção civil, reformas, gestão de obras e acabamentos. Conte seu projeto à equipe pelo WhatsApp.",
    keywords: "Construprime, construção civil, reformas, gestão de obras, acabamentos",
  },
  "/empresa": {
    title: "Sobre a Construprime | Construção e reformas",
    description: "Saiba mais sobre a Construprime, sua proposta institucional e a apresentação de construção e transformação de espaços. Informações a confirmar pela empresa.",
    keywords: "Construprime, empresa de construção, reformas, transformação de espaços",
  },
  "/fundador": {
    title: "Flávio, fundador da Construprime | Nossa história",
    description: "Conheça Flávio, apresentado pela Construprime como fundador e CEO. A biografia e os marcos da trajetória aguardam confirmação oficial.",
    keywords: "Flávio, fundador Construprime, liderança, construção civil",
  },
  "/servicos": {
    title: "Construção, reformas e gestão de obras | Construprime",
    description: "Confira a apresentação provisória dos serviços da Construprime: construção civil, reformas e melhorias, gestão de obras gerais e acabamentos.",
    keywords: "Construção civil, reformas, gestão de obras, acabamentos, Construprime",
  },
  "/projetos": {
    title: "Projetos-conceito de construção | Construprime",
    description: "Veja os projetos-conceito apresentados pela Construprime. Imagens e referências são ilustrativas e não representam obras ou clientes confirmados.",
    keywords: "projetos-conceito, arquitetura, construção residencial, interiores, Construprime",
  },
  "/processo": {
    title: "Como trabalhamos na construção | Construprime",
    description: "Conheça as etapas apresentadas pela Construprime: entender a necessidade, definir o escopo, propor caminhos e executar com acompanhamento.",
    keywords: "processo de obra, gestão de obras, construção, acompanhamento, Construprime",
  },
  "/manifesto": {
    title: "Construir com propósito | Construprime",
    description: "Leia o texto-base provisório da Construprime sobre clareza e propósito na construção, ainda aguardando validação pela empresa.",
    keywords: "Construprime, construção com propósito, construção civil, clareza na obra",
  },
  "/contato": {
    title: "Solicite um orçamento de obra | Construprime",
    description: "Fale com a Construprime pelo WhatsApp e conte sobre sua obra para iniciar uma conversa de orçamento. Região e e-mail aguardam confirmação.",
    keywords: "orçamento de obra, contato Construprime, construção civil, reformas",
  },
};

const requestedPath = window.location.pathname.replace(/\/$/, "") || "/";
const path = requestedPath.endsWith(".html") ? requestedPath.slice(0, -5) || "/" : requestedPath;
const page = routes[path] || routes["/"];
const isKnownRoute = Object.prototype.hasOwnProperty.call(routes, path);
const routeHref = (href) => (href === "/" ? "/" : `${href}.html`);
const routeLink = (href, label, className = "") => `<a class="${className}" href="${routeHref(href)}">${label}</a>`;
const imageNote = `<span class="image-note"><span aria-hidden="true">◆</span> Imagem ilustrativa · Projeto-conceito</span>`;
const whatsappNumber = "5511969435549";
const formattedWhatsappNumber = "+55 (11) 96943-5549";

function logo() {
  return `<a class="brand" href="/" aria-label="Construprime — Início">
    <img src="/images/construprime-logo.jpg" alt="" width="42" height="42">
    <span class="brand-copy"><strong>Construprime</strong><small>CONSTRUINDO COM PROPÓSITO</small></span>
  </a>`;
}

function siteHeader() {
  const links = navItems.map((item) => routeLink(item.href, item.label, path === item.href ? "nav-link is-current" : "nav-link")).join("");
  return `<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <div class="notice-bar">PRÉVIA PARA APRESENTAÇÃO <span>•</span> Conteúdo, imagens e demais contatos precisam ser confirmados pela Construprime antes da publicação.</div>
    <div class="trust-bar"><span><b>19 anos de mercado</b> · Construção · Reformas · Gestão de obras</span><span>Experiência que constrói confiança <i>· informação a confirmar</i></span></div>
    <header class="site-header"><div class="header-inner">${logo()}
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-nav"><span></span><span></span></button>
      <nav class="main-nav" id="main-nav" aria-label="Navegação principal">${links}${routeLink("/contato", "Solicitar orçamento <span aria-hidden='true'>↗</span>", "button button-small nav-cta")}</nav>
    </div></header>`;
}

function footer() {
  const links = navItems.filter((item) => item.href !== "/").map((item) => routeLink(item.href, item.label)).join("");
  const quotes = testimonials.map((item) => `<blockquote class="quote-card"><span class="quote-mark" aria-hidden="true">“</span><p>${item.quote}</p><footer>${item.role}<small>Depoimento provisório · substituir por fala autorizada</small></footer></blockquote>`).join("");
  return `<section class="testimonials section section-cream"><div class="section-inner"><div class="section-heading"><div><span class="eyebrow">QUEM CONSTRÓI COM A GENTE</span><h2>Confiança também se constrói.<span class="period">*</span></h2></div><p class="disclaimer">* Depoimentos provisórios para substituir pelas falas autorizadas de clientes e parceiros.</p></div><div class="quote-grid">${quotes}</div></div></section>
    <section class="closing-cta"><div class="closing-inner"><span class="eyebrow eyebrow-light">VAMOS CONVERSAR</span><h2>O próximo capítulo do seu espaço começa com uma boa conversa.</h2>${routeLink("/contato", "Solicitar um contato <span aria-hidden='true'>↗</span>", "button button-light")}</div><div class="closing-mark" aria-hidden="true">C<span>◆</span></div></section>
    <footer class="site-footer"><div class="footer-main"><div class="footer-brand">${logo()}<p>Um parceiro para transformar planos em espaços reais — com clareza em cada etapa.</p>${routeLink("/contato", "Converse sobre sua obra ↗", "footer-cta")}</div>
      <div class="footer-column"><span class="footer-title">EXPLORAR</span>${links}</div>
      <div class="footer-column"><span class="footer-title">FALE COM A GENTE <small>· e-mail e região a confirmar</small></span><a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">WhatsApp · ${formattedWhatsappNumber}</a><a href="mailto:contato@construprime.com.br">contato@construprime.com.br</a><span>Região de atendimento a confirmar</span><span>Dados oficiais a confirmar</span></div>
      <div class="footer-column"><span class="footer-title">REDE E PARCEIROS</span><span>Instagram · link a confirmar</span><span>LinkedIn · link a confirmar</span><span class="footer-title footer-subtitle">CLIENTES · IDENTIFICAÇÕES PROVISÓRIAS</span><span>Cliente 01 · Cliente 02 · Cliente 03</span></div>
    </div><div class="footer-bottom"><span>© 2026 Construprime. Conteúdo institucional provisório.</span><span>Construído com propósito <b>◆</b></span></div></footer>`;
}

function projectCards() {
  return projects.map((project, index) => `<a class="project-card project-card-${index + 1}" href="/projetos.html" aria-label="${project.category}: ${project.title}, projeto-conceito em ${project.location}">
    <div class="project-image"><img src="${project.image}" alt="${project.alt}" loading="lazy">${imageNote}<span class="project-arrow" aria-hidden="true">↗</span></div>
    <div class="project-meta"><span>${project.category}</span><span>Projeto-conceito · ${project.location}</span></div><h3>${project.title}</h3></a>`).join("");
}

function serviceCards() {
  return services.map((service) => `<article class="service-card"><span class="service-number">${service.number}<span class="service-rule"></span></span><h3>${service.title}</h3><p>${service.description}</p><small>${service.note}</small></article>`).join("");
}

function processSteps() {
  return steps.map((step) => `<article class="step-card"><span class="step-index">${step.number}</span><div><h3>${step.title}</h3><p>${step.description}</p></div></article>`).join("");
}

function faqBlock() {
  return `<section class="faq-section section"><div class="section-inner faq-layout"><div class="faq-intro"><span class="eyebrow">DÚVIDAS FREQUENTES</span><h2>Antes de começar.</h2><p>Se a sua pergunta não estiver aqui, conte o que você quer construir e conversamos sobre o próximo passo.</p>${routeLink("/contato", "Fale com a gente ↗", "text-link")}</div><div class="faq-list">${faqs.map((item, index) => `<details class="faq-item" ${index === 0 ? "" : ""}><summary>${item.question}<span aria-hidden="true">+</span></summary><p>${item.answer}</p></details>`).join("")}</div></div></section>`;
}

function homePage() {
  return `<main id="conteudo">
    <section class="hero"><img class="hero-image" src="/manus-storage/async-images/223mdYCp21U4fcCRXVPFBC/image-1.webp" alt="Imagem ilustrativa de arquitetura contemporânea em casa brasileira." fetchpriority="high"><div class="hero-shade"></div>
      <div class="hero-content"><span class="eyebrow eyebrow-light"><span class="eyebrow-line"></span>19 ANOS DE MERCADO <span class="provisional-tag">A CONFIRMAR</span></span><h1>Seu projeto merece uma base <em>extraordinária.</em></h1><p>Da primeira ideia à entrega, cada etapa da sua obra merece planejamento, cuidado e atenção aos detalhes.</p><div class="hero-actions">${routeLink("/contato", "Converse sobre sua obra <span aria-hidden='true'>↗</span>", "button button-primary")}${routeLink("/servicos", "Conheça os serviços <span aria-hidden='true'>↗</span>", "button button-outline-light")}</div><div class="hero-caption"><span>Um parceiro para transformar planos em espaços reais — com clareza em cada etapa.</span><span><b>Construprime</b><br>Espaços pensados para durar.</span></div></div>
      <div class="hero-bottom"><span>↓ &nbsp; ROLE PARA EXPLORAR</span><span>CONSTRUÇÃO · REFORMAS · GESTÃO DE OBRAS</span></div>${imageNote}</section>
    <section class="intro-section section"><div class="section-inner intro-layout"><div class="intro-title"><span class="eyebrow"><span class="eyebrow-line"></span>QUEM SOMOS</span><h2>Construir é mais do que <em>erguer paredes.</em></h2>${routeLink("/empresa", "Conheça a empresa <span aria-hidden='true'>↗</span>", "text-link")}</div><div class="intro-copy"><p><strong>A Construprime é uma empresa dedicada à construção e transformação de espaços.</strong> Este protótipo traz uma base institucional que será ajustada à história, à equipe e à especialidade real da empresa.</p><p>Nosso compromisso proposto é trabalhar com comunicação transparente, organização e atenção aos detalhes — princípios que devem ser confirmados e personalizados junto à equipe.</p><div class="metrics"><div><b>19</b><span>ANOS DE MERCADO <i>· a confirmar</i></span></div><div><b>360°</b><span>VISÃO DA OBRA</span></div><div><b>01</b><span>PARCEIRO POR ETAPA</span></div><div><b>∞</b><span>POSSIBILIDADES</span></div></div></div></div></section>
    <section class="founder-band"><div class="founder-portrait"><img src="/manus-storage/ceo-flavio_c5af9c99.jpg" alt="Imagem ilustrativa usada na referência para representar o fundador Flávio; confirmar antes de apresentá-la como foto oficial." width="640" height="640" loading="lazy"><span class="founder-image-caption">Imagem ilustrativa de referência · confirmar com a Construprime</span><small>FLÁVIO<br>FUNDADOR E CEO</small></div><div class="founder-copy"><span class="eyebrow eyebrow-light"><span class="eyebrow-line"></span>QUEM CONDUZ</span><h2>Uma obra se faz com técnica. <em>E também com presença.</em></h2><p><strong>Flávio, fundador e CEO da Construprime,</strong> está à frente da visão e do desenvolvimento da empresa. Esta apresentação será aprofundada com a trajetória do fundador, os valores que orientam o trabalho e os marcos dos 19 anos de mercado.</p>${routeLink("/fundador", "Conheça o fundador <span aria-hidden='true'>↗</span>", "text-link text-link-light")}</div></section>
    <section class="services-section section section-cream"><div class="section-inner"><div class="section-heading"><div><span class="eyebrow">O QUE FAZEMOS</span><h2>Para cada desafio,<br><em>um jeito de construir.</em></h2></div><div class="section-heading-side"><p>Soluções organizadas para acompanhar o projeto com mais clareza, do primeiro desenho à entrega.</p>${routeLink("/servicos", "Ver todos os serviços ↗", "text-link")}</div></div><div class="service-grid">${serviceCards()}</div></div></section>
    <section class="projects-section section"><div class="section-inner"><div class="section-heading"><div><span class="eyebrow">PROJETOS</span><h2>Espaços que começam<br><em>antes da obra.</em></h2></div><div class="section-heading-side"><p>Uma seleção-conceito para mostrar como a Construprime pensa cada projeto como uma experiência completa.</p>${routeLink("/projetos", "Ver projetos ↗", "text-link")}</div></div><div class="project-grid">${projectCards()}</div></div></section>
    <section class="process-section section section-cream"><div class="section-inner process-layout"><div class="process-intro"><span class="eyebrow">COMO TRABALHAMOS</span><h2>Clareza do primeiro contato à execução.</h2><p>O processo é uma forma de cuidar do projeto. Por isso, cada etapa deixa claro o que está acontecendo e o que vem depois.</p>${routeLink("/processo", "Entenda nosso processo ↗", "text-link")}</div><div class="steps-list">${processSteps()}</div></div></section>
    ${faqBlock()}
  </main>`;
}

function pageHero(label, title, intro = "") {
  return `<section class="page-hero"><div class="page-hero-inner"><span class="eyebrow"><span class="eyebrow-line"></span>${label.toUpperCase()}</span><h1>${title}</h1>${intro ? `<p>${intro}</p>` : ""}<div class="page-hero-meta"><span>CONSTRUPRIME · CONSTRUINDO COM PROPÓSITO</span><span>PRÉVIA · CONTEÚDO A CONFIRMAR</span></div></div></section>`;
}

function companyPage() {
  return `<main id="conteudo">${pageHero("Quem somos", "Construir é mais do que erguer paredes.", "Construção e transformação de espaços, com clareza em cada etapa.")}
    <section class="section"><div class="section-inner inner-story"><div class="story-lead"><span class="eyebrow">A EMPRESA</span><h2>Espaços pensados<br>para durar.</h2></div><div class="story-copy"><p><strong>A Construprime é uma empresa dedicada à construção e transformação de espaços.</strong> Este protótipo traz uma base institucional que será ajustada à história, à equipe e à especialidade real da empresa.</p><p>Nosso compromisso proposto é trabalhar com comunicação transparente, organização e atenção aos detalhes — princípios que devem ser confirmados e personalizados junto à equipe.</p><p class="disclaimer">Informações institucionais provisórias, pendentes de confirmação e personalização pela equipe da Construprime.</p></div></div></section>
    <section class="metrics-band"><div class="section-inner metrics metrics-light"><div><b>19</b><span>ANOS DE MERCADO <i>· a confirmar</i></span></div><div><b>360°</b><span>VISÃO DA OBRA</span></div><div><b>01</b><span>PARCEIRO POR ETAPA</span></div><div><b>∞</b><span>POSSIBILIDADES</span></div></div></section><section class="section section-cream"><div class="section-inner split-statement"><span class="eyebrow">CONSTRUINDO COM PROPÓSITO</span><h2>Da primeira ideia à entrega, cada etapa da sua obra merece planejamento, cuidado e atenção aos detalhes.</h2>${routeLink("/contato", "Converse sobre sua obra ↗", "button button-primary")}</div></section></main>`;
}

function founderPage() {
  return `<main id="conteudo">${pageHero("Quem conduz", "Uma obra se faz com técnica. E também com presença.", "Flávio · fundador e CEO")}
    <section class="section"><div class="section-inner founder-detail"><figure class="founder-monogram"><img src="/manus-storage/ceo-flavio_c5af9c99.jpg" alt="Imagem ilustrativa usada na referência para representar o fundador Flávio; confirmar se é fotografia oficial." width="640" height="640" loading="lazy"><figcaption>Imagem ilustrativa de referência · confirmar antes de usar como retrato oficial</figcaption></figure><div class="story-copy"><span class="eyebrow">FUNDADOR</span><h2>Flávio, fundador e CEO da Construprime,</h2><p>está à frente da visão e do desenvolvimento da empresa. Esta apresentação será aprofundada com a trajetória do fundador, os valores que orientam o trabalho e os marcos dos 19 anos de mercado.</p><p class="disclaimer">Biografia e marcos da trajetória precisam ser confirmados e complementados pela equipe. Não foram acrescentadas credenciais ou informações biográficas não disponíveis na referência.</p>${routeLink("/contato", "Converse sobre sua obra ↗", "text-link")}</div></div></section></main>`;
}

function servicesPage() {
  return `<main id="conteudo">${pageHero("O que fazemos", "Para cada desafio, um jeito de construir.", "Soluções organizadas para acompanhar o projeto com mais clareza, do primeiro desenho à entrega.")}
    <section class="section section-cream"><div class="section-inner"><div class="service-grid service-grid-page">${serviceCards()}</div><p class="disclaimer page-disclaimer">Serviços e escopos apresentados como base provisória. A disponibilidade, o porte dos projetos e a região de atendimento precisam ser confirmados com a Construprime.</p></div></section><section class="closing-strip"><span>Tem um projeto em mente?</span>${routeLink("/contato", "Converse sobre sua obra ↗", "text-link text-link-light")}</section></main>`;
}

function projectsPage() {
  return `<main id="conteudo">${pageHero("Projetos", "Espaços que começam antes da obra.", "Uma seleção-conceito para mostrar como a Construprime pensa cada projeto como uma experiência completa.")}
    <section class="section"><div class="section-inner"><div class="project-grid project-grid-page">${projectCards()}</div><p class="disclaimer page-disclaimer">Todos os nomes, locais e visuais desta seleção estão apresentados como projetos-conceito. As imagens são ilustrativas e não representam obras executadas ou clientes confirmados.</p></div></section></main>`;
}

function processPage() {
  return `<main id="conteudo">${pageHero("Como trabalhamos", "Clareza do primeiro contato à execução.", "O processo é uma forma de cuidar do projeto. Por isso, cada etapa deixa claro o que está acontecendo e o que vem depois.")}
    <section class="section section-cream"><div class="section-inner process-page"><div class="process-page-intro"><span class="eyebrow">UM PASSO DE CADA VEZ</span><p>Conhecemos sua necessidade, alinhamos as informações e combinamos os próximos passos. Etapas e formas de acompanhamento devem ser ajustadas ao escopo real de cada projeto.</p></div><div class="steps-list steps-list-page">${processSteps()}</div></div></section></main>`;
}

function manifestoPage() {
  return `<main id="conteudo">${pageHero("Manifesto", "Construir com propósito.", "Uma base para o texto institucional definitivo da Construprime.")}
    <section class="section manifesto-section"><div class="section-inner manifesto-inner"><span class="eyebrow">TEXTO-BASE · A CONFIRMAR</span><h2>“Um parceiro para transformar planos em espaços reais — com clareza em cada etapa.”</h2><p>Esta página mantém o espaço do manifesto institucional. O texto acima reaproveita a frase de apresentação da referência; princípios e declarações adicionais devem ser escritos e aprovados pela equipe da Construprime.</p>${routeLink("/contato", "Converse sobre sua obra ↗", "text-link")}</div></section></main>`;
}

function contactPage() {
  return `<main id="conteudo">${pageHero("Vamos conversar", "O próximo capítulo do seu espaço começa com uma boa conversa.", "Conte um pouco sobre o que você quer construir e conversamos sobre o próximo passo.")}
    <section class="section section-cream"><div class="section-inner contact-layout"><div class="contact-info"><span class="eyebrow">FALE COM A GENTE</span><h2>Comece por uma conversa.</h2><p>O primeiro contato serve para entender o momento da obra e indicar os próximos passos.</p><div class="contact-detail"><span>WHATSAPP <i>· número informado</i></span><a href="https://wa.me/${whatsappNumber}" target="_blank" rel="noopener noreferrer">${formattedWhatsappNumber}</a></div><div class="contact-detail"><span>E-MAIL <i>· a confirmar</i></span><a href="mailto:contato@construprime.com.br">contato@construprime.com.br</a></div><div class="contact-detail"><span>REGIÃO DE ATENDIMENTO</span><p>A confirmar</p></div><p class="disclaimer">O número de WhatsApp foi informado para contato. E-mail e região de atendimento aguardam confirmação pela Construprime.</p></div>
      <form class="contact-form" id="contact-form"><span class="eyebrow">SOLICITAR ORÇAMENTO</span><h2>Fale sobre sua obra.</h2><label>Seu nome<input name="name" autocomplete="name" required placeholder="Como podemos chamar você?"></label><label>Seu e-mail<input name="email" type="email" autocomplete="email" required placeholder="voce@exemplo.com"></label><label>Sobre o projeto<select name="project" required><option value="" selected disabled>Selecione uma opção</option><option>Construção civil</option><option>Reformas e melhorias</option><option>Gestão de obras gerais</option><option>Acabamentos</option><option>Outro / ainda estou entendendo</option></select></label><label>Conte um pouco mais<textarea name="message" rows="4" placeholder="O que você gostaria de construir ou transformar?"></textarea></label><button class="button button-primary" type="submit">Continuar no WhatsApp <span aria-hidden="true">↗</span></button><p class="form-note" id="form-note">Este formulário abre o WhatsApp com a mensagem preenchida. Confira os dados e toque em enviar no aplicativo. O site não envia mensagens automaticamente nem armazena seus dados.</p></form></div></section></main>`;
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
const canonicalPath = path === "/" ? "/" : `${path}.html`;
const canonicalUrl = `${publicOrigin}${canonicalPath}`;
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
setMeta("property", "og:image:alt", "Imagem ilustrativa de arquitetura contemporânea da apresentação da Construprime");
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
  const message = [
    "Olá! Gostaria de solicitar um orçamento com a Construprime.",
    "",
    `Nome: ${data.get("name")}`,
    `E-mail: ${data.get("email")}`,
    `Projeto: ${data.get("project")}`,
    "",
    `Mensagem: ${data.get("message") || "(não informado)"}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const notice = document.querySelector("#form-note");
  if (notice) notice.textContent = "O WhatsApp será aberto com a mensagem preenchida. Confira os dados e toque em enviar no aplicativo; nada é enviado automaticamente pelo site.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
