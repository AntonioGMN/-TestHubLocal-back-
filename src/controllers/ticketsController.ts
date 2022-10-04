import { Request, Response } from 'express';
import * as ticketsService from '../service/ticketsService.js';

export async function create(req: Request, res: Response) {
  const { usuarioId, status, localId } = req.body;
  const { userId: criadorId } = res.locals;
  console.log(criadorId);
  await ticketsService.create(criadorId, usuarioId, status, localId);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const tickets = await ticketsService.get();
  res.send(tickets).status(200);
}
