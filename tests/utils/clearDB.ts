import connection from '../../src/database';

export default async function clearDb() {
  await connection.query('TRUNCATE TABLE tickets CASCADE');
  await connection.query('TRUNCATE TABLE users CASCADE');
  await connection.query('TRUNCATE TABLE sessoes');
  await connection.query('TRUNCATE TABLE empresas CASCADE');
  await connection.query('TRUNCATE TABLE responsaveis CASCADE');
  await connection.query('TRUNCATE TABLE responsaveisLocais ');
  await connection.query('TRUNCATE TABLE responsaveisEmpresas ');
  await connection.query('TRUNCATE TABLE locais CASCADE');
  return;
}
