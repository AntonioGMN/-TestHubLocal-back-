import connection from '../database.js';

export default interface ticketDate {
  id: string;
  titulo: string;
  criadorId: number;
  usuarioId: number;
  status: string;
  localId: number;
}

export async function create(ticket: ticketDate) {
  const { id, titulo, criadorId, usuarioId, status, localId } = ticket;
  await connection.query(
    `INSERT INTO tickets (id, titulo, criadorId, usuarioId, status, localId) 
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [id, titulo, criadorId, usuarioId, status, localId],
  );
  return;
}

// export async function findByCNPJ(cnpj: string) {
//   const response = await connection.query(
//     `SELECT * FROM empresas WHERE cnpj=$1`,
//     [cnpj],
//   );
//   return response.rows[0];
// }

export async function get() {
  const response = await connection.query(`SELECT * FROM tickets`);
  return response.rows;
}
