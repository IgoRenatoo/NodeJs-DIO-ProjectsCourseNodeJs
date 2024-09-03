# 🚀 Projeto: Gerenciador de Episódios

## 📜 Descrição do Projeto

Este projeto consiste em uma simulação de um servidor HTTP simples, que gerencia e exibe dados relacionados a episódios de uma série fictícia. A aplicação permite listar, ordenar e filtrar episódios baseados em diferentes critérios, utilizando conceitos de rotas, controladores e manipulação de requisições HTTP.

## ⚙️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o código JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **HTTP**: Protocolo de comunicação utilizado na aplicação.
- **Dotenv**: Carregar variáveis de ambiente a partir de um arquivo `.env`.

## 🧩 Funcionalidades

1. **pullEpisodesList()**
   - Retorna uma lista de todos os episódios.

2. **sortedEpisodesByViews()**
   - Retorna os episódios ordenados pelo número de visualizações.

3. **filterEpisodesByCorporation(corp: string)**
   - Filtra e retorna os episódios baseados na corporação fornecida como parâmetro.

4. **mostViewedEpisode()**
   - Retorna o episódio com o maior número de visualizações.

## 🛠️ Pré-requisitos de Habilidades

- Conhecimento básico de **JavaScript**/**TypeScript**.
- Entendimento de conceitos de **HTTP** e **APIs REST**.
- Familiaridade com **Node.js** e manipulação de servidores.

## 🎯 Habilidade Adquirida

- Implementação de um servidor HTTP simples.
- Manipulação de rotas e controladores em **Node.js**.
- Utilização de **TypeScript** para melhorar a segurança e manutenção do código.

## 📂 Estrutura do Projeto
<pre>
src
├── controllers
│   └── episodes-controller.ts
├── database
│   └── list-episodes.md
├── models
│   ├── episodes-model.ts
│   ├── http-model.ts
│   └── routes-model.ts
├── views
│   └── app-view.ts
└── index.ts
</pre>

## 🏁 Conclusão

Este projeto proporciona uma introdução prática ao desenvolvimento de servidores HTTP utilizando **Node.js** e **TypeScript**. A estrutura modularizada facilita a manutenção e a escalabilidade da aplicação. Além disso, permite a compreensão de conceitos importantes na construção de APIs REST, como rotas, controladores e modelos.