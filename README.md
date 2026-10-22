# Julia Trogo · Portfolio

Personal portfolio of Julia Trogo, product design lead with 6+ years in discovery, research and product strategy across healthcare, agribusiness, industry, mobility and insurance. Based in Belo Horizonte, Brazil, open to remote work.

**Live site:** [julia-trogo.github.io/portfolio](https://julia-trogo.github.io/portfolio/)

*[Leia em português](#português)*

## What's inside

Five case studies, each with role, team, duration and measurable impact, plus an about section and contact:

1. **Animal health & nutrition:** from discovery to MVP, tracing livestock custody in the field
2. **Agribusiness:** a virtual assistant for employees, customers and suppliers
3. **Consumer mobile app (concept):** booking a public health appointment from your phone
4. **Automotive:** metrics and experimentation, proving the result came from the product
5. **Manufacturing:** diagnosing the financial cycle of a global manufacturer

Client names and some details are omitted or changed. Numbers come from the original projects.

## Features

- Single self-contained HTML file, with the CSS, JavaScript and portrait inlined
- Bilingual (EN / PT-BR) with a language switch; the choice is remembered in `localStorage`
- Case index at the top of the work section, with sticky case titles on wide screens
- Responsive from phone to desktop
- Accessibility: skip link, visible keyboard focus, semantic landmarks, `prefers-reduced-motion` respected

## Stack

HTML, CSS and vanilla JavaScript. No framework, no build step. Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.

## Project structure

```
.
├── index.html
├── assets/
│   └── Julia-Trogo-CV.pdf
└── README.md
```

The page links to `assets/Julia-Trogo-CV.pdf` for the CV download, so keep that path or update the link.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy with GitHub Pages

1. Name the main file `index.html` and push to the repository.
2. In **Settings → Pages**, choose the branch and the root folder.
3. The site will be available at `https://<user>.github.io/<repository>/`, for example <https://juliatrogo-design.github.io/portfolio/>.

## Customizing

- **Colors:** design tokens are CSS variables in `:root` (`--pk`, `--p`, `--br`, `--gr`).
- **Adding a case:** copy an `<article class="case">` block, set its accent color with `style="--acc:#hex"` and write both language versions using `data-l="en"` and `data-l="pt"` spans. The index at the top is generated automatically.
- **Pending content:** any text in square brackets, such as `[fill in from the PDF]`, is highlighted in pink on the page so it is easy to find before publishing.

## Contact

[juliavtrogo@gmail.com](mailto:juliavtrogo@gmail.com) · [linkedin.com/in/juliatrogo](https://www.linkedin.com/in/juliatrogo)

## License

© Julia Trogo. The content, case studies and visual design are not licensed for reuse. Please contact me before reusing any part of this work.

---

## Português

Portfólio de Julia Trogo, product design lead com mais de 6 anos em discovery, research e estratégia de produto em saúde, agronegócio, indústria, mobilidade e seguros. Belo Horizonte, Brasil, aberta a trabalho remoto.

**O que tem aqui:** cinco cases com papel, time, duração e impacto mensurável, além de uma seção sobre mim e contato. Nomes de clientes e alguns detalhes foram omitidos ou alterados; os números vêm dos projetos originais.

**Como funciona:** é um único arquivo HTML (CSS, JavaScript e foto embutidos), em EN e PT-BR com botão de troca de idioma, responsivo e com acessibilidade (link para pular ao conteúdo, foco visível no teclado e respeito a `prefers-reduced-motion`).

**Rodar localmente:** abra o `index.html` no navegador ou use `python3 -m http.server 8000`.

**Publicar no GitHub Pages:** renomeie o arquivo principal para `index.html`, envie ao repositório e ative o Pages em **Settings → Pages**.

**Contato:** [juliavtrogo@gmail.com](mailto:juliavtrogo@gmail.com) · [linkedin.com/in/juliatrogo](https://www.linkedin.com/in/juliatrogo)
