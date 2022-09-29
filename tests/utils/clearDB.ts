import connection from '../../src/database';

export default async function clearDb() {
  await connection.query('TRUnCATE TABLE users CASCADE');
  await connection.query('TRUnCATE TABLE sessoes');
  await connection.query('TRUnCATE TABLE empresas CASCADE');
  await connection.query('TRUnCATE TABLE responsaveis');
  await connection.query('TRUnCATE TABLE locais');
  await connection.query('TRUnCATE TABLE tickets');
  return;
}
