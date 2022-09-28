import * as userRepository from '../repositories/userRepository.js';
import * as sessoesRepository from '../repositories/sessoesRepository.js';
import user from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { forbidden, notFound, unauthorized } from '../utils/errorUtils.js';

interface loginDate {
  email: string;
  password: string;
}

export async function signUp(userDate: user) {
  const findedUser = await userRepository.findByEmail(userDate.email);
  console.log(findedUser);

  if (findedUser) {
    forbidden('esse usuário já está cadastrado');
  }

  const passwordHash = bcrypt.hashSync(userDate.password, 10);

  const hashUser = { ...userDate, password: passwordHash };
  await userRepository.signUp(hashUser);
  return;
}

export async function login(loginDate: loginDate) {
  const findedUser = await userRepository.findByEmail(loginDate.email);
  if (findedUser === undefined) {
    notFound('esse email do usuário não encontrado');
  }

  const hashPassword = findedUser.password;
  const validatePassword = bcrypt.compareSync(loginDate.password, hashPassword);
  if (!validatePassword) unauthorized('Password invalid');

  const sessao = await sessoesRepository.findByUserId(findedUser.id);
  console.log(sessao);
  if (sessao) unauthorized('Esse usuario já está logado');

  const secretKey = process.env.JWT_SECRET;
  const token = jwt.sign({ userId: findedUser.id }, secretKey, {
    expiresIn: 3600,
  });
  await sessoesRepository.create(findedUser.id);

  return token;
}

export async function logout(userId: number) {
  await sessoesRepository.logout(userId);
  return;
}
