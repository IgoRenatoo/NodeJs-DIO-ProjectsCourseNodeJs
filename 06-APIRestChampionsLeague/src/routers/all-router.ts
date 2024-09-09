import Router from 'express';
import { getAllClub } from '../services/get-club-services';
import { getHome, getPlayerById, getAllPlayer } from '../services/get-player-services';

const router = Router();

export function server(){
  /* GET - Pegar */
  router.get('/', getHome)
  router.get('/player', getPlayerById)
  router.get('/player/list', getAllPlayer)
  router.get('/clubs/list', getAllClub)

  /* POST - Adicionar */
  router.post('/player', )
  
  /* PATCH - Alterar */
  router.patch('/player', )
  
  /* DELETE - Deletar */
  router.delete('/player', )

  return router
}