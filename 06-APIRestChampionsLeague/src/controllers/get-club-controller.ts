import { club } from '../database/club-database'

export function getClub(){
  const clubs: string[] = [];
  for(let i = 0; i < club.length; i++){
    clubs.push(club[i].nome as string)
  }
  return clubs;
}