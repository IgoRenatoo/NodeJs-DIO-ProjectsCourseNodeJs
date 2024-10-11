import { club } from '../database/club-database'

// GET - Retorna um array com todos os clubes.
export function getClub(){
  const clubs: string[] = [];
  for(let i = 0; i < club.length; i++){
    clubs.push(club[i].nome as string)
  }
  return clubs;
}