import {Request, Response} from 'express';
import { deletePlayer } from '../controllers/delete-player-controller';

export const deletePlayerById = () => console.log(deletePlayer())