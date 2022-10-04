"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const environment_variable_log_1 = require("./environment.variable.log");
const helmet = require("helmet");
const ContextStore = require("request-context");
const constants_1 = require("./constants");
const property_service_1 = require("./property.service");
const swagger_1 = require("@nestjs/swagger");
const options_validation_pipe_1 = require("./app/pipes/options.validation.pipe");
const error_filter_1 = require("./app/filters/error.filter");
const logging_1 = require("./app/logging");
const app_cluster_service_1 = require("./app.cluster.service");
async function bootstrap() {
    try {
        (0, environment_variable_log_1.environmentVariablesLog)();
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            logger: ['log', 'error', 'warn', 'debug'],
        });
        const httpAdapter = app.getHttpAdapter();
        app.useGlobalFilters(new error_filter_1.ErrorFilter(httpAdapter));
        app.use(helmet());
        app.use(ContextStore.middleware('request'));
        app.use(logging_1.ContextService.middleware);
        app.useGlobalPipes(options_validation_pipe_1.validationPipe);
        swaggerSetup(app);
        const serverPort = process.env.SERVER_PORT || 3000;
        await app.listen(serverPort);
        common_1.Logger.log(`Server start on port: ${serverPort}`);
    }
    catch (error) {
        common_1.Logger.error('Server error');
        common_1.Logger.error(error === null || error === void 0 ? void 0 : error.stack);
    }
}
const numCPUs = Number(process.env.CLUSTER_CPU) || 0;
if (numCPUs === 0) {
    bootstrap();
}
else {
    app_cluster_service_1.AppClusterService.clusterize(bootstrap, numCPUs);
}
function swaggerSetup(app) {
    const envs = [constants_1.ENVIRONMENT.DOCKER, constants_1.ENVIRONMENT.LOCAL, constants_1.ENVIRONMENT.DEVELOPMENT];
    if (envs.includes(property_service_1.PropertyService.get('NODE_ENV'))) {
        const options = new swagger_1.DocumentBuilder()
            .setTitle('Nest Starter API')
            .setDescription('Nest Starter API')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'Authorization')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, options);
        swagger_1.SwaggerModule.setup('api/v1/docs', app, document);
        common_1.Logger.log('Swagger configured');
        app.enableCors({ origin: '*' });
    }
    else {
        app.enableCors({
            origin: [
                property_service_1.PropertyService.get('FRONT_URL'),
                property_service_1.PropertyService.get('EXTRA_ALLOWED_ORIGIN'),
            ],
            optionsSuccessStatus: common_1.HttpStatus.OK,
        });
    }
}
//# sourceMappingURL=main.js.map