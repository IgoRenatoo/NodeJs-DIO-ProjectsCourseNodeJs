import { fastify } from '../index';
import { f1Teams } from './../database/teams-database';
import { f1Drivers } from '../database/drivers-database';
import { bestDriver } from '../controllers/best-driver-controller';
import { mostTitle } from '../controllers/most-titles-controller';
import { mostAceleration } from '../controllers/most-aceleration-controller';

export async function server(){
  fastify.get('/', (req, res) => {
    res.type('application/json').code(200)
    return "Bem vindo a API da Formula 1, Comandos válidos: \n /listdriver \n /listteam";
  })
  fastify.get('/listdriver', (req, res) => {
    res.type('application/json').code(200)
    return f1Drivers;
  })
  fastify.get('/listteam', (req, res) => {
    res.type('application/json').code(200)
    return f1Teams;
  })
  fastify.get('/bestdriver', (req, res) => {
    res.type('application/json').code(200)
    return bestDriver(f1Drivers)
  })
  fastify.get('/mosttitle', (req, res) => {
    res.type('application/json').code(200)
    return mostTitle(f1Drivers);
  })
  fastify.get('/topdriveraceleration', (req, res) => {
    res.type('application/json').code(200)
    return mostAceleration(f1Drivers);
  })
}