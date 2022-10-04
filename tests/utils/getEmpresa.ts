import { faker } from '@faker-js/faker';

import * as empresaRepository from '../../src/repositories/empresasRepository.js';

export default async function getEmpresa() {
  const empresa = {
    nome: faker.name.firstName(),
    cnpj: faker.address.buildingNumber(),
    descricao: 'é boa',
  };

  await empresaRepository.create(empresa);
  const createdEmpresa = await empresaRepository.findByCNPJ(empresa.cnpj);

  return createdEmpresa;
}
