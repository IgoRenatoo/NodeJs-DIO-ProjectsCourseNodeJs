import { Driver } from '../models/interface-models';

export async function mostAceleration(driver: Driver[]){
  return driver.reduce((topDriveAceleration, currentDriver) => {
    if(topDriveAceleration.stats.acceleration > currentDriver.stats.acceleration){
      return topDriveAceleration
    }else{
      return currentDriver
    }
  })
}