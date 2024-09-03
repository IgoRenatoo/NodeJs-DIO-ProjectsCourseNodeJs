# 🛒 Projeto Carrinho de Compras

## 📜 Descrição do Projeto

Este projeto é uma aplicação de carrinho de compras que permite adicionar, calcular, remover e deletar itens do carrinho. Desenvolvido para demonstrar a integração entre funções de manipulação de carrinho e operações assíncronas em JavaScript.

## ⚙️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Node.js
- Módulos ES (ESM)
- Async/Await

## 🧩 Funcionalidades

1. **createProduct(myCart, name, price, quantity)**
   - Adiciona um produto ao carrinho com um nome, preço, quantidade e um ID único gerado automaticamente.

2. **calculateTotal(myCart)**
   - Calcula o valor total de todos os itens no carrinho.

3. **removeHigherValue(myCart)**
   - Remove o item mais caro do carrinho.

4. **removeItemId(myCart, selectID)**
   - Remove um item do carrinho com base no ID fornecido.

5. **deleteItem(myCart)**
   - Deleta todos os itens do carrinho e retorna uma mensagem indicando que o carrinho está zerado.

## 🛠️ Pré-requisitos de Habilidades

- Conhecimento básico de JavaScript e suas funcionalidades assíncronas.
- Experiência com módulos ES e importação/exportação de funções.
- Compreensão dos conceitos de arrays e manipulação de dados em JavaScript.

## 🎯 Habilidade Adquirida

- Desenvolvimento de funções para manipulação de dados em um carrinho de compras.
- Utilização de operações assíncronas para processamento de dados em tempo real.
- Implementação de lógica para gerenciamento de estado e cálculos em uma aplicação JavaScript.

## 📂 Estrutura do Projeto

O projeto é estruturado da seguinte forma:

- **`/src`**
  - **`/services`**
    - `cart-service.js`: Contém as funções para criar produtos, calcular o total e manipular o carrinho.
  - `index.js`: Executa as operações no carrinho e exibe os resultados no console.

## 🏁 Conclusão

Este projeto demonstrou a capacidade de criar, manipular e gerenciar um carrinho de compras utilizando JavaScript moderno e técnicas assíncronas. As funcionalidades implementadas fornecem uma base sólida para expandir o projeto, adicionar novas funcionalidades e integrá-lo em aplicações maiores.