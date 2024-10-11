# Projeto Champions League

## 💻 Descrição do projeto

Este projeto é uma aplicação back-end para gerenciamento de jogadores e clubes de uma liga de futebol, utilizando o framework Express. Ele inclui funcionalidades de CRUD para jogadores, com endpoints para criar, atualizar, deletar e listar jogadores e clubes. O objetivo é simular um sistema simples de controle de dados de uma liga de futebol.

> **Colaboração:** Not found  
> **Status:** <span> Em Desenvolvimento!</span> ❌


## 📜 Índice

- [Descrição](#-descrição-do-projeto)
- [Conceitos Aprendidos](#-conceitos-aprendidos)
- [Tecnologias Utilizadas](#--tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Pendências](#-pendências)
- [Contribuição](#-contribuição)
- [Informações Adicionais](#-informações-adicionais)
- [Licença](#-licença)
- [Conclusão](#-conclusão)

## ✅ Conceitos Aprendidos

- Implementação de CRUD (Create, Read, Update, Delete) com Node.js e Express.
- Estruturação de rotas com Express.
- Uso de middleware para tratamento de requisições.
- Integração de diferentes controladores para lidar com requisições HTTP.
- Configuração de variáveis de ambiente com dotenv.
- Uso de TypeScript em um projeto Node.js.

## 🛠 Tecnologias Utilizadas

![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Dotenv-4C8CC0?style=for-the-badge&logo=dotenv&logoColor=white)

## ⚙ Instalação

Para começar a usar este projeto, siga as etapas abaixo:

1. Faça um fork do repositório:
   <pre>git fork https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs.git</pre>

2. Clone o seu fork para sua maquína:
   <pre>git clone https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs.git</pre>

3. Acesse o diretório do projeto:
   <pre>cd NodeJs-DIO-ProjectsCourseNodeJs</pre>

4. Acesse a pasta do projeto:
   <pre>cd 06-APIRestChampionsLeague</pre>

5. Instale as dependências:
   <pre>npm install</pre>

6. O servidor estará disponível em `http://localhost:<porta-definida-no-.env>`.

## 🚀 Uso

Para usar o projeto, siga os passos:

1. Configure as variáveis de ambiente no arquivo `.env` com a porta desejada.
2. Execute o comando `.npm run dev` no terminal de sua preferência.
3. Utilize um cliente HTTP (como Postman ou Insomnia) para interagir com as rotas disponíveis:
   > `GET /api/`: retorna a página inicial.

   > `GET /api/player`: retorna um jogador específico.

   > `POST /api/player`: adiciona um novo jogador.

   > `PATCH /api/player`: atualiza as informações de um jogador.
   
   > `DELETE /api/player`: remove um jogador.

## 🧩 Funcionalidades

1. **getClub()**
   - Retorna os clubes contidos na League.

2. **playerById()**
   - Retorna os dados de um jogador específico com base no ID fornecido.

3. **allPlayer()**
   - Retorna uma lista completa de todos os jogadores registrados.

4. **postPlayer()**
   - Adiciona um novo jogador ao sistema.

5. **changePlayer()**
   - Atualiza as informações de um jogador específico.

6. **deletePlayer()**
   - Remove um jogador do sistema.

## ⏳ Pendências

Aqui estão algumas funcionalidades que ainda estão pendentes para serem implementadas:

- [ ] Deletar jogador por ID
- [ ] Alterar jogador por ID
- [ ] Melhorar a feature de adicionar jogador por ID

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Clone o seu fork para sua maquína ( `git clone https://github.com/user_name/nj-dio-championsleague` ).
3. Crie uma branch para sua feature ou correção de bug ( `git checkout -b <nome-da-nova-ramificacao>` ).
4. Commit suas alterações ( `git commit -m 'Mensagem desejada'` ).
5. Push para a branch ( `git push origin <nome-da-branch-criada>` ).
6. Abra um Pull Request.
7. Aguarde à análise.

## 💡 Informações adicionais

- Este projeto foi desenvolvido como parte do curso da DIO.
- Utilizado TypeScript e Express para implementação das rotas e serviços.
- A estrutura do projeto é modular, com serviços e controladores separados.

## 🔓 Licença

Este projeto está licenciado sob a Licença MIT.

## 🏁 Conclusão

Neste projeto, foram aplicados conceitos de desenvolvimento de back-end com Node.js, incluindo a organização de rotas e controle de dados. Foi interessante ver como a modularidade do código facilitou a manutenção e a escalabilidade.

> 🚀 "Programar é como cozinhar: você segue a receita, mas sempre acaba improvisando!" 🍲
