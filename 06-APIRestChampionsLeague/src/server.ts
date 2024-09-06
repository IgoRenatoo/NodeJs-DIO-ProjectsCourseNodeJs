import express from 'express';
import 'dotenv/config';
import { server } from './routers/get-router'

export const app = express()

app.use('/api', server())

app.listen(process.env.PORT, () => console.log('Servidor Conectado!'))