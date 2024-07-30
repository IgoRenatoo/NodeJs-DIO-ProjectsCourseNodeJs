import chalk from "chalk";
import { handlerBarcode } from "./handler.js"

export async function createBarcode(){  
  console.log(chalk.green(`Código pix gerado com sucesso, número: `) + chalk.red.bold(await handlerBarcode()))  
}