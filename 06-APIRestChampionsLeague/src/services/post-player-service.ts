import {Request, Response} from 'express';
import { postPlayer } from '../controllers/post-player-controller';

export const addPlayer = () => console.log(postPlayer());