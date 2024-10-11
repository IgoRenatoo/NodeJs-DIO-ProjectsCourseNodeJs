import {Request, Response} from 'express';
import { club } from '../database/club-database';
import { playerById, allPlayer } from '../controllers/get-player-controller';

// GET - Metodo para retorna o DB completo, return controller.
export const getHome = (req: Request, res: Response) => res.status(200).send(club)

// GET - Metodo para solicita um jogador por ID e enviar a req ao controller.
export const getPlayerById = ( req: Request, res: Response) => {
  const id: number = Number(req.query.id as string);
  
  !isNaN(id) && (req.query.id as string).trim() !== ''
    ? res.status(200).send(playerById(id as number))
    : res.status(400).send('Digite um número válido!');
  };

// GET - Metodo para pegar todos os jogadores, return controller.
  export const getAllPlayer = (req: Request, res: Response) => {
    res.status(200).send(allPlayer())
  }