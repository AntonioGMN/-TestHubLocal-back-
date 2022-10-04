import { Request, Response } from 'express';
import * as userService from '../service/userService.js';

export async function sighUp(req: Request, res: Response) {
  const user = req.body;
  await userService.signUp(user);
  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = { email, password };

  const token = await userService.login(user);
  res.send(token);
}

export async function logout(req: Request, res: Response) {
  const { userId } = res.locals;
  console.log(userId);

  await userService.logout(userId);
  res.sendStatus(200);
}
