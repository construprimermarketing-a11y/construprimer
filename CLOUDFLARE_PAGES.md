# Publicar a Construprimer no Cloudflare Pages

O site é estático: o conteúdo pronto para publicação está em `docs/`. Não usa framework nem precisa instalar dependências ou executar um build.

## Configuração do projeto

Recomendação: conectar o repositório ao Cloudflare Pages por **Git integration** (GitHub). Assim, novos commits na branch de produção atualizam o site automaticamente.

Na criação do projeto em **Workers & Pages → Create application → Pages → Connect to Git**, selecione:

- Repositório: `construprimermarketing-a11y/construprimer`
- Production branch: `main`
- Framework preset: `None` / `None`
- Build command: deixar vazio
- Build output directory: `docs`
- Root directory (advanced): deixar vazio (raiz do repositório)

Não use Direct Upload: a integração Git é a opção indicada para manter o site atualizado a cada push. A Cloudflare informa que não é possível converter um projeto Direct Upload em Git integration depois.

## Domínio

Depois do primeiro deploy:

1. Abra o projeto em **Workers & Pages → construprimer → Custom domains**.
2. Adicione `construprimer.com.br`.
3. Adicione também `www.construprimer.com.br`, se quiser atender as duas versões.
4. Siga a validação indicada no painel da Cloudflare. O domínio precisa estar ativo como zona na mesma conta Cloudflare.
5. Defina a versão principal desejada e teste o redirecionamento entre `www` e o domínio raiz.

**Atenção ao DNS e ao e-mail:** se o domínio ainda usa nameservers do Registro.br, primeiro adicione a zona à Cloudflare e confira/import todos os registros DNS existentes. Preserve MX, SPF, DKIM, DMARC e quaisquer outros registros de e-mail/serviços. Só altere os nameservers no Registro.br para os dois valores atribuídos pela Cloudflare depois dessa revisão. Não compartilhe senhas ou tokens no chat.

## Arquivos de publicação

- `docs/index.html` e as demais páginas HTML: site estático.
- `docs/sitemap.xml` e `docs/robots.txt`: SEO.
- `docs/_headers`: cabeçalhos HTTP de segurança para respostas estáticas.
- `docs/images/`, `docs/css/`, `docs/js/`: recursos do site.

O arquivo `public/_headers` é a fonte do cabeçalho; o gerador copia `public/` para `docs/` ao preparar uma nova exportação. Portanto, mantenha os dois arquivos sincronizados se alterar as regras manualmente.

## Verificação depois do deploy

- Abrir a URL `*.pages.dev` gerada pelo Cloudflare.
- Conferir página inicial, páginas internas, imagens, CSS, menu e formulário/WhatsApp.
- Confirmar `https://construprimer.com.br/`, `https://www.construprimer.com.br/`, certificado HTTPS e redirecionamento escolhido.
- Conferir `https://construprimer.com.br/robots.txt` e `https://construprimer.com.br/sitemap.xml`.

Este guia prepara o repositório; a conexão Git, a criação do projeto, a validação do domínio e as mudanças de DNS ainda precisam ser concluídas no painel da Cloudflare.
