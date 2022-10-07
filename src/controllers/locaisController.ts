import { Request, response, Response } from 'express';
import * as locaisService from '../service/locaisService.js';

export async function create(req: Request, res: Response) {
  const { local, responsavel } = req.body;
  await locaisService.create(local, responsavel);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const locais = await locaisService.get();
  res.send(locais);
}

export async function getResponsaveis(req: Request, res: Response) {
  const { localId } = req.params;
  const responsaveis = await locaisService.getResponsaveis(parseInt(localId));
  res.send(responsaveis);
}

export async function createResponsavel(req: Request, res: Response) {
  const { localId, responsavel } = req.body;
  await locaisService.createResponsavel(responsavel, localId);
  res.sendStatus(201);
}

export async function update(req: Request, res: Response) {
  const { nome, cep, empresaId } = req.body;
  const { localId } = req.params;
  try {
    await locaisService.update({ nome, cep, empresaId }, +localId);
  } catch (err) {
    console.log(err);
  }
  res.sendStatus(200);
}
