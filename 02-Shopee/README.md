# 🛒 Carrinho de Compras

## 💻 Descrição do projeto

Este projeto é uma aplicação de carrinho de compras que permite adicionar, calcular, remover e deletar itens de maneira simples e eficiente. O objetivo é demonstrar a manipulação de um carrinho de compras, utilizando funções em JavaScript e operações assíncronas. O projeto pode ser expandido para incluir novas funcionalidades e servir como base para um sistema de e-commerce.

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
- [Informações Adicionais](#-informações-adicionais)
- [Licença](#-licença)

## ✅ Conceitos Aprendidos 

- Manipulação de dados utilizando funções JavaScript.
- Implementação de operações assíncronas com async/await.
- Gerenciamento de estado em um sistema de carrinho de compras.
- Lógica de negócios para calcular e gerenciar produtos em um carrinho.

## 🛠 Tecnologias Utilizadas

![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ⚙ Instalação

Para começar a usar este projeto, siga as etapas abaixo:

1. Faça um fork do repositório:
   <pre>git fork https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs.git</pre>

2. Clone o seu fork para sua máquina:
   <pre>git clone https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs.git</pre>

3. Acesse o diretório do projeto:
   <pre>cd NodeJs-DIO-ProjectsCourseNodeJs</pre>

4. Acesse a pasta do projeto:
   <pre>cd 02-Shopee</pre>

5. Instale as dependências:
   <pre>npm install</pre>

## 🚀 Uso 
 
Para usar o projeto, siga os passos abaixo:

1. Execute o comando `npm run dev` no terminal de sua preferência.
2. Utilize um cliente HTTP (como Postman ou Insomnia) para interagir com as rotas disponíveis:

    > `GET /cart` - Retorna os itens no carrinho.

    > `POST /cart` - Adiciona um novo item ao carrinho.

    > `DELETE /cart/:id` - Remove um item do carrinho com base no ID.

## 🧩 Funcionalidades

1. **createProduct(myCart, name, price, quantity)**
   - Cria um novo produto e o adiciona ao carrinho, gerando um ID único automaticamente.

2. **calculateTotal(myCart)**
   - Calcula o total de todos os itens no carrinho.

3. **removeHigherValue(myCart)**
   - Remove o item mais caro do carrinho.

4. **removeItemId(myCart, selectID)**
   - Remove um item do carrinho com base no ID fornecido.

5. **deleteItem(myCart)**
   - Deleta todos os itens do carrinho e retorna uma mensagem indicando que o carrinho está zerado.

## ⏳ Pendências

Atualmente, o código está completo. Não há pendências.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Clone o seu fork para sua máquina (`git clone https://github.com/nome_usuario/NodeJs-DIO-ProjectsCourseNodeJs.git`).
3. Crie uma branch para sua feature ou correção de bug (`git checkout -b <nome-da-nova-ramificacao>`).
4. Commit suas alterações (`git commit -m 'Mensagem desejada'`).
5. Push para a branch (`git push origin <nome-da-branch-criada>`).
6. Abra um Pull Request.
7. Aguarde a análise.

## 💡 Informações adicionais

- Este projeto pode ser expandido com funcionalidades como login de usuário e integração com API de pagamento.
- Caso queira utilizar banco de dados, há suporte para MongoDB ou MySQL.

## 🔓 Licença

Este projeto está licenciado sob a Licença MIT.

## 🏁 Conclusão

Este projeto permitiu o aprendizado e a prática de manipulação de carrinho de compras utilizando JavaScript moderno. Além disso, o uso de funções assíncronas e a organização do código facilitaram a gestão do estado do carrinho, permitindo a execução de operações de maneira eficiente.

💻 "Programar é como montar um quebra-cabeça infinito... sempre falta uma peça! 🧩"
