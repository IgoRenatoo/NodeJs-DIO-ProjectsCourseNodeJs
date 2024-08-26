import Fastify from 'fastify';
import { server } from './routers/get-routers';

export const fastify = Fastify({logger: true})

fastify.register(server)

fastify.listen({port: 3000}, () => fastify.log.info(`Servidor Conectado!`));