import prompt from "prompt";
import { promptQrCode } from "../../prompts/promptQrCode.js";
import { handlerQrCode } from "./handlerQrCode.js"

export async function createQrCode(x){
  prompt.get(promptQrCode, handlerQrCode);  
}