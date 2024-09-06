import {Request, Response} from 'express';
import { playerById } from '../controllers/player-controller';

export const getPlayerById = ( req: Request, res: Response) => {
  const id: number = Number(req.query.id as string);
  
  !isNaN(id) && (req.query.id as string).trim() !== ''
    ? res.status(200).send(playerById(id as number))
    : res.status(400).send('Digite um número válido!');
  };