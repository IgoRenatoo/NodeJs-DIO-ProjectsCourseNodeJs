import path from "path";
import fs from "fs";
import { Episode } from "../models/episodes-models"

const pathData = path.join(__dirname, "../database/list-episodes.md")

// Lista com todos episódios.
export const pullEpisodesList = async (): Promise<Episode[]> => await JSON.parse(fs.readFileSync(pathData, "utf-8")) as Episode[];

// Listar os episódio do maior número de views para o menor
export const filterEpisodesByCorporation = async (): Promise<Episode[]> => {
  const episodes: Episode[] = await pullEpisodesList();
  const corp = "flow";
  return episodes.filter((episode) => episode.corporation == corp);
}
// Listar os episódio por corporação
export const sortedEpisodesByViews = async (): Promise<Episode[]> => {
  const episodes: Episode[] = await pullEpisodesList();
  return episodes.sort((a, b) => b.views - a.views);
}
// Seleciona o episódio com maior número de views
export const mostViewedEpisode = async (): Promise<Episode> => {
  const episodes: Episode[] = await pullEpisodesList();
  return episodes.reduce((max, episode) => episode.views > max.views ? episode : max, episodes[8]);
}