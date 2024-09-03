import http from "http";
import { app } from "./views/app-view"
import "dotenv/config";

const server = http.createServer(app)

server.listen(process.env.PORT,() => console.log(`Servidor conectado na porta: ${process.env.PORT}!`));