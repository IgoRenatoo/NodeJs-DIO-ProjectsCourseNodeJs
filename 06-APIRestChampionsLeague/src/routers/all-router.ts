import Router from 'express';

// GET
import { getAllClub } from '../services/get-club-service';
import { getHome, getPlayerById, getAllPlayer } from '../services/get-player-service';

// POST
import { addPlayer } from '../services/post-player-service';

// PATCH
import { changePlayerById } from '../services/patch-player-service';

// DELETE
import { deletePlayerById } from '../services/delete-player-service';

const router = Router();

export function server(){
  /* GET - Pegar */
  router.get('/', getHome)
  router.get('/player', getPlayerById)
  router.get('/player/list', getAllPlayer)
  router.get('/clubs/list', getAllClub)

  /* POST - Adicionar */
  router.post('/player', addPlayer)
  
  /* PATCH - Alterar */
  router.patch('/player', changePlayerById)
  
  /* DELETE - Deletar */
  router.delete('/player', deletePlayerById)

  return router
}