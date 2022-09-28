import connection from '../database.js';

export async function create(userId: number) {
  await connection.query(`INSERT INTO sessoes (userId) VALUES ($1)`, [userId]);
  return;
}

export async function logout(userId: number) {
  await connection.query(`DELETE FROM sessoes WHERE userId=$1`, [userId]);

  return;
}

export async function findByUserId(userId: number) {
  const response = await connection.query(
    'SELECT * FROM sessoes WHERE userId=$1',
    [userId],
  );
  return response.rows[0];
}
