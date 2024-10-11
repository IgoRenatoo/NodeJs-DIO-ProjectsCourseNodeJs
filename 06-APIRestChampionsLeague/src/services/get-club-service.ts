import {Request, Response} from 'express';
import { getClub } from '../controllers/get-club-controller';

// GET - Metodo para pegar todos os clubs, return controller.
export const getAllClub = (req: Request, res: Response) => {
  res.status(200).send(getClub())
}