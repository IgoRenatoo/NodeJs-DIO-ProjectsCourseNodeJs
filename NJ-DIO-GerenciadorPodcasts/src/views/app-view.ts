import http from "http";
import { Routes } from "../models/routes-model"
import { httpMethod } from "../models/http-model";
import * as view from "../controllers/episodes-controller";

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const corp: string | undefined = req.url?.split("?p=")[1];
  if(req.method === httpMethod.GET && req.url == Routes.INIT) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Aí zezinho!")
  }
  else if(req.method === httpMethod.GET && req.url?.toLowerCase() === Routes.LIST) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end( JSON.stringify(await view.pullEpisodesList()) );
  }
  else if(req.method === httpMethod.GET && req.url?.toLowerCase() === Routes.SORTVIEW) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(await view.sortedEpisodesByViews()))
  }
  else if(req.method === httpMethod.GET && req.url?.toLowerCase() === Routes.CORPORATION+corp) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");    
    res.end(JSON.stringify(await view.filterEpisodesByCorporation(corp)))
  }
  else if(req.method === httpMethod.GET && req.url?.toLowerCase() === Routes.MOSTVIEW) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(await view.mostViewedEpisode()))
  }else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end("Aí deu burrái, volta!")
  }
}