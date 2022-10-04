// import * as responsaveisRepository from '../repositories/responsaveisRepository.js';
// import responsavelDate from '../repositories/responsaveisRepository.js';

import * as locaisRepository from '../repositories/locaisRepository.js';
// import localDate from '../repositories/locaisRepository.js';

import * as ticketsRepository from '../repositories/ticketsRepository.js';
import ticketDate from '../repositories/ticketsRepository';

import { v4 as uuid } from 'uuid';

export async function create(
  criadorId: number,
  usuarioId: number,
  status: string,
  localId: number,
) {
  const id = uuid();
  const { nome: localNome } = await locaisRepository.findById(localId);
  const titulo = `${id} ${localNome}}`;
  console.log(criadorId, usuarioId, status, localId);

  await ticketsRepository.create({
    id,
    titulo,
    criadorId,
    usuarioId,
    status,
    localId,
  });

  return titulo;
}

export async function get() {
  const tickets = await ticketsRepository.get();
  return tickets;
}
