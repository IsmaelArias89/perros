"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const request = require("supertest");
const test_app_module_factory_1 = require("../test.app.module.factory");
const app_controller_1 = require("../../src/app/controllers/v1/app.controller");
const dto_1 = require("../../src/domain/dto");
describe('AppController (e2e)', () => {
    let appTest;
    let appControler;
    beforeEach(async () => {
        const [app, nestModule] = await (0, test_app_module_factory_1.testsAppModule)();
        appTest = app;
        appControler = nestModule.get(app_controller_1.AppController);
    });
    it('success health get', async () => {
        return request(appTest.getHttpServer())
            .get('/health')
            .expect(common_1.HttpStatus.OK);
    });
    it('error not found', async () => {
        const response = await request(appTest.getHttpServer()).get('/random');
        expect(response.status).toEqual(common_1.HttpStatus.NOT_FOUND);
        expect(response.body).toEqual(dto_1.ApiErrors.ROUTE_NOT_FOUND);
    });
});
//# sourceMappingURL=app.e2e.spec.js.map