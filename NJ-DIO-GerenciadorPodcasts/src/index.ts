import http from "http";
import "dotenv/config";
import { listEpisodes } from "./controllers/pull-episodes-controller";

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const episodes = await listEpisodes();
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end( JSON.stringify(episodes))
})



server.listen(process.env.PORT,() => console.log(`Servidor conectado na porta: ${process.env.PORT}!`));