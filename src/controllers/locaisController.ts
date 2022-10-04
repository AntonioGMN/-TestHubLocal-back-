import { Request, Response } from 'express';
import * as locaisService from '../service/locaisService.js';

export async function create(req: Request, res: Response) {
  const { local, responsavel } = req.body;
  await locaisService.create(local, responsavel);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const locais = await locaisService.get();
  res.send(locais).status(200);
}
