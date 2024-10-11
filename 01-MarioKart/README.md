# 🚗 Desafio de Projeto Desenvolvimento NodeJs: Mario KartJS

<p align="center">
<img src="./src/docs/header.gif" alt="Mario Kart" width="200">
</p>

## 💻 Descrição do Projeto

Este projeto visa criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas da série de jogos desenvolvida e publicada pela Nintendo. O objetivo é implementar uma competição divertida entre personagens icônicos, utilizando JavaScript e conceitos de programação.

> **Colaboração:** Not found  
> **Status:** <span> Concluído </span> ✔️

## 📜 Índice

- [Descrição](#-descrição-do-projeto)
- [Conceitos Aprendidos](#-conceitos-aprendidos)
- [Tecnologias Utilizadas](#--tecnologias-utilizadas)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Funcionalidades](#-funcionalidades)
- [Personagens](#-personagens)
- [Regras e Mecânicas](#-regras-e-mecânicas)
- [Pendências](#-pendências)
- [Contribuição](#-contribuição)
- [Conclusão](#-conclusão)
- [Informações Adicionais](#-informações-adicionais)
- [Licença](#-licença)

## ✅ Conceitos Aprendidos 

- Implementação de lógica de jogos utilizando JavaScript.
- Aplicação de estruturas de dados em uma simulação de corrida.
- Manipulação de dados para simular pontuação e eventos aleatórios.
- Uso de funções para gerenciar interações entre personagens e pistas.

## 🛠 Tecnologias Utilizadas

![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## ⚙ Instalação

Para começar a usar este projeto, siga as etapas abaixo:

1. Faça um fork do repositório:
   <pre>git fork https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs.git</pre>

2. Clone o seu fork para sua máquina:
   <pre>git clone https://github.com/IgoRenatoo/NodeJs-DIO-ProjectsCourseNodeJs.git</pre>

3. Acesse o diretório do projeto:
   <pre>cd NodeJs-DIO-ProjectsCourseNodeJs</pre>

4. Acesse a pasta do projeto:
   <pre>cd 01-MarioKart</pre>

5. Instale as dependências:
   <pre>npm install</pre>

## 🚀 Uso 

Para usar o projeto, você pode executar o seguinte comando no terminal de sua preferência:
1. Execute o comando `node src/index.js` para iniciar o jogo.
2. Siga as instruções no console para selecionar os personagens e começar a corrida.

## 🧩 Funcionalidades

1. **`RollDice()`**
   - Simula o lançamento de um dado, retornando um número aleatório entre 1 e 6.

2. **`getTrack()`**
   - Define o tipo de pista para cada volta da corrida, podendo ser: Velocidade, Manobra, Duelo (Poder) ou Sorte.

3. **`getCharacter()`**
   - Seleciona dois personagens para competir de forma manual.

4. **`start()`**
   - Inicia a corrida, composta por cinco voltas, onde os personagens competem de acordo com as regras definidas.

## 🤖 Personagens
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

## 🕹️ Regras e Mecânicas

**Jogadores:**

- O Computador deve receber dois personagens para disputar a corrida, cada um representado por um objeto.

**Pistas:**

- Os personagens irão correr em uma pista aleatória de 5 rodadas.
- A cada rodada, será sorteado um bloco da pista, que pode ser uma reta, curva ou confronto:
  - **Reta:** O jogador deve jogar um dado de 6 lados e somar o atributo `Velocidade`. Quem tiver a maior soma ganha um ponto.
  - **Curva:** O jogador deve jogar um dado de 6 lados e somar o atributo `Manobrabilidade`. Quem tiver a maior soma ganha um ponto.
  - **Confronto:** O jogador deve jogar um dado de 6 lados e somar o atributo `Poder`. Quem perder, perde um ponto.
- Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).

> Condição de Vitória: Ao final, vence quem acumulou mais pontos.

## ⏳ Pendências

Atualmente o código está completo.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Clone o seu fork para sua máquina ( `git clone https://github.com/user_name/nome_do_repositório` ).
3. Crie uma branch para sua feature ou correção de bug ( `git checkout -b <nome-da-nova-ramificacao>` ).
4. Commit suas alterações ( `git commit -m 'Mensagem desejada'` ).
5. Push para a branch ( `git push origin <nome-da-branch-criada>` ).
6. Abra um Pull Request.
7. Aguarde à análise.

## 💡 Informações adicionais

- Este projeto é uma ótima maneira de entender a lógica de jogos e desenvolver habilidades em JavaScript.
- Sinta-se à vontade para adicionar mais personagens e tipos de pistas!

## 🔓 Licença

Este projeto está licenciado sob a Licença MIT.

## 🏁 Conclusão

O projeto Mario KartJS é uma excelente demonstração da implementação de um jogo simples utilizando JavaScript. Os conceitos de lógica de programação e manipulação de dados foram aplicados para criar uma experiência interativa de corrida.

😄 "Por que os programadores preferem a natureza? Porque ela tem mais árvores e menos bugs!" 🌳
