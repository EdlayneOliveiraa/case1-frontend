# case2-frontend
Case 2 - Site do EstudoApp (Frontend)

## Sobre o projeto

O projeto foi desenvolvido com o intuito de criar um site para o EstudoApp, uma aplicação que ajuda os estudantes a se organizarem e estudarem melhor. O site foi desenvolvido com ReactJS e React Bootstrap.

## Pré-requisitos

- [Node.js](https://nodejs.org/en/) (na versão 16 ou superior)
- [NPM](https://www.npmjs.com/)

## Como executar?
```bash
npm install
npm run dev
```

## Passo a passo do desenvolvimento

### 1. Criar o projeto

```bash
npm create vite@latest estudoapp-site --template react
```

### 2. Instalar as dependências

```bash
cd estudoapp-site
npm install react-bootstrap bootstrap
npm install react-router-dom
```

### Importar css do bootstrap

Adicione a seguinte linha em seu `main.jsx`:

```js
import 'bootstrap/dist/css/bootstrap.min.css'
```

Adicione a seguinte linha em seu `index.html`:

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
```