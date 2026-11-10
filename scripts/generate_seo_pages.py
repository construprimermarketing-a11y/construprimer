from html import escape
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ORIGIN = "https://construprime-ybsupctp.manus.space"
TEMPLATE = (PUBLIC / "index.html").read_text(encoding="utf-8")
START = "      <!-- SEO_PAGE_CONTENT_START -->"
END = "      <!-- SEO_PAGE_CONTENT_END -->"

PAGES = {
    "empresa": {
        "title": "Sobre a Construprime | Construção e reformas",
        "description": "Saiba mais sobre a Construprime, sua proposta institucional e a apresentação de construção e transformação de espaços. Informações a confirmar pela empresa.",
        "keywords": "Construprime, empresa de construção, reformas, transformação de espaços",
        "heading": "Construir é mais do que erguer paredes.",
        "body": """
<p><strong>A Construprime é apresentada como uma empresa dedicada à construção e transformação de espaços.</strong> A história, a equipe, as especialidades e as informações institucionais ainda precisam ser confirmadas pela empresa.</p>
<h2>Espaços pensados para durar</h2>
<p>A proposta desta apresentação é organizar a conversa sobre construção, reformas e acompanhamento de projetos sem atribuir credenciais ou dados não confirmados.</p>
<p>Da primeira ideia à entrega, cada etapa da obra merece planejamento, cuidado e atenção aos detalhes.</p>
<p><a href="/servicos.html">Conheça os serviços apresentados</a> · <a href="/contato.html">Fale com a Construprime</a></p>
<p><small>Conteúdo institucional provisório, pendente de validação pela equipe da Construprime.</small></p>""",
    },
    "fundador": {
        "title": "Flávio, fundador da Construprime | Nossa história",
        "description": "Conheça Flávio, apresentado pela Construprime como fundador e CEO. A biografia e os marcos da trajetória aguardam confirmação oficial.",
        "keywords": "Flávio, fundador Construprime, liderança, construção civil",
        "heading": "Uma obra se faz com técnica. E também com presença.",
        "body": """
<p>Flávio é apresentado como fundador e CEO da Construprime e está à frente da visão e do desenvolvimento da empresa. A biografia oficial, formação, trajetória e marcos de experiência aguardam confirmação.</p>
<figure><img src="/manus-storage/ceo-flavio_c5af9c99.jpg" width="320" height="320" alt="Imagem ilustrativa usada na referência para representar o fundador Flávio; confirmar se é fotografia oficial."><figcaption>Imagem ilustrativa de referência · confirmar antes de usar como retrato oficial.</figcaption></figure>
<h2>Uma história em construção</h2>
<p>Esta página será aprofundada com a trajetória oficial do fundador e os valores que orientam o trabalho da Construprime. Não foram acrescentadas credenciais nem informações biográficas que não constam na referência.</p>
<p><a href="/contato.html">Converse com a Construprime</a></p>""",
    },
    "servicos": {
        "title": "Construção, reformas e gestão de obras | Construprime",
        "description": "Confira a apresentação provisória dos serviços da Construprime: construção civil, reformas e melhorias, gestão de obras gerais e acabamentos.",
        "keywords": "Construção civil, reformas, gestão de obras, acabamentos, Construprime",
        "heading": "Para cada desafio, um jeito de construir.",
        "body": """
<p>Soluções apresentadas para acompanhar projetos com clareza, do primeiro desenho à entrega. A disponibilidade, o escopo e a região de atendimento precisam ser confirmados pela Construprime.</p>
<h2>Construção civil</h2><p>Do planejamento à entrega, construímos espaços com método, cuidado e visão de longo prazo. Escopo e especialidades a confirmar com a equipe.</p>
<h2>Reformas e melhorias</h2><p>Transformamos ambientes existentes sem perder de vista a rotina, o orçamento e o resultado. Escopo e especialidades a confirmar com a equipe.</p>
<h2>Gestão de obras gerais</h2><p>Mais clareza para decidir, mais organização para executar e mais tranquilidade para acompanhar. Escopo e especialidades a confirmar com a equipe.</p>
<h2>Acabamentos</h2><p>A etapa que traduz o projeto em sensação, uso e durabilidade no dia a dia. Escopo e especialidades a confirmar com a equipe.</p>
<p><a href="/contato.html">Converse sobre sua obra</a></p>""",
    },
    "projetos": {
        "title": "Projetos-conceito de construção | Construprime",
        "description": "Veja os projetos-conceito apresentados pela Construprime. Imagens e referências são ilustrativas e não representam obras ou clientes confirmados.",
        "keywords": "projetos-conceito, arquitetura, construção residencial, interiores, Construprime",
        "heading": "Espaços que começam antes da obra.",
        "body": """
<p>Uma seleção-conceito para apresentar como a Construprime pensa cada projeto como uma experiência completa. Estes exemplos não são portfólio confirmado.</p>
<h2>Casa Horizonte</h2><p>Projeto-conceito residencial. Local apresentado na referência: São Paulo. A imagem é ilustrativa e não representa uma obra confirmada.</p>
<h2>Apartamento Alto</h2><p>Projeto-conceito de interiores. Local apresentado na referência: Curitiba. A imagem é ilustrativa e não representa uma obra confirmada.</p>
<h2>Casa Pátio</h2><p>Projeto-conceito de arquitetura. Local apresentado na referência: Campinas. A imagem é ilustrativa e não representa uma obra confirmada.</p>
<p>Nomes, locais e imagens são conceituais e não identificam clientes ou trabalhos executados.</p>""",
    },
    "processo": {
        "title": "Como trabalhamos na construção | Construprime",
        "description": "Conheça as etapas apresentadas pela Construprime: entender a necessidade, definir o escopo, propor caminhos e executar com acompanhamento.",
        "keywords": "processo de obra, gestão de obras, construção, acompanhamento, Construprime",
        "heading": "Clareza do primeiro contato à execução.",
        "body": """
<p>O processo é uma forma de cuidar do projeto. Cada etapa ajuda a deixar claro o que está acontecendo e o que vem depois. As responsabilidades e formas de acompanhamento devem ser ajustadas ao escopo real.</p>
<ol><li><strong>Entender:</strong> conhecer sua necessidade, o local e o objetivo do projeto.</li><li><strong>Definir o escopo:</strong> alinhar serviços, prioridades e informações para avaliar a demanda.</li><li><strong>Propor caminhos:</strong> reunir informações, discutir os próximos passos e a proposta.</li><li><strong>Executar e acompanhar:</strong> combinar responsabilidades, etapas e formas de acompanhamento.</li></ol>
<p><a href="/contato.html">Conte sobre seu projeto</a></p>""",
    },
    "manifesto": {
        "title": "Construir com propósito | Construprime",
        "description": "Leia o texto-base provisório da Construprime sobre clareza e propósito na construção, ainda aguardando validação pela empresa.",
        "keywords": "Construprime, construção com propósito, construção civil, clareza na obra",
        "heading": "Construir com propósito.",
        "body": """
<p><strong>“Um parceiro para transformar planos em espaços reais — com clareza em cada etapa.”</strong></p>
<p>Este texto-base reaproveita a frase de apresentação da referência. Princípios, declarações e o manifesto institucional definitivo devem ser escritos e aprovados pela equipe da Construprime.</p>
<p><a href="/contato.html">Converse sobre sua obra</a></p>""",
    },
    "contato": {
        "title": "Solicite um orçamento de obra | Construprime",
        "description": "Fale com a Construprime pelo WhatsApp e conte sobre sua obra para iniciar uma conversa de orçamento. Região e e-mail aguardam confirmação.",
        "keywords": "orçamento de obra, contato Construprime, construção civil, reformas",
        "heading": "O próximo capítulo do seu espaço começa com uma boa conversa.",
        "body": """
<p>O primeiro contato serve para entender o momento da obra e indicar os próximos passos.</p>
<h2>WhatsApp</h2><p>Fale com a Construprime pelo número informado: <a href="https://wa.me/5511969435549">+55 (11) 96943-5549</a>. O WhatsApp abrirá com a mensagem preenchida; confira os dados e envie pelo aplicativo se desejar.</p>
<p>E-mail e região de atendimento aguardam confirmação oficial. O site não envia mensagens automaticamente nem armazena os dados do formulário.</p>
<p><a href="https://wa.me/5511969435549">Iniciar conversa no WhatsApp</a></p>""",
    },
}


def replace_once(pattern: str, replacement: str, document: str) -> str:
    updated, count = re.subn(pattern, lambda _: replacement, document, count=1, flags=re.S)
    if count != 1:
        raise ValueError(f"Template marker not found exactly once: {pattern}")
    return updated


for slug, page in PAGES.items():
    url = f"{ORIGIN}/{slug}.html"
    title = escape(page["title"], quote=True)
    description = escape(page["description"], quote=True)
    keywords = escape(page["keywords"], quote=True)
    document = TEMPLATE
    document = replace_once(r"<title>.*?</title>", f"<title>{title}</title>", document)
    document = replace_once(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{description}">', document)
    document = replace_once(r'<meta name="keywords" content="[^"]*">', f'<meta name="keywords" content="{keywords}">', document)
    document = replace_once(r'<link rel="canonical" href="[^"]*">', f'<link rel="canonical" href="{url}">', document)
    document = replace_once(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{title}">', document)
    document = replace_once(r'<meta property="og:description" content="[^"]*">', f'<meta property="og:description" content="{description}">', document)
    document = replace_once(r'<meta property="og:url" content="[^"]*">', f'<meta property="og:url" content="{url}">', document)
    document = replace_once(r'<meta name="twitter:title" content="[^"]*">', f'<meta name="twitter:title" content="{title}">', document)
    document = replace_once(r'<meta name="twitter:description" content="[^"]*">', f'<meta name="twitter:description" content="{description}">', document)
    content = f'''      <main id="conteudo" class="seo-fallback">
        <h1>{escape(page["heading"])}</h1>
        {page["body"]}
        <nav aria-label="Páginas da Construprime"><a href="/">Início</a> · <a href="/empresa.html">A empresa</a> · <a href="/fundador.html">Fundador</a> · <a href="/servicos.html">Serviços</a> · <a href="/projetos.html">Projetos</a> · <a href="/processo.html">Como trabalhamos</a> · <a href="/manifesto.html">Manifesto</a> · <a href="/contato.html">Solicitar orçamento</a></nav>
      </main>'''
    document = replace_once(re.escape(START) + r".*?" + re.escape(END), START + "\n" + content + "\n" + END, document)
    (PUBLIC / f"{slug}.html").write_text(document, encoding="utf-8")

print(f"Generated {len(PAGES)} route-specific pages in {PUBLIC}")
