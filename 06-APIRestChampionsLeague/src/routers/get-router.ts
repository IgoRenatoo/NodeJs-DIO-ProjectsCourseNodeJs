import Router from 'express';
import { getPlayerById, getAllPlayer } from '../services/player-services';

const router = Router();

export function server(){
  /* GET - Pegar */
  router.get('/player', getPlayerById)
  router.get('/player/list', getAllPlayer)
  router.get('/clubs/list', )

  /* POST - Adicionar */
  router.post('/player', )
  
  /* PATCH - Alterar */
  router.patch('/player', )
  
  /* DELETE - Deletar */
  router.delete('/player', )

  return router
}