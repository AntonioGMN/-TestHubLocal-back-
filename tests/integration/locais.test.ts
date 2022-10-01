import supertest from 'supertest';
import app from '../../src/app.js';
import clearDb from '../utils/clearDB.js';
import getToken from '../utils/getToken.js';
import getEmpresa from '../utils/getEmpresa.js';

describe('empresas tests', () => {
  beforeAll(clearDb);

  const responsavel = {
    nome: 'pedro',
    telefone: '84988456638',
    cep: '59062301',
  };

  it('create empresa end return 201', async () => {
    const token = await getToken();
    const empresa = await getEmpresa();
    console.log(empresa);

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

  // it('get all empresas end return 201', async () => {
  //   const token = await getToken();
  //   const resulte = await supertest(app)
  //     .get('/empresas')
  //     .set('Authorization', `Bearer ${token}`);

  //   expect(resulte.status).toEqual(200);
  // });
});
