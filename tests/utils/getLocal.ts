import { faker } from '@faker-js/faker';

import * as localRepository from '../../src/repositories/locaisRepository.js';
import getEmpresa from './getEmpresa.js';

export default async function getLocal() {
  const empresa = await getEmpresa();
  const local = {
    nome: 'apartamento top',
    cep: '59061300',
    empresaId: empresa.id,
  };

  await localRepository.create(local);
  const createdLocal = await localRepository.findByCEP(local.cep);

  return createdLocal;
}
