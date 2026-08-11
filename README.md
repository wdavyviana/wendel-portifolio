# Portfólio — Wendel Davy Viana

Redesenho do portfólio em **React + Vite + Tailwind CSS**, com um elemento
visual próprio (a "corrente" que conecta os 4 serviços em sequência: atrair →
automatizar → responder → sustentar).

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Colocando suas fotos e ícones de volta

O projeto já espera as imagens nos mesmos nomes do repositório antigo. Só
copie a pasta `img/` do repositório `portifolio` original para dentro de
`public/img/` aqui, mantendo os nomes de arquivo:

```
public/
  img/
    perfil2.jpeg
    meta.png
    whatsapp.png
    wordpress.png
    tiktok.png
    instagram.png
    facebook.png
    github.png
    js.png
    html5.png
    css3.png
    adwords.png
```

Sem as imagens, o site continua funcionando — os espaços de foto e ícones
simplesmente ficam em branco até você colocar os arquivos.

## Editando o texto

Todo o conteúdo (títulos, textos, serviços, formulário) está centralizado em
`src/data/content.js`. Não precisa tocar nos componentes pra mudar uma frase
ou trocar um serviço — edite esse arquivo.

## Build para produção

```bash
npm run build
```

Gera a pasta `dist/`, que é o que o Netlify (ou qualquer host estático) vai
servir.

## Deploy no Netlify

1. Suba esta pasta pra um repositório no GitHub (pode ser o mesmo
   `portifolio`, substituindo o conteúdo antigo, ou um novo).
2. No Netlify: **Add new site → Import an existing project**.
3. Configurações de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy. Pronto.

## Estrutura

```
src/
  components/   → um arquivo por seção (Nav, Hero, Tools, Services, About, Contact, Footer)
  data/
    content.js  → todo o texto e as listas de serviços/ferramentas
  index.css     → tokens de cor, fontes, animações
  App.jsx       → junta as seções na ordem da página
```
