import * as responsaveisRepository from '../repositories/responsaveisRepository.js';
import responsavelDate from '../repositories/responsaveisRepository.js';
import * as locaisRepository from '../repositories/locaisRepository.js';
import localDate from '../repositories/locaisRepository.js';
import * as ticketsService from './ticketsService.js';

export async function create(local: localDate, responsavel: responsavelDate) {
  await locaisRepository.create(local);
  const { id: localId } = await locaisRepository.findByCEP(local.cep);

  await responsaveisRepository.create(responsavel);
  const { id: responsavelId } = await responsaveisRepository.findByCEP(
    responsavel.cep,
  );

  await responsaveisRepository.createPrincipalResponsavelLocal(
    responsavelId,
    localId,
  );

  return;
}

export async function createResponsavel(
  responsavel: responsavelDate,
  localId: number,
) {
  await responsaveisRepository.create(responsavel);
  const { id: responsavelId } = await responsaveisRepository.findByCEP(
    responsavel.cep,
  );

  await responsaveisRepository.createResponsavelLocal(responsavelId, localId);

  return;
}

export async function get() {
  const empresas = await locaisRepository.get();
  return empresas;
}

export async function getResponsaveis(localId: number) {
  const responsaveis = await responsaveisRepository.getByLocalId(localId);
  return responsaveis;
}

export async function update(local: localDate, localId: number) {
  const localUpdated = await locaisRepository.update(local, localId);
  await ticketsService.update(local.nome, localId);

  return localUpdated;
}

export async function updateResponsavel(
  responsavel: responsavelDate,
  responsavelId: number,
) {
  await responsaveisRepository.update(responsavel, responsavelId);

  return;
}

export async function updatePrincipalResponsavel(
  responsavelId: number,
  localId: number,
) {
  const principal = await locaisRepository.getPrincipal(localId);

  await responsaveisRepository.setPrincipal(
    false,
    principal.responsavelid,
    localId,
  );
  await responsaveisRepository.setPrincipal(true, responsavelId, localId);

  return;
}
