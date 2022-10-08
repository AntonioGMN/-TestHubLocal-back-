import supertest from 'supertest';
import app from '../../src/app.js';
import clearDb from '../utils/clearDB.js';
import getToken from '../utils/getToken.js';
import getEmpresa from '../utils/getEmpresa.js';

import getLocal from '../utils/getLocal.js';

import * as userRepository from '../../src/repositories/userRepository.js';

import { faker } from '@faker-js/faker';

const empresa = {
  nome: faker.name.firstName(),
  cnpj: faker.random.numeric(11),
  descricao: 'é boa',
};

const responsavel = {
  nome: faker.name.firstName(),
  telefone: faker.random.numeric(11),
  cep: faker.random.numeric(8),
};

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
});

describe('empresas tests', () => {
  beforeAll(clearDb);

  const body = {
    empresa: { ...empresa },
    responsavel: { ...responsavel },
  };

  it('create empresa end return 201', async () => {
    const token = await getToken();
    const resulte = await supertest(app)
      .post('/empresas/create')
      .send(body)
      .set('Authorization', `Bearer ${token}`);

    expect(resulte.status).toEqual(201);
  });

  it('get all empresas end return 201', async () => {
    const token = await getToken();
    const resulte = await supertest(app)
      .get('/empresas')
      .set('Authorization', `Bearer ${token}`);

    expect(resulte.status).toEqual(200);
  });
});

describe('locais tests', () => {
  beforeAll(clearDb);

  it('create local end return 201', async () => {
    const token = await getToken();
    const empresa = await getEmpresa();

    const local = {
      nome: 'casa',
      cep: 59062300,
      empresaId: empresa.id,
    };

    const body = {
      local: { ...local },
      responsavel: { ...responsavel },
    };

    const resulte = await supertest(app)
      .post('/locais')
      .send(body)
      .set('Authorization', `Bearer ${token}`);

    expect(resulte.status).toEqual(201);
  });

  it('get all locals end return 200', async () => {
    const token = await getToken();
    const resulte = await supertest(app)
      .get('/locais')
      .set('Authorization', `Bearer ${token}`);

    expect(resulte.status).toEqual(200);
  });
});

describe('tickets tests', () => {
  beforeAll(clearDb);

  it('create ticket end return 201', async () => {
    const token = await getToken();
    const local = await getLocal();

    const users = await userRepository.get();
    console.log(users);

    const body = {
      usuarioId: users[0].id,
      status: 'PENDENTE',
      localId: local.id,
    };

    const resulte = await supertest(app)
      .post('/tickets')
      .send(body)
      .set('Authorization', `Bearer ${token}`);

    expect(resulte.status).toEqual(201);
  });

  it('get all tickets end return 200', async () => {
    const token = await getToken();
    const resulte = await supertest(app)
      .get('/tickets')
      .set('Authorization', `Bearer ${token}`);

    expect(resulte.status).toEqual(200);
  });
});
