# 🚗 Desafio de projeto desenvoldimento NodeJs: Mario KartJS
<p align="center">
<img src="./src/docs/header.gif" alt="Mario Kart" width="200">
</p>

## 💻 Descrição do Projeto

- Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo

## 📚 Tecnologias Utilizadas

- JavaScript
- Lógica de Programação
- Conhecimento em Estruturas de Dados

## 🧩 Funcionalidades

1. **`RollDice()`**
   - Simula o lançamento de um dado, retornando um número aleatório entre 1 e 6. Este valor é usado para adicionar um fator de sorte nas competições.

2. **`getTrack()`**
   - Define o tipo de pista para cada volta da corrida. Existem quatro tipos possíveis:
     - **Velocidade**
     - **Manobra**
     - **Duelo (Poder)**
     - **Sorte**

3. **`getCharacter()`**
   - Seleciona dois personagens para competir de forma manual pelo `Array` player.

4. **`start()`**
   - Inicia a corrida, composta por cinco voltas. Em cada volta:
     - Um tipo de pista é definido.
     - Os personagens competem utilizando o atributo correspondente ao tipo de pista.
     - O personagem com o maior valor de atributo (incluindo o resultado do dado) ganha a volta e recebe um ponto.

## 🛠️ Pré-requisitos de Habilidades

- Conhecimento básico de JavaScript e suas funcionalidades assíncronas.
- Compreensão de lógica de programação e estruturas de dados.
- Experiência com operações básicas de manipulação de arrays e objetos.

## 🎯 Habilidade Adquirida

- Implementação de uma lógica de jogo interativa utilizando JavaScript.
- Aplicação de regras de programação e estruturas de dados para simular um jogo de corrida.
- Desenvolvimento de funcionalidades assíncronas e manipulação de dados para um sistema de pontuação e simulação de eventos.

## 📂 Estrutura do Projeto

- **`/src`**
  - **`/docs`**
    - Contém todos os GIFs utilizados no projeto.
  - `index.js`
    - Arquivo principal que executa a lógica do jogo e exibe os resultados no console.

## Personagens
<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./src/docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 4</p>
            <p>Manobrabilidade: 3</p>
            <p>Poder: 3</p>
        </td>
            <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./src/docs/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 2</p>
        </td>
            <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./src/docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./src/docs/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 5</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./src/docs/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 3</p>
            <p>Manobrabilidade: 4</p>
            <p>Poder: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./src/docs/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Velocidade: 2</p>
            <p>Manobrabilidade: 2</p>
            <p>Poder: 5</p>
        </td>
    </tr>
</table>
<br>

- **Velocidade**: Determina a rapidez do personagem.
- **Manobra**: Indica a capacidade do personagem de realizar curvas e manobras.
- **Poder**: Representa a força ou habilidades especiais do personagem.
- **Sorte**: Reflete a chance de eventos aleatórios favoráveis ao personagem.

### 🕹️ Regras e Mecânicas

**Jogadores:**

- O Computador deve receber dois personagens para disputar a corrida, cada um representado por um objeto.

**Pistas:**

- Os personagens irão correr em uma pista aleatória de 5 rodadas.
- A cada rodada, será sorteado um bloco da pista, que pode ser uma reta, curva ou confronto:
  - **Reta:** O jogador deve jogar um dado de 6 lados e somar o atributo `Velocidade`. Quem tiver a maior soma ganha um ponto.
  - **Curva:** O jogador deve jogar um dado de 6 lados e somar o atributo `Manobrabilidade`. Quem tiver a maior soma ganha um ponto.
  - **Confronto:** O jogador deve jogar um dado de 6 lados e somar o atributo `Poder`. Quem perder, perde um ponto.
- Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).

**Condição de Vitória:**

- Ao final, vence quem acumulou mais pontos.

## 🏁 Conclusão

Este projeto demonstrou a capacidade de criar uma simulação de corrida inspirada no Mario Kart utilizando JavaScript. A implementação das funcionalidades permite experimentar a lógica de jogos e desenvolver habilidades práticas em programação, manipulação de dados e criação de sistemas interativos. A estrutura e as regras estabelecidas proporcionam uma base sólida para futuras expansões e aprimoramentos no jogo.