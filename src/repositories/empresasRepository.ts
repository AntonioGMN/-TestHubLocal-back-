import connection from '../database.js';

export default interface empresaDate {
  nome: string;
  cnpj: string;
  descricao: string;
}

export async function create(empresa: empresaDate) {
  const { nome, cnpj, descricao } = empresa;
  const response = await connection.query(
    `INSERT INTO empresas (nome, CNPJ, descricao) VALUES ($1, $2, $3)`,
    [nome, cnpj, descricao],
  );
  return;
}

export async function findByCNPJ(cnpj: string) {
  const response = await connection.query(
    `SELECT * FROM empresas WHERE cnpj=$1`,
    [cnpj],
  );
  return response.rows[0];
}

export async function get() {
  const response = await connection.query(
    //`SELECT * FROM empresas`,
    `SELECT empresas.nome as "empresaNome", * FROM empresas
    JOIN responsaveisEmpresas ON empresas.id=responsaveisEmpresas.empresaId
    JOIN responsaveis ON responsaveis.id=responsaveisEmpresas.responsavelId`,
  );
  return response.rows;
}
