import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { testsAppModule } from '../test.app.module.factory';
import { AppController } from '../../src/app/controllers/v1/app.controller';
import { contentSecurityPolicy } from 'helmet';
import { ApiErrors } from '../../src/domain/dto';

describe('AppController (e2e)', () => {
  let appTest: INestApplication;
  let appControler: AppController;

  beforeEach(async () => {
    const [app, nestModule] = await testsAppModule();
    appTest = app;

    appControler = nestModule.get(AppController);
  });

  it('success health get', async () => {
    return request(appTest.getHttpServer())
      .get('/health')
      .expect(HttpStatus.OK);
  });

  it('error not found', async () => {
    const response = await request(appTest.getHttpServer()).get('/random');
    expect(response.status).toEqual(HttpStatus.NOT_FOUND);
    expect(response.body).toEqual(ApiErrors.ROUTE_NOT_FOUND);
  });
});
