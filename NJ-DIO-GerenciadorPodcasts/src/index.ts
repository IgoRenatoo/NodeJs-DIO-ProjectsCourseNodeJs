import http from "http";
import "dotenv/config";
import { pullEpisodesList, mostViewedEpisode, sortedEpisodesByViews, filterEpisodesByCorporation } from "./controllers/episodes-controller";

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
  if(req.method === "GET" && req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Aí zezinho!")
  }
  else if(req.method === "GET" && req.url?.toLowerCase() === "/completelist") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end( JSON.stringify(await pullEpisodesList()) );
  }
  else if(req.method === "GET" && req.url?.toLowerCase() === "/sortedviews") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(await sortedEpisodesByViews()))
  }
  else if(req.method === "GET" && req.url?.toLowerCase() === "/corporation") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(await filterEpisodesByCorporation()))
  }
  else if(req.method === "GET" && req.url?.toLowerCase() === "/mostviewed") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(await mostViewedEpisode()))
  }else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end("Aí deu burrái, volta!")
  }
})

server.listen(process.env.PORT,() => console.log(`Servidor conectado na porta: ${process.env.PORT}!`));