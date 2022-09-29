import supertest from 'supertest';
import app from '../../src/app.js';
import clearDb from '../utils/clearDB.js';
import getToken from '../utils/getToken.js';

describe('empresas tests', () => {
  const empresa = {
    nome: 'hubLocal',
    cnpj: '156483',
    descricao: 'vai fazer uma ótima contratação',
  };

  it('create empresa end return 201', async () => {
    const token = await getToken();
    const resulte = await supertest(app)
      .post('/empresas/create')
      .send(empresa)
      .set('Authorization', `Bearer ${token}`);

    expect(resulte.status).toEqual(201);
  });

  afterAll(clearDb);
});
