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
  const titulo = `${id} ${localNome}`;

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

export async function update(titulo: string, localId: number) {
  const tickets = await ticketsRepository.getByLocalId(localId);

  tickets.forEach(async (t) => {
    const slitTitulo = t.titulo.split(' ');
    const newTitulo = `${slitTitulo[0]} ${titulo}`;
    await ticketsRepository.update(newTitulo, t.id);
  });
  return;
}
