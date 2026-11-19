# Plano — site institucional profissional da Construprimer

## Escopo

Usar **Construprimer** como nome oficial em textos visíveis, títulos, metadados e dados estruturados, preservando os slugs técnicos, domínio e identificadores de repositório existentes. Inserir a imagem anexada pelo titular como retrato de Flávio, fundador e CEO, na página inicial e na página Fundador. Preservar o arquivo e sua composição sem gerar, substituir ou recortar o rosto.

Manter a presença institucional profissional, sem métricas não comprovadas, projetos conceituais ou depoimentos fictícios. Não fabricar histórico, biografia, endereço, região, obras, credenciais ou avaliações. O domínio personalizado `construprimer.com.br` está associado ao projeto Cloudflare Pages `construprimer-site`, conectado ao repositório `construprimermarketing-a11y/construprimer` na branch `main`. Os domínios `construprimer.com.br` e `www.construprimer.com.br` estão ativos e servem o site via HTTPS; a saída estática `/docs` é a publicada pelo Pages. O endereço Manus permanece como Preview. A publicação não garante rastreamento ou posição específica no Google.

## Solicitação de horário pelo WhatsApp

Na página de contato, oferecer um formulário separado do pedido de orçamento, com nome, data e horário preferidos e campos opcionais para uma alternativa e observação. O formulário abre uma mensagem preenchida para o WhatsApp; o visitante a revisa e envia, e a equipe confirma manualmente. Não consultar disponibilidade, criar eventos, confirmar reservas nem conectar credenciais do Google Calendar nesta opção.

## Galeria de referências ilustrativas

A página Projetos recebe uma pequena galeria de imagens residenciais de bancos com licença adequada para uso no site. Informar de forma visível em cada card e na página que as fotos são ilustrativas e não representam obras executadas, clientes ou equipe da Construprimer. O selo sobre cada foto deve ser pequeno e discreto, usando “Referência”, e a nota explicativa geral deve permanecer legível sem competir com as imagens. Preservar o conteúdo de organização do pedido de projeto e as chamadas para contato/WhatsApp. Incluir a galeria também no HTML inicial estático para que a página continue compreensível sem JavaScript.

## Comparativo antes e depois

Implementar um comparativo somente quando houver uma foto real de antes e outra de depois do mesmo ambiente/obra, com autorização para publicação. Identificar claramente “Antes” e “Depois”; não combinar fotos de bancos diferentes nem imagens geradas para sugerir que sejam uma obra executada pela Construprimer. Até receber um par real, não exibir um comparativo vazio ou fictício.

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
