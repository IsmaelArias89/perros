"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testsAppModule = exports.TestModule = void 0;
const testing_1 = require("@nestjs/testing");
const common_1 = require("@nestjs/common");
const ContextStore = require("request-context");
const controllers_v1_module_1 = require("../src/app/controllers/v1/controllers.v1.module");
const logging_1 = require("../src/app/logging");
const error_filter_1 = require("../src/app/filters/error.filter");
let TestModule = class TestModule {
    configure(consumer) { }
};
TestModule = __decorate([
    (0, common_1.Module)({
        imports: [controllers_v1_module_1.ControllersV1Module],
        providers: [],
    })
], TestModule);
exports.TestModule = TestModule;
const testsAppModule = async ({} = {}) => {
    const nestModule = await testing_1.Test.createTestingModule({
        imports: [
            common_1.CacheModule.register({
                ttl: 60 * 60 * 1,
            }),
            TestModule,
        ],
        providers: [],
    }).compile();
    jest.spyOn(common_1.Logger, 'log').mockImplementation(() => { });
    jest.spyOn(common_1.Logger, 'error').mockImplementation(() => { });
    const app = nestModule.createNestApplication();
    const httpAdapter = app.getHttpAdapter();
    app.useGlobalFilters(new error_filter_1.ErrorFilter(httpAdapter));
    app.use(ContextStore.middleware('request'));
    app.use(logging_1.ContextService.middleware);
    app.useGlobalPipes(new common_1.ValidationPipe({
        exceptionFactory: (errors) => {
            const customError = new common_1.BadRequestException(`Validation error ${errors.map((error) => error.property)}`);
            throw new common_1.UnprocessableEntityException(customError.message);
        },
    }));
    await app.init();
    return [app, nestModule];
};
exports.testsAppModule = testsAppModule;
//# sourceMappingURL=test.app.module.factory.js.map