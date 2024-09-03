import { Driver } from "../models/interface-models";

export async function bestDriver(driver: Driver[]){
  let bestDriver: Driver[] = [];
  let mostMediaStats: number = 0;
  let message: string = '';
  for(let i = 0; i < driver.length; i++){
    let currentMediaStats: number = (
      driver[i].stats.acceleration +
      driver[i].stats.curve +
      driver[i].stats.driving +
      driver[i].stats.endurance +
      driver[i].stats.strength
    )/5;
    if(currentMediaStats > mostMediaStats){
      mostMediaStats = currentMediaStats
      bestDriver = [driver[i]]
      message = `O melhor motorista da atualiza é o ${driver[i].name}`
    }
  }
  return {bestDriver, message};
}
