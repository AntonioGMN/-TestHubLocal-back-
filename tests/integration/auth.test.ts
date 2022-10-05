import supertest from 'supertest';
import app from '../../src/app.js';
import clearDb from '../utils/clearDB.js';

describe('auth test', () => {
  beforeAll(clearDb);
  const user = {
    name: 'neto',
    email: 'neto@gmail.com',
    password: '123',
  };

  it('get all users e receive 200', async () => {
    const resulte = await supertest(app).get('/users');
    expect(resulte.status).toEqual(200);
  });

  it('signUp a user e receive 201', async () => {
    const resulte = await supertest(app).post('/signUp').send(user);
    expect(resulte.status).toEqual(201);
  });

  it('login end receive 200', async () => {
    const loginDate = {
      email: user.email,
      password: user.password,
    };

    const resulte = await supertest(app).post('/login').send(loginDate);
    expect(resulte.status).toEqual(200);
  });

  //afterAll(clearDb);
});
