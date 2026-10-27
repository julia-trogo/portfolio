# Julia Trogo, portfolio

Personal portfolio of Julia Trogo, product design lead with 6+ years in discovery, research and product strategy across healthcare, agribusiness, industry, mobility and insurance. Based in Belo Horizonte, Brazil, open to remote work.

**Live site:** [julia-trogo.github.io/portfolio](https://julia-trogo.github.io/portfolio/)

*[Leia em português](#português)*

## What's inside

A home page with a summary of each case, an about section and contact, plus one full page per case:

1. **Automotive, conversational AI interface:** redesigning an AI assistant so the answer carries the weight (`#/case-01`)
2. **Animal health & nutrition:** from discovery to MVP, tracing livestock custody in the field (`#/case-02`)
3. **Agribusiness:** a virtual assistant for employees, customers and suppliers (`#/case-03`)
4. **Automotive, metrics and experimentation:** proving the result came from the product (`#/case-04`)
5. **Manufacturing:** diagnosing the financial cycle of a global manufacturer (`#/case-05`)

Client names and some details are omitted or changed. Numbers come from the original projects; the case 04 screens are recreated with fictional data.

## Features

- Single self-contained HTML file: CSS, JavaScript, portrait and case images are inlined
- Separate case pages through hash routes (`#/case-01` … `#/case-05`), plus `#/work`, `#/about` and `#/contact` on the home page
- Bilingual (EN / PT-BR) with a language switch; the choice is remembered in `localStorage`
- Two layouts: the full desktop layout from 1280px and a single-column layout below that
- Accessibility: skip link, visible keyboard focus, semantic landmarks, alt text on every image, `prefers-reduced-motion` respected

## Stack

HTML, CSS and vanilla JavaScript. No framework, no build step needed to publish. Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.

## Project structure

```
.
├── index.html
├── assets/
│   └── Julia-Trogo-CV.pdf
└── README.md
```

The "Download CV" button links to `assets/Julia-Trogo-CV.pdf`, so keep that path or update the link.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

1. Replace `index.html` in the repository and push.
2. In **Settings → Pages**, choose the branch and the root folder.
3. The site will be available at <https://julia-trogo.github.io/portfolio/>.

## Contact

[juliavtrogo@gmail.com](mailto:juliavtrogo@gmail.com) · [linkedin.com/in/juliatrogo](https://www.linkedin.com/in/juliatrogo)

## License

© Julia Trogo. The content, case studies and visual design are not licensed for reuse. Please contact me before reusing any part of this work.

---

## Português

Portfólio de Julia Trogo, product design lead com mais de 6 anos em discovery, research e estratégia de produto em saúde, agronegócio, indústria, mobilidade e seguros. Belo Horizonte, Brasil, aberta a trabalho remoto.

**O que tem aqui:** uma home com o resumo de cada case, a seção sobre mim e contato, e uma página completa para cada um dos cinco cases (`#/case-01` a `#/case-05`), começando pelo redesign do assistente de IA. Nomes de clientes e alguns detalhes foram omitidos ou alterados; os números vêm dos projetos originais, e as telas do case 04 foram recriadas com dados fictícios.

**Como funciona:** é um único arquivo HTML (CSS, JavaScript, foto e imagens embutidos), em EN e PT-BR com botão de troca de idioma que lembra a escolha, com layout de desktop a partir de 1280px e layout em coluna única abaixo disso, e com acessibilidade (link para pular ao conteúdo, foco visível no teclado, texto alternativo nas imagens e respeito a `prefers-reduced-motion`).

**Rodar localmente:** abra o `index.html` no navegador ou use `python3 -m http.server 8000`.

**Publicar no GitHub Pages:** substitua o `index.html` no repositório, envie e confira em **Settings → Pages**. O botão "Baixar CV" aponta para `assets/Julia-Trogo-CV.pdf`.

**Contato:** [juliavtrogo@gmail.com](mailto:juliavtrogo@gmail.com) · [linkedin.com/in/juliatrogo](https://www.linkedin.com/in/juliatrogo)
