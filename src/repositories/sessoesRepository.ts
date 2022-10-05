import connection from '../database.js';

export async function create(userId: number, token: string) {
  await connection.query(
    `INSERT INTO sessoes (userId, token) VALUES ($1, $2)`,
    [userId, token],
  );
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

export async function findByToken(token: string) {
  const response = await connection.query(
    'SELECT * FROM sessoes WHERE token=$1',
    [token],
  );
  return response.rows[0];
}
