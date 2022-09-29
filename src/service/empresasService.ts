import * as empresasRepository from '../repositories/empresasRepository.js';
import empresaDate from '../repositories/empresasRepository.js';

export async function create(empresa: empresaDate) {
  await empresasRepository.create(empresa);

  return;
}
