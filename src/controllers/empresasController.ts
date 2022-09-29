import { Request, Response } from 'express';
import * as empresaService from '../service/empresasService.js';

export async function create(req: Request, res: Response) {
  const empresa = req.body;
  await empresaService.create(empresa);
  res.sendStatus(201);
}
