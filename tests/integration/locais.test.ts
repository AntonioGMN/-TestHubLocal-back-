import supertest from 'supertest';
import app from '../../src/app.js';
import clearDb from '../utils/clearDB.js';
import getToken from '../utils/getToken.js';
import getEmpresa from '../utils/getEmpresa.js';
import getLocal from '../utils/getLocal.js';

import * as userRepository from '../../src/repositories/userRepository.js';

describe('empresas tests', () => {
  beforeAll(clearDb);

  const responsavel = {
    nome: 'pedro',
    telefone: '84988456638',
    cep: '59062301',
  };

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
