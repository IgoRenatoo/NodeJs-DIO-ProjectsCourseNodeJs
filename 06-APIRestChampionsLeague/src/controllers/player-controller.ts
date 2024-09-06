import { club } from '../database/club-database'

export function playerById(selectId: number){
  for(let a = 0; a < club.length; a++){
    for(let b = 0; b < club[a].jogadores.length; b++ )
    if(club[a].jogadores[b].id == selectId){
      return club[a].jogadores[b] as Jogador;
    }    
  }  
  return `Jogador de ID: ${selectId} não foi localizado!`
}