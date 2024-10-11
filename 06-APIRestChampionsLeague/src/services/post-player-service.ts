import {Request, Response} from 'express';
import { postPlayer } from '../controllers/post-player-controller';

// POST - Metodo para adicionar jogador, return controller.
export const addPlayer = () => console.log(postPlayer());