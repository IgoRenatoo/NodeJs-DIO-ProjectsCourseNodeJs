import {Request, Response} from 'express';
import { changePlayer } from '../controllers/patch-player-controller';

// PATCH - Metodo para alterar jogador por ID e enviar a req ao controller.
export const changePlayerById = () => console.log(changePlayer())