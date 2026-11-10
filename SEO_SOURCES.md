# Fontes oficiais — SEO e presença local

Referências consultadas em 10/11/2026 para a preparação da versão SEO da Construprimer. A documentação pode ser atualizada pelo Google.

- [Guia de SEO para a Pesquisa Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — usar conteúdo útil e descritivo, títulos e links internos claros; o Google decide se e quando uma página é indexada.
- [Dados estruturados LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business) — marcar somente informações verdadeiras; endereço/área e demais propriedades dependem dos dados reais da empresa. A versão do site usa `Organization` e não declara um endereço local ainda não informado.
- [Diretrizes para representar uma empresa no Perfil da Empresa](https://support.google.com/business/answer/3038177?hl=pt-BR) — o perfil deve representar um negócio elegível do mundo real, com nome e presença fiéis.
- [Áreas de serviço do Perfil da Empresa](https://support.google.com/business/answer/9157481?hl=pt-BR) — negócios que atendem clientes presencialmente fora de sua base devem descrever as áreas reais e não apresentar um endereço como local visitável quando clientes não são recebidos ali.
- [Adicionar ou reivindicar um Perfil da Empresa](https://support.google.com/business/answer/7039811?hl=pt-BR) — verificar se já há perfil antes de criar outro e concluir o processo de verificação solicitado pelo Google.
- [Como melhorar o ranking local no Google](https://support.google.com/business/answer/7091?hl=pt-BR) — relevância, distância e destaque são os principais fatores explicados pelo Google; ninguém pode prometer posição.
- [Sobre sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview) — enviar o sitemap pelo Search Console é uma indicação para rastreamento, não uma garantia de indexação ou classificação.

## Decisões de implementação

- Criar HTML inicial distinto para as oito páginas; manter metadata social e canonicals por página, links HTML estáticos, `sitemap.xml` e `robots.txt`.
- Manter o perfil estruturado no nível `Organization`, sem `LocalBusiness`/endereço/área até a empresa confirmar presença e território de atuação.
- O titular confirmou o nome comercial “Construprimer” e forneceu a fotografia de Flávio para a Home e a página Fundador. A imagem não foi gerada nem cortada; a mudança deste checkpoint ainda aguarda publicação no site público.
- O site Manus já está público. A nova revisão com marca/foto está no Preview até que o titular autorize sua publicação.
