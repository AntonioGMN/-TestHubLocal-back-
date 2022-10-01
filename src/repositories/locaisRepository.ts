import connection from '../database.js';

export default interface localDate {
  nome: string;
  cep: string;
  empresaId: number;
}

export async function create(local: localDate) {
  const { nome, cep, empresaId } = local;
  const response = await connection.query(
    `INSERT INTO locais (nome, cep, empresaId) VALUES ($1, $2, $3)`,
    [nome, cep, empresaId],
  );
  return;
}

export async function findByCEP(cep: string) {
  const response = await connection.query(`SELECT * FROM locais WHERE CEP=$1`, [
    cep,
  ]);
  return response.rows[0];
}

export async function createPrincipalResponsavelLocal(
  responsavelId: number,
  empresaId: number,
) {
  const response = await connection.query(
    `INSERT INTO responsaveisLocais (responsavelId, empresaId, principal) VALUES ($1, $2, $3)`,
    [responsavelId, empresaId, true],
  );
  return;
}
