import supertest from 'supertest';
import app from '../../src/app.js';
import { faker } from '@faker-js/faker';

export default async function getToken() {
  const user = {
    name: 'lucas',
    email: faker.internet.email(),
    password: '123',
  };

  const loginDate = {
    email: user.email,
    password: user.password,
  };

  await supertest(app).post('/signUp').send(user);
  const resulte = await supertest(app).post('/login').send(loginDate);

  return resulte.text;
}
