import connection from '../database.js';

export default interface localDate {
  nome: string;
  cep: string;
  empresaId: number;
}

export async function create(local: localDate) {
  const { nome, cep, empresaId } = local;
  await connection.query(
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

export async function findById(id: number) {
  const response = await connection.query(`SELECT * FROM locais WHERE id=$1`, [
    id,
  ]);
  return response.rows[0];
}

export async function get() {
  const response = await connection.query(
    `SELECT locais.*, empresas.nome as "empresaNome",
    responsaveis.nome as "responsavelNome", responsaveisLocais.principal FROM locais
    JOIN responsaveisLocais ON locais.id=responsaveisLocais.localId
    JOIN responsaveis ON responsaveis.id=responsaveisLocais.responsavelId
    JOIN empresas ON locais.empresaid=empresas.id
    `,
  );
  return response.rows;
}
