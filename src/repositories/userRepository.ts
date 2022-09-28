import connection from '../database.js';

export default interface user {
  name: string;
  email: string;
  password: string;
}

export async function signUp(userDate: user) {
  const { name, email, password } = userDate;
  await connection.query(
    `INSERT INTO users(name, email, password) VALUES ($1, $2, $3)`,
    [name, email, password],
  );
  return;
}

export async function findByEmail(email: string) {
  const response = await connection.query(
    'SELECT * FROM users WHERE email=$1',
    [email],
  );
  return response.rows[0];
}
