import * as empresasRepository from '../repositories/empresasRepository.js';
import empresaDate from '../repositories/empresasRepository.js';
import * as responsaveisRepository from '../repositories/responsaveisRepository.js';
import responsavelDate from '../repositories/responsaveisRepository.js';

import * as locaisRepository from '../repositories/locaisRepository.js';
import localDate from '../repositories/locaisRepository.js';

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

// export async function get() {
//   const empresas = await empresasRepository.get();
//   return empresas;
// }
