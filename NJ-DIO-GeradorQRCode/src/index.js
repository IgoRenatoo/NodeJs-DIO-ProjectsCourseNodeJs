import prompt from "prompt";
import { promptMain } from './prompts/promptMain.js'
import { createQrCode } from './services/QRcode/createQrCode.js';

(async function main() {
  prompt.get(promptMain, (err, result) => createQrCode(result));
  prompt.start();  
})()