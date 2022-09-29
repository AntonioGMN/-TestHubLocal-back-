import connection from '../database.js';

export default interface empresaDate {
  nome: string;
  cnpj: string;
  descricao: string;
}

export async function create(empresa: empresaDate) {
  const { nome, cnpj, descricao } = empresa;
  await connection.query(
    `INSERT INTO empresas (nome, CNPJ, descricao) VALUES ($1, $2, $3)`,
    [nome, cnpj, descricao],
  );
  return;
}
