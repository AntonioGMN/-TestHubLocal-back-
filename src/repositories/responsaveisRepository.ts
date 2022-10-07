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
  await connection.query(
    `INSERT INTO responsaveisLocais (responsavelId, localId, principal) VALUES ($1, $2, $3)`,
    [responsavelId, localId, true],
  );
  return;
}

export async function createResponsavelLocal(
  responsavelId: number,
  localId: number,
) {
  await connection.query(
    `INSERT INTO responsaveisLocais (responsavelId, localId) VALUES ($1, $2)`,
    [responsavelId, localId],
  );
  return;
}

export async function getByLocalId(localId: number) {
  const response = await connection.query(
    `SELECT resp.*, resploc.principal from responsaveis resp
     JOIN responsaveisLocais respLoc ON resp.id=respLoc.responsavelId
     JOIN locais l ON  respLoc.localId=l.id
     WHERE l.id=$1
    `,
    [localId],
  );
  return response.rows;
}

export async function update(
  responsavel: responsavelDate,
  responsavelId: number,
) {
  const { nome, cep, telefone } = responsavel;
  await connection.query(
    `UPDATE responsaveis SET nome=$1, cep=$2, telefone=$3 WHERE id=$4`,
    [nome, cep, telefone, responsavelId],
  );
  return;
}
