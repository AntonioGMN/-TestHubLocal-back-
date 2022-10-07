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

export async function get() {
  const response = await connection.query(`
  SELECT t.*, l.nome as local, l.cep, e.nome as "empresaResponsavel", 
  uc.name as "criador", u.name as "usuarioNome"  FROM tickets t 
  JOIN users uc ON t.criadorId=uc.id 
  JOIN users u ON t.usuarioId=u.id
  JOIN locais l ON t.localId=l.id 
  JOIN empresas e ON l.empresaId=e.id`);
  return response.rows;
}

export async function getByLocalId(localId: number) {
  const response = await connection.query(
    `
  SELECT * from tickets WHERE localId=$1`,
    [localId],
  );
  return response.rows;
}

export async function update(titulo: string, ticketId: string) {
  await connection.query(
    `UPDATE tickets SET titulo=$1, dataAtualizacao=current_timestamp WHERE id=$2`,
    [titulo, ticketId],
  );
  return;
}
