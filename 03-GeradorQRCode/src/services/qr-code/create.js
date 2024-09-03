import prompt from "prompt";
import { promptQrCode } from "../../prompts/prompt-QrCode.js";
import { handlerQrCode } from "./handler.js"

export async function createQrCode(){
  prompt.get(promptQrCode, handlerQrCode);  
}