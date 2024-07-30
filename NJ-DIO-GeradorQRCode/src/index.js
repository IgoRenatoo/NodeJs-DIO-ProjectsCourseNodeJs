import prompt from "prompt";
import { promptMain } from "./prompts/prompt-main.js"
import { createQrCode } from "./services/qr-code/create.js";
import { createBarcode } from "./services/barcode/create.js";

(async function main(){
  prompt.start();  
  prompt.get(promptMain, async (err, choose) => {
    if (err) console.log(err)
    if (choose.type == 1) await createQrCode();
    if (choose.type == 2) await createBarcode();
  });
})()