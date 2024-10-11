import {Request, Response} from 'express';
import { deletePlayer } from '../controllers/delete-player-controller';

// Metodo para deletar jogador por ID e enviar a req ao controller
export const deletePlayerById = () => console.log(deletePlayer())