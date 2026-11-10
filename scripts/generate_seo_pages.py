from datetime import date
from html import escape
from pathlib import Path
import argparse
import re
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
DEFAULT_SITE_BASE_URL = "https://construprime-ybsupctp.manus.space/"
TEMPLATE = (PUBLIC / "index.html").read_text(encoding="utf-8")
START = "      <!-- SEO_PAGE_CONTENT_START -->"
END = "      <!-- SEO_PAGE_CONTENT_END -->"

PAGES = {
    "empresa": {
        "title": "A Construprime | Construção com propósito",
        "description": "Conheça a Construprime e sua atuação em construção civil, reformas, gestão de obras e acabamentos.",
        "keywords": "Construprime, empresa de construção, construção civil, reformas",
        "heading": "Construir é mais do que erguer paredes.",
        "body": """
<p><strong>A Construprime atua em construção civil, reformas e gestão de obras.</strong> O trabalho começa pela compreensão do local, dos objetivos e das prioridades de cada projeto.</p>
<h2>Clareza em cada etapa</h2>
<p>Com o escopo alinhado, os próximos passos são conversados com clareza: serviços envolvidos, etapas, responsabilidades e acompanhamento.</p>
<p>Da primeira ideia à entrega, cada etapa da obra merece planejamento, cuidado e atenção aos detalhes.</p>
<p><a href="./servicos.html">Conheça os serviços</a> · <a href="./contato.html">Converse sobre sua obra</a></p>""",
    },
    "fundador": {
        "title": "Flávio | Fundador da Construprime",
        "description": "Conheça Flávio, fundador e CEO da Construprime, e converse sobre seu projeto de construção ou reforma.",
        "keywords": "Flávio, fundador Construprime, construção civil, reformas",
        "heading": "Uma obra se faz com técnica. E também com presença.",
        "body": """
<p>Flávio é fundador e CEO da Construprime.</p>
<h2>Uma conversa sobre seu projeto</h2>
<p>Para apresentar sua obra, conte sobre o local, o objetivo e o momento do projeto. A equipe conversa sobre os próximos passos.</p>
<p><a href="./contato.html">Fale com a Construprime pelo WhatsApp</a></p>""",
    },
    "servicos": {
        "title": "Serviços de construção e reforma | Construprime",
        "description": "Conheça as frentes da Construprime: construção civil, reformas e melhorias, gestão de obras gerais e acabamentos.",
        "keywords": "construção civil, reformas, gestão de obras, acabamentos, Construprime",
        "heading": "Para cada desafio, um jeito de construir.",
        "body": """
<p>Conheça as frentes de atuação da Construprime e conte à equipe sobre o que você precisa. O escopo, as etapas e os próximos passos são conversados conforme as características de cada obra.</p>
<h2>Construção civil</h2><p>Atenção ao escopo, às etapas e às decisões de cada projeto, do planejamento à entrega.</p>
<h2>Reformas e melhorias</h2><p>Transformação de espaços existentes, considerando objetivos, prioridades e o uso cotidiano.</p>
<h2>Gestão de obras gerais</h2><p>Organização das etapas, comunicação e acompanhamento definidos conforme o escopo da obra.</p>
<h2>Acabamentos</h2><p>Atenção às escolhas e às etapas finais que dão forma ao uso cotidiano dos espaços.</p>
<p><a href="./contato.html">Converse sobre sua obra</a></p>""",
    },
    "projetos": {
        "title": "Converse sobre seu projeto | Construprime",
        "description": "Organize as informações do seu projeto de construção ou reforma e converse com a Construprime pelo WhatsApp.",
        "keywords": "projeto de construção, projeto de reforma, orçamento de obra, Construprime",
        "heading": "Seu projeto tem um ponto de partida.",
        "body": """
<p>Compartilhe as informações essenciais para iniciar uma conversa produtiva sobre a obra.</p>
<h2>Objetivo</h2><p>Descreva o que pretende construir, reformar, melhorar ou concluir.</p>
<h2>Local</h2><p>Informe cidade e bairro para dar contexto ao seu pedido.</p>
<h2>Momento do projeto</h2><p>Conte se está iniciando o planejamento, se já possui projeto ou se a execução começou.</p>
<p><a href="./contato.html">Apresente seu projeto à Construprime</a></p>""",
    },
    "processo": {
        "title": "Como trabalhamos | Construprime",
        "description": "Entenda as etapas de conversa, definição de escopo, proposta e acompanhamento de uma obra com a Construprime.",
        "keywords": "processo de obra, gestão de obras, construção, acompanhamento, Construprime",
        "heading": "Clareza do primeiro contato à execução.",
        "body": """
<p>Conhecer a necessidade, alinhar as informações e combinar responsabilidades contribui para uma condução mais clara da obra. As etapas e o acompanhamento são definidos de acordo com o escopo.</p>
<ol><li><strong>Entender:</strong> conhecer a necessidade, o local e o objetivo do projeto.</li><li><strong>Definir o escopo:</strong> alinhar serviços, prioridades e informações necessárias para avaliar a demanda.</li><li><strong>Propor caminhos:</strong> reunir informações e discutir os próximos passos e a proposta.</li><li><strong>Executar e acompanhar:</strong> combinar responsabilidades, etapas e formas de acompanhamento.</li></ol>
<p><a href="./contato.html">Converse sobre sua obra</a></p>""",
    },
    "manifesto": {
        "title": "Construir com propósito | Construprime",
        "description": "Planejamento, clareza e cuidado em cada etapa: conheça a visão da Construprime sobre construir com propósito.",
        "keywords": "Construprime, construção com propósito, construção civil, planejamento de obra",
        "heading": "Construir com propósito.",
        "body": """
<p><strong>“Um parceiro para transformar planos em espaços reais — com clareza em cada etapa.”</strong></p>
<p>Construir é fazer escolhas que impactam o espaço e a vida de quem vai usá-lo. Cada projeto merece atenção ao que importa: entender a necessidade, alinhar o escopo e conduzir a conversa com responsabilidade.</p>
<p>É assim que a Construprime constrói com propósito.</p>
<p><a href="./contato.html">Converse sobre sua obra</a></p>""",
    },
    "contato": {
        "title": "Fale com a Construprime | Solicite um orçamento",
        "description": "Fale com a Construprime pelo WhatsApp e conte sobre sua obra para conversar sobre os próximos passos.",
        "keywords": "contato Construprime, orçamento de obra, construção civil, reformas",
        "heading": "O próximo capítulo do seu espaço começa com uma boa conversa.",
        "body": """
<p>Compartilhe o objetivo, a localização e o momento da obra para iniciar o diálogo sobre os próximos passos.</p>
<h2>WhatsApp</h2><p>Fale com a Construprime pelo número <a href="https://wa.me/5511969435549">+55 (11) 96943-5549</a>. Você revisa e envia a mensagem pelo próprio aplicativo.</p>
<p><a href="https://wa.me/5511969435549">Iniciar conversa no WhatsApp</a></p>""",
    },
}

PRIORITIES = {
    "": "1.0",
    "empresa": "0.8",
    "fundador": "0.7",
    "servicos": "0.9",
    "projetos": "0.7",
    "processo": "0.7",
    "manifesto": "0.5",
    "contato": "0.9",
}


def replace_once(pattern: str, replacement: str, document: str) -> str:
    updated, count = re.subn(pattern, lambda _: replacement, document, count=1, flags=re.S)
    if count != 1:
        raise ValueError(f"Template marker not found exactly once: {pattern}")
    return updated


def normalize_site_base_url(value: str) -> str:
    if len(value) > 512 or value != value.strip() or any(character.isspace() for character in value):
        raise ValueError("The public site base URL must not contain whitespace.")
    parsed = urlsplit(value)
    if (
        parsed.scheme != "https"
        or not parsed.hostname
        or parsed.username
        or parsed.password
        or parsed.query
        or parsed.fragment
    ):
        raise ValueError("Use an absolute HTTPS base URL without credentials, query, or fragment.")
    hostname = parsed.hostname
    try:
        port = parsed.port
    except ValueError as error:
        raise ValueError("The public site base URL must use a valid hostname without a port.") from error
    if port is not None or not re.fullmatch(r"[A-Za-z0-9.-]+", hostname):
        raise ValueError("Use a public DNS hostname without a port.")
    labels = hostname.rstrip(".").split(".")
    if hostname.endswith(".") or len(hostname) > 253 or len(labels) < 2 or any(
        not label or len(label) > 63 or not re.fullmatch(r"[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?", label)
        for label in labels
    ):
        raise ValueError("The public site base URL must use a valid public DNS hostname.")
    if "//" in parsed.path or "%" in parsed.path or any(
        segment in {".", ".."} or not re.fullmatch(r"[A-Za-z0-9._~-]+", segment)
        for segment in parsed.path.split("/")
        if segment
    ):
        raise ValueError("The URL path may contain only safe repository path segments.")
    return value if value.endswith("/") else f"{value}/"


def page_url(site_base_url: str, slug: str) -> str:
    return f"{site_base_url}{slug}.html" if slug else site_base_url


def update_home_metadata(site_base_url: str) -> str:
    document = TEMPLATE
    escaped_base = escape(site_base_url, quote=True)
    escaped_logo = escape(f"{site_base_url}images/construprime-logo.jpg", quote=True)
    escaped_social_image = escape(f"{site_base_url}images/hero-architecture.webp", quote=True)
    document = replace_once(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{escaped_base}">', document)
    document = replace_once(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{escaped_base}">', document)
    document = replace_once(r'<meta property="og:image" content="[^"]*">', f'<meta property="og:image" content="{escaped_social_image}">', document)
    document = replace_once(r'<meta name="twitter:image" content="[^"]*">', f'<meta name="twitter:image" content="{escaped_social_image}">', document)
    document = replace_once(r'"url":\s*"[^"]*"', f'"url": "{escaped_base}"', document)
    document = replace_once(r'"logo":\s*"[^"]*"', f'"logo": "{escaped_logo}"', document)
    return document


def build_page(slug: str, page: dict, home_document: str, site_base_url: str) -> str:
    url = page_url(site_base_url, slug)
    title = escape(page["title"], quote=True)
    description = escape(page["description"], quote=True)
    keywords = escape(page["keywords"], quote=True)
    document = home_document
    document = replace_once(r"<title>.*?</title>", f"<title>{title}</title>", document)
    document = replace_once(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{description}">', document)
    document = replace_once(r'<meta name="keywords" content="[^"]*">', f'<meta name="keywords" content="{keywords}">', document)
    document = replace_once(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{escape(url, quote=True)}">', document)
    document = replace_once(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{title}">', document)
    document = replace_once(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{description}">', document)
    document = replace_once(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{escape(url, quote=True)}">', document)
    document = replace_once(r'<meta name="twitter:title" content="[^"]*">', f'<meta name="twitter:title" content="{title}">', document)
    document = replace_once(r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{description}">', document)
    document = replace_once(r'"url":\s*"[^"]*"', f'"url": "{escape(site_base_url, quote=True)}"', document)
    content = f'''      <main id="conteudo" class="seo-fallback">
        <h1>{escape(page["heading"])}</h1>
        {page["body"]}
        <nav aria-label="Páginas da Construprime"><a href="./">Início</a> · <a href="./empresa.html">A empresa</a> · <a href="./fundador.html">Fundador</a> · <a href="./servicos.html">Serviços</a> · <a href="./projetos.html">Projetos</a> · <a href="./processo.html">Como trabalhamos</a> · <a href="./manifesto.html">Manifesto</a> · <a href="./contato.html">Solicitar orçamento</a></nav>
      </main>'''
    return replace_once(re.escape(START) + r".*?" + re.escape(END), START + "\n" + content + "\n" + END, document)


def write_sitemap(site_base_url: str) -> None:
    namespace = "http://www.sitemaps.org/schemas/sitemap/0.9"
    ET.register_namespace("", namespace)
    urlset = ET.Element(f"{{{namespace}}}urlset")
    lastmod = date.today().isoformat()
    for slug in ["", *PAGES.keys()]:
        url = ET.SubElement(urlset, f"{{{namespace}}}url")
        ET.SubElement(url, f"{{{namespace}}}loc").text = page_url(site_base_url, slug)
        ET.SubElement(url, f"{{{namespace}}}lastmod").text = lastmod
        ET.SubElement(url, f"{{{namespace}}}changefreq").text = "monthly"
        ET.SubElement(url, f"{{{namespace}}}priority").text = PRIORITIES[slug]
    xml = ET.tostring(urlset, encoding="unicode", xml_declaration=False)
    (PUBLIC / "sitemap.xml").write_text(f'<?xml version="1.0" encoding="UTF-8"?>\n{xml}\n', encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Construprime SEO pages for a public site origin.")
    parser.add_argument("--site-base-url", default=DEFAULT_SITE_BASE_URL, help="HTTPS site base URL, with or without a trailing slash")
    args = parser.parse_args()
    site_base_url = normalize_site_base_url(args.site_base_url)

    home_document = update_home_metadata(site_base_url)
    (PUBLIC / "index.html").write_text(home_document, encoding="utf-8")
    for slug, page in PAGES.items():
        document = build_page(slug, page, home_document, site_base_url)
        (PUBLIC / f"{slug}.html").write_text(document, encoding="utf-8")

    write_sitemap(site_base_url)
    (PUBLIC / "robots.txt").write_text(
        f"User-agent: *\nAllow: /\nSitemap: {site_base_url}sitemap.xml\n",
        encoding="utf-8",
    )
    print(f"Generated {len(PAGES) + 1} SEO pages and gateway documents for {site_base_url}")


if __name__ == "__main__":
    main()
