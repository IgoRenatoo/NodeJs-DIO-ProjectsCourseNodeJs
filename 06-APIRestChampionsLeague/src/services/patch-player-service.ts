import {Request, Response} from 'express';
import { changePlayer } from '../controllers/patch-player-controller';

export const changePlayerById = () => console.log(changePlayer())