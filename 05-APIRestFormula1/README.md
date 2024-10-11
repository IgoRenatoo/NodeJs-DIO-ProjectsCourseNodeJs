# 🏎️ Projeto: Desenvolvimento APIRest Formula 1

## 💻 Descrição do projeto

Este projeto simula o ambiente de uma corrida de Fórmula 1, com foco na criação de uma API RESTful utilizando Node.js, Fastify e TypeScript. O principal objetivo é fornecer uma interface para a consulta de informações sobre pilotos e equipes, além de determinar o melhor piloto com base em critérios como aceleração e número de títulos.

> **Colaboração:** Not found  
> **Status:** <span> Concluído </span> ✔️

<div align="center">
  <p> 👀 Prévia </p>
  <img src="./assets/imagens/previa-project.png" alt="Prévia do projeto">
</div>

## 📜 Índice

- [Descrição](#-descrição-do-projeto)
- [Conceitos Aprendidos](#-conceitos-aprendidos)
- [Tecnologias Utilizadas](#--tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Pendências](#-pendências)
- [Contribuição](#-contribuição)
- [Conclusão](#-conclusão)
- [Informações Adicionais](#-informações-adicionais)
- [Licença](#-licença)

## ✅ Conceitos Aprendidos

- Implementação de APIs RESTful com Fastify
- Manipulação de dados em TypeScript
- Desenvolvimento de lógica para determinar estatísticas de performance
- Estruturação de aplicações backend

## 🛠 Tecnologias Utilizadas

![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![image](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![image](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

## ⚙ Instalação

Para começar a usar este projeto, siga as etapas abaixo:

1. Faça um fork do repositório:
   <pre>git fork https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs</pre>

2. Clone o seu fork para sua máquina:
   <pre>git clone https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs</pre>

3. Acesse o diretório do projeto:
   <pre>cd NodeJs-DIO-ProjectsCourseNodeJs</pre>

4. Acesse a pasta do projeto:
   <pre>cd 05-APIRestFormula1</pre>

5. Instale as dependências:
   <pre>npm install</pre>


## 🚀 Uso 

1. Execute o comando `npm run dev` no terminal de sua preferência.
2. Utilize um cliente HTTP (como Postman ou Insomnia) para interagir com as rotas disponíveis:

    Para usar o projeto, você pode acessar os seguintes endpoints:
    > `GET /drivers` - Retorna todos os pilotos.

    > `GET /teams` - Retorna todas as equipes.

    > `GET /best-driver` - Retorna o melhor piloto baseado em critérios predefinidos.

## 🧩 Funcionalidades

1. **listDriver()**
   - Retorna a lista de todos os pilotos da Fórmula 1.

2. **listTeam()**
   - Retorna a lista de todas as equipes da Fórmula 1.

3. **bestDriver()**
   - Determina o melhor piloto com base em critérios como títulos e aceleração.

4. **mostTitle()**
   - Retorna o piloto com o maior número de títulos.

5. **mostAceleration()**
   - Retorna o piloto com a melhor aceleração.

## ⏳ Pendências

Atualmente, o objetivo do projeto foi completamente alcançado. Todas as funcionalidades foram implementadas conforme o escopo inicial, e o código está completo, sem pendências a serem resolvidas.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Clone o seu fork para sua máquina ( `git clone https://github.com/nome_usuario/NodeJs-DIO-ProjectsCourseNodeJs` ).
3. Crie uma branch para sua feature ou correção de bug ( `git checkout -b <nome-da-nova-ramificacao>` ).
4. Commit suas alterações ( `git commit -m 'Mensagem desejada'` ).
5. Push para a branch ( `git push origin <nome-da-branch-criada>` ).
6. Abra um Pull Request.
7. Aguarde à análise.

## 💡 Informações adicionais

- Utilização de boas práticas de desenvolvimento
- Código organizado em diferentes camadas: controladores, rotas e modelos
- A API foi testada com ferramentas como Postman e Insomnia

## 🔓 Licença

Este projeto está licenciado sob a Licença MIT.

## 🏁 Conclusão

Este projeto foi uma excelente oportunidade para praticar a construção de APIs com Fastify, reforçando conceitos de TypeScript e integração com banco de dados. A estrutura de um ambiente de corrida de Fórmula 1 foi implementada para simular condições reais de consulta de dados.

💻 "Na programação, a única linha que você não pode mudar é a que você não escreveu ainda!" 👨‍💻
