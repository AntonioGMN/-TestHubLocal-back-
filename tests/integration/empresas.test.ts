import supertest from 'supertest';
import app from '../../src/app.js';
import clearDb from '../utils/clearDB.js';
import getToken from '../utils/getToken.js';

describe('empresas tests', () => {
  beforeAll(clearDb);

  const empresa = {
    nome: 'hubLocal',
    cnpj: '156483',
    descricao: 'vai fazer uma ótima contratação',
  };

  const responsavel = {
    nome: 'pedro',
    telefone: '84988456636',
    cep: '59062300',
  };

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
