import * as empresasRepository from '../repositories/empresasRepository.js';
import empresaDate from '../repositories/empresasRepository.js';
import * as responsaveisRepository from '../repositories/responsaveisRepository.js';
import responsavelDate from '../repositories/responsaveisRepository.js';

export async function create(
  empresa: empresaDate,
  responsavel: responsavelDate,
) {
  await empresasRepository.create(empresa);
  const { id: empresaId } = await empresasRepository.findByCNPJ(empresa.cnpj);

  await responsaveisRepository.create(responsavel);
  const { id: responsavelId } = await responsaveisRepository.findByCEP(
    responsavel.cep,
  );

  await responsaveisRepository.createPrincipalResponsavelEmpresa(
    responsavelId,
    empresaId,
  );

  return;
}

export async function get() {
  const empresas = await empresasRepository.get();
  return empresas;
}
