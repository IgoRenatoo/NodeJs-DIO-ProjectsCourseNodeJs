import {Request, Response} from 'express';
import { getClub } from '../controllers/get-club-controller';

// GET - Pegar todos os clubs.
export const getAllClub = (req: Request, res: Response) => {
  res.status(200).send(getClub())
}