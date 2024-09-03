# 🏎️ Projeto: Desenvolvimento APIRest Formula 1

## 📜 Descrição do Projeto
Este projeto simula um ambiente de Fórmula 1, utilizando Node.js para implementar uma API que permite consultar informações sobre pilotos e equipes, além de determinar o melhor piloto com base em critérios específicos.

## ⚙️ Tecnologias Utilizadas
- Node.js
- Fastify
- TypeScript

## 🧩 Funcionalidades

1. **listDriver()**
   - Retorna a lista de todos os pilotos da Fórmula 1.

2. **listTeam()**
   - Retorna a lista de todas as equipes da Fórmula 1.

3. **bestDriver()**
   - Determina o melhor piloto com base em critérios específicos.

4. **mostTitle()**
   - Retorna o piloto com o maior número de títulos.

5. **mostAceleration()**
   - Retorna o piloto com a melhor aceleração.

## 🛠️ Pré-requisitos de Habilidades
- Conhecimento básico de Node.js e TypeScript
- Experiência com APIs RESTful
- Familiaridade com o uso do Fastify

## 🎯 Habilidade Adquirida
- Implementação de APIs RESTful com Fastify
- Manipulação de dados em TypeScript
- Desenvolvimento de lógica para determinar estatísticas de performance

## 📂 Estrutura do Projeto

<pre>
src/
├── controllers/
│   ├── best-driver-controller.ts
│   ├── most-aceleration-controller.ts
│   └── most-titles-controller.ts
├── database/
│   ├── drivers-database.ts
│   └── teams-database.ts
├── models/
│   └── interface-models.ts
├── routers/
│   └── get-routers.ts
└── index.ts
</pre>

## 🏁 Conclusão
O projeto oferece uma introdução sólida ao desenvolvimento de APIs usando Node.js e Fastify, permitindo que os desenvolvedores criem rapidamente endpoints para manipulação e consulta de dados. Ao final deste desafio, o desenvolvedor terá uma compreensão clara de como estruturar uma aplicação de backend e implementar funcionalidades específicas para simular um ambiente de corrida de Fórmula 1.