import { faker } from '@faker-js/faker';

import * as localRepository from '../../src/repositories/locaisRepository.js';
import getEmpresa from './getEmpresa.js';

export default async function getLocal() {
  const empresa = await getEmpresa();
  const local = {
    nome: faker.name.firstName(),
    cep: faker.random.numeric(8),
    empresaId: empresa.id,
  };

  await localRepository.create(local);
  const createdLocal = await localRepository.findByCEP(local.cep);

  return createdLocal;
}
