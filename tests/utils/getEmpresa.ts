import { faker } from '@faker-js/faker';

import * as empresaRepository from '../../src/repositories/empresasRepository.js';

export default async function getEmpresa() {
  const empresa = {
    nome: 'netflix',
    cnpj: '987645',
    descricao: 'é boa',
  };

  await empresaRepository.create(empresa);
  const createdEmpresa = await empresaRepository.findByCNPJ(empresa.cnpj);

  return createdEmpresa;
}
