import { Request, Response } from 'express';
import * as empresasService from '../service/empresasService.js';

export async function create(req: Request, res: Response) {
  const { empresa, responsavel } = req.body;
  await empresasService.create(empresa, responsavel);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const empresas = await empresasService.get();
  res.send(empresas);
}
