import { club } from '../database/club-database'

// GET - Seleciona o jogador especificado pelo Service.
export function playerById(selectId: number){
  for(let a = 0; a < club.length; a++){
    for(let b = 0; b < club[a].jogadores.length; b++ )
    if(club[a].jogadores[b].id == selectId){
      return club[a].jogadores[b] as Jogador;
    }    
  }  
  return `Jogador de ID: ${selectId} não foi localizado!`
}

// GET - Retorna um array com todos os jogadores.
export function allPlayer(){
  const players: Jogador[] = [];
  for(let a = 0; a < club.length; a++){
    for(let b = 0; b < club[a].jogadores.length; b++ ){
      players.push(club[a].jogadores[b])
    }
  }
  return players;
}