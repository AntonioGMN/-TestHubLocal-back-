import connection from '../database.js';

export default interface responsavelDate {
  nome: string;
  telefone: string;
  cep: string;
}

export async function create(responsavel: responsavelDate) {
  const { nome, telefone, cep } = responsavel;
  const response = await connection.query(
    `INSERT INTO responsaveis (nome, telefone, cep) VALUES ($1, $2, $3)`,
    [nome, telefone, cep],
  );
  return;
}

export async function findByCEP(cep: string) {
  const response = await connection.query(
    `SELECT * FROM responsaveis WHERE CEP=$1`,
    [cep],
  );
  return response.rows[0];
}

export async function createPrincipalResponsavelEmpresa(
  responsavelId: number,
  empresaId: number,
) {
  const response = await connection.query(
    `INSERT INTO responsaveisEmpresas (responsavelId, empresaId, principal) VALUES ($1, $2, $3)`,
    [responsavelId, empresaId, true],
  );
  return;
}

export async function createPrincipalResponsavelLocal(
  responsavelId: number,
  localId: number,
) {
  const response = await connection.query(
    `INSERT INTO responsaveisLocais (responsavelId, localId, principal) VALUES ($1, $2, $3)`,
    [responsavelId, localId, true],
  );
  return;
}
