import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { unauthorized } from '../utils/errorUtils.js';

export default async function validateToken(
  req: Request,
  res: Response,
  nest: NextFunction,
) {
  const { authorization } = req.headers;
  if (!authorization) throw unauthorized('Erro com authorization header');

  const token = authorization?.replace('Bearer ', '');
  if (!token) throw unauthorized('Falta o token');

  try {
    const chaveSecreta = process.env.JWT_SECRET;
    const { userId } = jwt.verify(token, chaveSecreta);
    res.locals.userId = userId;
  } catch {
    return res.status(401).send('invalide token');
  }

  return nest();
}
