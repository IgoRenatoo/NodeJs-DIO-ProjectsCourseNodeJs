import { f1Drivers } from '../database/drivers-database';
import { Driver } from '../models/interface-models';

export async function mostTitle(driver: Driver[]){
  return driver.reduce((Champion, Driver) => {
    if(Champion.titles > Driver.titles){
      return Champion
    }else{
      return Driver
    }
  })
}