# Plano — versão institucional profissional da Construprime

## Escopo

Manter a presença institucional profissional sem linguagem de prévia ou protótipo, métricas não comprovadas, projetos conceituais ou depoimentos fictícios. Preservar marca, páginas, serviços e WhatsApp informado pelo usuário. Não fabricar histórico, biografia, endereço, região, obras, credenciais ou avaliações; manter imagens editoriais sem fingir que representam projetos executados e não tratar retrato ilustrativo como foto oficial.

Preparar os arquivos para futura publicação do repositório GitHub conectado pelo GitHub Pages. Não trocar o domínio da versão Manus atualmente pública nem expor o código-fonte sem autorização. O domínio personalizado, a ativação do Pages e a compatibilidade do plano/visibilidade do repositório privado dependem de informações e confirmação do titular.

## Implementação

Manter as oito páginas pré-geradas, metadados por rota, HTML inicial rastreável, navegação, manifest, sitemap e robots. Copiar o hero editorial hospedado no armazenamento Manus para `public/images/hero-architecture.webp`, usar a cópia local nas páginas e metadados sociais e manter logo, CSS e JavaScript no pacote. Tornar caminhos de assets e links compatíveis tanto com o caminho de projeto `/<repositório>/` do Pages quanto com um domínio personalizado na raiz. Parametrizar `scripts/generate_seo_pages.py` para gerar canonicals, links sociais, sitemap e robots usando a origem pública informada no build e rejeitar origens inválidas.

Não criar nem executar workflow GitHub Actions: o contrato do repositório canônico gerenciado informa que Actions não está disponível nesta configuração. Depois de confirmados o domínio e a elegibilidade/privacidade do repositório, preparar o artefato estático com origem correta em uma pasta de publicação suportada, como `/docs`, e ativar Pages por publicação a partir do branch autorizado. A publicação do Pages pode acontecer em cada atualização dessa pasta; não será criada cópia publicável nem disparada antes da confirmação.

O site permanece estático. O formulário já abre o WhatsApp com uma mensagem preenchida para o número fornecido; a pessoa revisa e envia pelo aplicativo. Não implementar envio invisível, armazenamento de leads ou backend sem seleção de um serviço oficial e configuração segura de credenciais. Não inserir Google Analytics nem Meta Pixel sem os IDs fornecidos; preferir carregar as tags somente após consentimento de análise.

## Estrutura e limites

- `scripts/generate_seo_pages.py`: gerar páginas, canonicals, metadados por rota, sitemap e robots para a origem-base recebida no build.
- `public/index.html` e `public/js/app.js`: conteúdo inicial, navegação e assets relativos, compatíveis com caminho de projeto ou domínio próprio.
- `public/images/`: logotipo e cópia local do hero editorial, sem dependência do armazenamento Manus na hospedagem Pages.
- `public/js/content.js` e `public/css/styles.css`: conteúdo institucional e interface responsiva existentes.
- `public/manus-routes.json`: manter o manifest alinhado às oito páginas da versão Manus; ele não configura roteamento do GitHub Pages.
- `docs/` (ainda não criada): futura cópia do artefato estático gerado para a publicação de branch `/docs`, somente depois de confirmados a origem e o direito de publicar.

O GitHub Pages é hospedagem estática, sem backend para receber leads. O domínio precisa ser informado, e seus registros DNS devem ser apresentados ao titular para confirmação antes de qualquer alteração. A disponibilidade de site público a partir de repositório privado depende do plano/configuração da conta; não expor o repositório como atalho.