const character = { // Cada personagem tem 12 pontos distribuidos em seus atributos.
  mario: {
    nome: 'Mario',
    velocidade: 4,
    manobra: 3,
    poder: 2,
    sorte: 3,
    ponto: 0
  },
  peach: {
    nome: 'Peach',
    velocidade: 4,
    manobra: 4,
    poder: 2,
    sorte: 2,
    ponto: 0
  },
  yoshi: {
    none: 'Yoshi',
    velocidade: 3,
    manobra: 3,
    poder: 3,
    sorte: 3,
    ponto: 0
  },
  bowser: {
    nome: 'The Boss - Bowser',
    velocidade: 5,
    manobra: 2,
    poder: 4,
    sorte: 1,
    ponto: 0
  },
  luigi: {
    nome: 'Talarico Luigi',
    velocidade: 2,
    manobra: 5,
    poder: 4,
    sorte: 1,
    ponto: 0
  },
  kong: {
    nome: 'Donkey Kong',
    velocidade: 3,
    manobra: 2,
    poder: 4,
    sorte: 3,
    ponto: 0
  },
}
// Função para simular um dado, retornando um número de 1 a 6.
async function RollDice() {
  return Math.floor(Math.random() * 6) + 1; // Gera um número de 1 a 6 simulando um dado.
}
// Função para definir o tipo de pista e armazenar dentro de um objeto.
async function getTrack() {
  let infoTrack = {}; // Criação do objeto vazio.
  let idTrack = Math.floor(Math.random() * 4) + 1; // Gera um número de 1 a 4 para definir ID da pista.
  let typeTrack; // Criação de uma variável indefinida.
  switch (true) { // Estrutura condicional para definir tipo da pista.
    case idTrack == 1:
      typeTrack = 'Velocidade';
      break;
    case idTrack == 2:
      typeTrack = 'Manobra';
      break;
    case idTrack == 3:
      typeTrack = 'Duelo';
      break;
    default:
      typeTrack = 'Sorte';
      break;
  }
  // Adicionado conteúdo ao objeto com adição do operador de espalhamento '...obj'.
  infoTrack = {
    ...infoTrack,
     idTrack: idTrack,
     typeTrack: typeTrack
  }
  // Retorno do objeto com os parâmetros desejados.
  return infoTrack;
}
// Função para selecionar 2 personagens manualmente.
async function getCharacter() {
  let player = [null,
    character.mario, // .<seu personagem> Seleciona o personagem do Player 1.
    character.bowser // .<seu personagem> Seleciona o personagem do Player 2.
  ]
  return player;
}
// Função para iniciar a corrida!
async function start() {
  let player = await getCharacter(); // Chama as caracteristicas dos personagens
  console.log(`\n\n ⚡ Corrida entre ${player[1].nome} e ${player[2].nome} está começandoo!!!\n\n`)
  for (let i = 1; i < 6; i++) { // Estrutura de repetição das voltas da corrida
    let infoTrack = await getTrack()
    console.log(`☠️  Volta de número ${i}, tipo de pista: ${infoTrack.typeTrack} `)
    if (infoTrack.idTrack == 1) { // Estrutura condicional de pista de velocidade.
      if (player[1].velocidade + await RollDice() >= player[2].velocidade + await RollDice()) {
        player[1].ponto++
        console.log(`Nessa volta o ${player[1].nome} ficou na frente do ${player[2].nome}, portando marcou +1 ponto! \n`)
      } else {
        player[2].ponto++
        console.log(`Nessa volta o ${player[2].nome} ficou na frente do ${player[1].nome}, portando marcou +1 ponto! \n`)
      }
    }
    if (infoTrack.idTrack == 2) { // Estrutura condicional de pista de manobra.
      if (player[1].manobra + await RollDice() >= player[2].manobra + await RollDice()) {1
        player[1].ponto++
        console.log(`Nessa volta o ${player[1].nome} derrapou mais que o ${player[2].nome}, portando marcou +1 ponto! \n`)
      } else {
        player[2].ponto++
        console.log(`Nessa volta o ${player[2].nome} derrapou mais que o ${player[1].nome}, portando marcou +1 ponto! \n`)
      }
    }
    if (infoTrack.idTrack == 3) { // Estrutura condicional de pista de poder.
      if (player[1].poder + await RollDice() > player[2].poder + await RollDice()) {
        player[1].ponto++
        console.log(`Nessa volta o ${player[1].nome} derrotou o ${player[2].nome} com seu poder, portando marcou +1 ponto! \n`)
      } else {
        player[2].ponto++
        console.log(`Nessa volta o ${player[2].nome} derrotou o ${player[1].nome} com seu poder, portando marcou +1 ponto! \n`)
      }
    }
    if (infoTrack.idTrack == 4) { // Estrutura condicional de pista de sorte.
      if (player[1].sorte + await RollDice() > player[2].sorte + await RollDice()) {
        player[1].ponto++
        console.log(`Nessa volta o ${player[1].nome} teve mais sorte que ${player[2].nome}, portando marcou +1 ponto! \n`)
      } else {
        player[2].ponto++
        console.log(`Nessa volta o ${player[2].nome} teve mais sorte que ${player[1].nome}, portando marcou +1 ponto! \n`)
      }
    }
  } console.log(` ⚡ Pontuação final - ${player[1].nome}: ${player[1].ponto}, ${player[2].nome}: ${player[2].ponto} `)
}
start();