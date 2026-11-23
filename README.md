# Julia Trogo, portfólio

Portfólio de Julia Trogo, product design lead com mais de 6 anos em discovery, research e estratégia de produto em saúde, agronegócio, indústria, mobilidade e seguros. Belo Horizonte, Brasil, aberta a trabalho remoto.

**Site:** [julia-trogo.github.io/portfolio](https://julia-trogo.github.io/portfolio/) · [versão em inglês](https://julia-trogo.github.io/portfolio/?lang=en)

## Cases

1. **Automotivo, interface de IA conversacional:** redesenho de um assistente de IA para a resposta ganhar o peso ([`cases/assistente-ia-automotivo.html`](cases/assistente-ia-automotivo.html))
2. **Saúde e nutrição animal:** do discovery ao MVP, rastreando a custódia do gado no campo ([`cases/rastreabilidade-gado.html`](cases/rastreabilidade-gado.html))
3. **Agronegócio:** um assistente virtual para colaboradores, clientes e fornecedores ([`cases/assistente-virtual-agro.html`](cases/assistente-virtual-agro.html))
4. **Automotivo, métricas e experimentação:** como provar que o resultado veio do produto ([`cases/metricas-experimentacao.html`](cases/metricas-experimentacao.html))
5. **Indústria:** diagnóstico do ciclo financeiro de uma indústria ([`cases/ciclo-financeiro-industria.html`](cases/ciclo-financeiro-industria.html))

Nomes de clientes e alguns detalhes foram omitidos ou alterados. Os números vêm dos projetos originais; as telas do case 01 foram recriadas com dados fictícios.

## Como funciona

- **Português primeiro.** As páginas são escritas em português. O botão PT/EN carrega o inglês sob demanda (`assets/js/i18n-en.js`) e lembra a escolha. `?lang=en` no fim de qualquer link abre direto em inglês, útil para mandar a recrutadores de fora.
- **Uma página por case**, com link próprio para compartilhar. Links antigos (`#/case-01` etc.) redirecionam para as páginas novas.
- **Um único layout responsivo**, testado de 360 px a 1440 px, sem rolagem lateral. Gráficos e tabelas largos rolam para o lado em telas pequenas.
- **Leve:** a home tem cerca de 20 KB; imagens são arquivos separados com carregamento sob demanda.
- **Acessibilidade:** link para pular ao conteúdo, foco visível, hierarquia de títulos, texto alternativo em todas as imagens, alvos de toque de 44 px e respeito a `prefers-reduced-motion`.
- **SEO:** título e descrição por página, Open Graph, `sitemap.xml` e `robots.txt`.

## Estrutura

```
.
├── index.html                 home: hero, trabalhos, sobre, contato
├── cases/*.html               uma página por case
├── 404.html
├── assets/
│   ├── css/site.css           estilos compartilhados (tokens, header, home, template de case)
│   ├── css/cases/*.css        estilos específicos de cada case
│   ├── js/main.js             troca de idioma e botão de copiar e-mail
│   ├── js/i18n-en.js          traduções para inglês (texto em PT → texto em EN)
│   └── img/                   foto e imagens dos cases
├── sitemap.xml
└── robots.txt
```

## Editando textos

Edite o texto em português direto no HTML. Se a frase também aparece em inglês, atualize a chave correspondente em `assets/js/i18n-en.js` (a chave é o texto em português exatamente como está na página). Se não atualizar, aquela frase continua em português no modo EN.

Algumas partes do case 01 usam o par `<span data-l="pt">…</span><span data-l="en">…</span>`: nesse caso, edite os dois spans.

## Stack

HTML, CSS e JavaScript puro, sem framework nem etapa de build. Fontes: [Fraunces](https://fonts.google.com/specimen/Fraunces) e [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts. Publicado com GitHub Pages a partir do branch `main`.

## Licença

© Julia Trogo. O conteúdo, os cases e o design visual não estão licenciados para reuso. Entre em contato antes de reutilizar qualquer parte deste trabalho.

---

## English

Portfolio of Julia Trogo, product design lead with 6+ years in discovery, research and product strategy. Pages are written in Portuguese; switch to English with the PT/EN button or open any link with `?lang=en`. Five case studies, one page each, in a single responsive layout. Contact: [LinkedIn](https://www.linkedin.com/in/juliatrogo).
