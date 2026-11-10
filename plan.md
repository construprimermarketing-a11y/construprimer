# Plano — site institucional profissional da Construprimer

## Escopo

Usar **Construprimer** como nome oficial em textos visíveis, títulos, metadados e dados estruturados, preservando os slugs técnicos, domínio e identificadores de repositório existentes. Inserir a imagem anexada pelo titular como retrato de Flávio, fundador e CEO, na página inicial e na página Fundador. Preservar o arquivo e sua composição sem gerar, substituir ou recortar o rosto.

Manter a presença institucional profissional, sem métricas não comprovadas, projetos conceituais ou depoimentos fictícios. Não fabricar histórico, biografia, endereço, região, obras, credenciais ou avaliações. O domínio atual da Manus permanece inalterado; a ativação pendente do GitHub Pages continua bloqueada por domínio, DNS e política de privacidade do repositório.

## Implementação

Copiar o arquivo recebido sem alteração para `public/images/flavio.png` e enviar uma cópia ao armazenamento do projeto usando o fluxo WebDev; a aplicação servida pela Manus usa o caminho retornado `/manus-storage/<key>`, e a imagem local dá suporte à pré-renderização SEO e futura hospedagem estática. A página inicial e a página Fundador exibem a mesma foto, com dimensões intrínsecas, `alt` descritivo e estilos `object-fit: contain`, mantendo logos e enquadramento.

Atualizar `public/js/app.js` para o retrato renderizado dinamicamente e revisar `public/index.html` e `scripts/generate_seo_pages.py` para que o conteúdo HTML inicial da Home e de Fundador também inclua a imagem. Gerar novamente as páginas `.html` e os arquivos SEO. Corrigir o nome da marca para Construprimer em conteúdo, interface, metadados, schema e documentos do projeto; não renomear URLs técnicas, domínios, repositório nem arquivos já vinculados ao host.

## Estrutura e limites

- `public/images/flavio.png`: cópia exata do retrato fornecido, incluída na saída estática.
- `public/js/app.js` e `public/js/content.js`: interface, rotas, conteúdo e metadados visíveis.
- `public/index.html` e `public/*.html`: HTML inicial legível sem JavaScript, com a foto nas páginas inicial e Fundador.
- `public/css/styles.css`: adaptação responsiva sem cortar a foto.
- `scripts/generate_seo_pages.py`: gerar novamente páginas, URLs e sitemap.
- `TODO.md`: manter status separado entre a alteração do retrato, Pages, WhatsApp, analytics e Perfil da Empresa.

Preservar formulário, número de WhatsApp e demais decisões existentes. Esta alteração atualiza a versão preparada no repositório e Preview; publicar a nova versão na hospedagem ativa é uma etapa separada.