# GitHub Pages — Construprimer

Referências oficiais consultadas em 10/11/2026 para a configuração do domínio próprio.

## Decisões e estado verificado

- O repositório `construprimermarketing-a11y/construprimer` está público. O site publicado pelo GitHub Pages também será público.
- O domínio informado pelo titular é `construprimer.com.br`. O RDAP do Registro.br o retornou como ativo, com nameservers `a.auto.dns.br` e `b.auto.dns.br`.
- No momento da consulta, não foram resolvidos registros A, AAAA ou CNAME para o domínio raiz nem para `www`. A resolução DNS precisa ser configurada no provedor do domínio, aparentemente Registro.br; não há acesso à conta DNS neste ambiente.
- A saída estática é gerada de `public/` para `docs/` por `python3 scripts/generate_seo_pages.py --site-base-url https://construprimer.com.br --output-dir docs`. A publicação prevista é pela branch `main`, pasta `/docs`, sem workflow personalizado.
- As canonicals, o sitemap e o `robots.txt` da saída Pages usam `https://construprimer.com.br/`. A pasta contém `CNAME` com `construprimer.com.br` e `.nojekyll`.

## Registros DNS necessários

Para o domínio raiz (`@`), criar registros A para os endereços documentados pelo GitHub Pages:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Opcionalmente, os registros AAAA para IPv6 são `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` e `2606:50c0:8003::153`. Para `www`, criar CNAME apontando diretamente a `construprimermarketing-a11y.github.io`, sem nome do repositório. Não usar registros DNS wildcard. Depois da propagação, verificar o domínio e ativar HTTPS nas configurações Pages; o GitHub informa que a opção de HTTPS pode levar até 24 horas para ficar disponível.

## Referências

- [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub REST API endpoints for Pages](https://docs.github.com/rest/pages/pages)
- [Registro.br RDAP — construprimer.com.br](https://rdap.registro.br/domain/construprimer.com.br)
