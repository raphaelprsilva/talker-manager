<div align="center">
  <img src="./talker-manager-logo.jpg" alt="madruga wallet" />
</div>

---

## :memo: Descrição do Projeto

<p align="center">Este projeto é uma API desenvolvida com Express, na qual é um CRUD de palestrantes (talkers)</p>

## 📋 Tabela de conteúdos

<!--ts-->

- [🎯 Objetivo do projeto](#🎯-objetivo-do-projeto)
- [📝 O que pratiquei](#📝-o-que-pratiquei)
- [🛠 Tecnologias utilizadas](#🛠-tecnologias-utilizadas)
- [🚀 Rodando o projeto na sua máquina](#🚀-rodando-o-projeto-na-sua-máquina)
  - [📍Pre Requisitos](#📍-pre-requisitos)
- [📚 Documentação da API](#📚-documentação-da-api)
- [👉🏾 Status do projeto](#👉🏾-status-do-projeto)
- [🔗 Link para acessar o projeto](#🔗-link-para-acessar-o-projeto)
- [🤝 Colaboradores](#🤝-colaboradores)

<!--te-->

## 🎯 Objetivo do projeto

Este é um projeto de cunho educativo, no qual foi possível desenvolver uma
uma aplicação de cadastro de talkers (_palestrantes_) em que é possível cadastrar, visualizar, pesquisar, editar e excluir informações.

## 📝 O que pratiquei

Neste projeto, foi possível testar as habilidades:

- Utilizar o sistema de módulos do `Node.js`;
- Utilizar Funções Assíncronas no `Node.js`;
- Utilizar funções de leitura e escrita de arquivos do `Node.js`.
- Utilizar o `Node.js` com o framework Express para criar uma rota de um endpoint de API, acessível pelo navegador;
- Utilizar o Nodemon para auxiliar no desenvolvimento de APIs `Node.js` com o framework Express;
- Utilizar o `Node.js` com o framework Express para receber e tratar requisições com parâmetros de:
  - rota, ou router params;
  - consulta, ou query params;
- Utilizar o `Node.js` com o framework Express para receber e tratar requisições com parâmetros em seu corpo, ou body;
- Utilizar o `Node.js` com o framework Express para criar uma aplicação C.R.U.D. - de criação, leitura, atualização e remoção de dados;
- Empregar o encadeamento de middlewares usando a função `next()`.
- Empregar middlewares assíncronos no Express.
- Empregar middlewares para tratamento de erros.
- Empregar o uso de rotas aplicando o Router.
- Descrever uma API REST.

## 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)

As seguintes bibliotecas foram utilizadas para documentação do projeto:

- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express)
- [swagger-autogen](https://www.npmjs.com/package/swagger-autogen)

## 🚀 Rodando o projeto na sua máquina

Para rodar o projeto na sua máquina é necessário alguns pre requisitos:

### 📍Pre Requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)!

Comandos para clonar o projeto na sua máquina:

```bash
# Clone este repositório com o comando:
git clone git@github.com:raphaelprsilva/talker-manager.git

# Acesse a pasta do projeto no terminal/cmd com o comando:
cd talker-manager

# Instale as dependências com o comando:
npm install

# Inicie a aplicação com o comando:
npm run dev

```

O projeto possui um arquivo `docker-compose.yaml`, ou seja, você pode rodar o projeto com o Docker. Então caso você opte por:

### Rodar o projeto com o Docker

> Rode o serviço `node` com o comando `docker-compose up -d`.

- Esse serviço irá inicializar um container chamado `talker_manager`.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

> Use o comando `docker exec -it talker_manager bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências [**Caso existam**] com `npm install`

A extensão `Remote - Containers` do VS Code (que estará na seção de extensões recomendadas do programa) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

<img src="images/remote-container.png" width="800px" >

## 📚 Documentação da API

Para ver a documentação da API no Swagger com todas as funcionalidades da mesma, basta:

1. Colocar a aplicação para rodar com o comando:

```bash
npm run dev
```

2. No seu navegador, insira a rota:
   - http://localhost:3000/doc

## 👉🏾 Status do projeto

O projeto se encontra finalizado!

## 🔗 Link para acessar o projeto

Se quiser ao invés de clonar o projeto e rodar localmente, você deseje ver o mesmo online, basta clicar no link abaixo:

<a href="" target="_blank" rel="noopener">Talker Manager API</a>

## 🤝 Colaboradores

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/raphaelprsilva">
        <img src="https://avatars.githubusercontent.com/u/50886915?s=400&u=fa3df0caab0c83b9f88678abd93e8d5a81a5cd6f&v=4" width="100px;" alt="Foto de Raphael Silva no GitHub"/><br>
        <sub>
          <b>raphaelprsilva</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
