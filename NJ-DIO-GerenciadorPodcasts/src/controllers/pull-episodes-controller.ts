import path from "path";
import fs from "fs";

const pathData = path.join(__dirname, "../database/list-episodes.md")
export const listEpisodes = () => JSON.parse(fs.readFileSync(pathData, "utf-8"));