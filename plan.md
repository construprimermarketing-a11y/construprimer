# Plano — versão institucional profissional da Construprime

## Escopo

Transformar o site já publicado em uma presença institucional profissional, removendo linguagem de “prévia”, “protótipo” e “conteúdo a confirmar”, métricas não comprovadas, projetos conceituais com nomes/localidades, depoimentos fictícios e contatos sociais/e-mail não confirmados. Preservar marca, navegação, páginas, categorias de serviço presentes na referência e o WhatsApp informado pelo usuário. Não fabricar histórico da empresa, biografia do fundador, endereço, área de atendimento, obras, credenciais ou avaliações. Até que a empresa forneça materiais reais, usar copy institucional concisa e imagens de arquitetura claramente editoriais, sem fingir que representam obras executadas; não exibir o retrato ilustrativo do fundador como retrato oficial.

## Implementação

Manter o site estático atual, com HTML pré-gerado pelas oito rotas, canonicals no domínio público, metadados por página, manifest, sitemap, robots e navegação existente. Atualizar `public/js/content.js` e `public/js/app.js` para eliminar os dados fictícios e produzir seções institucionais úteis, serviços, processo, FAQ e CTA de WhatsApp. Reescrever `public/index.html` e `scripts/generate_seo_pages.py` para que o conteúdo inicial rastreável corresponda à interface renderizada. Ajustar estilos existentes em `public/css/styles.css` para as novas seções, mantendo responsividade, acessibilidade e identidade de arquitetura premium.

## Estrutura e limites

- `public/js/content.js`: catálogo de serviços, etapas e FAQ sem portfólio/depoimentos inventados.
- `public/js/app.js`: componentes e oito páginas, menu responsivo, metadados client-side e formulário que abre WhatsApp com mensagem preenchida; envio apenas pelo usuário no aplicativo.
- `public/index.html`: casca, SEO inicial da Home, dados estruturados factuais e fallback HTML.
- `scripts/generate_seo_pages.py`: geração das sete páginas iniciais específicas por rota.
- `public/css/styles.css`: identidade e responsividade do site.
- `public/manus-routes.json`, `public/sitemap.xml`, `public/robots.txt`: manter alinhados às oito páginas canônicas.

Não habilitar servidor/backend nem armazenamento de leads: o formulário continua iniciando WhatsApp, sem envio de e-mail, sem envio automático da mensagem e sem persistência dos dados no site. O site existente já foi publicado e tornado público; salvar esta atualização como novo checkpoint. A publicação da nova revisão só ocorre após pedido explícito do usuário. Dados reais indispensáveis para portfólio, perfil do Google e páginas adicionais serão solicitados ao titular.
