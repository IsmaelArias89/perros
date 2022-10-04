import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, INestApplication, Logger } from '@nestjs/common';
import { environmentVariablesLog } from './environment.variable.log';
import * as helmet from 'helmet';
import * as ContextStore from 'request-context';
import { ENVIRONMENT } from './constants';
import { PropertyService } from './property.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { validationPipe } from './app/pipes/options.validation.pipe';
import { ErrorFilter } from './app/filters/error.filter';
import { ContextService } from './app/logging';
import { AppClusterService } from './app.cluster.service';

async function bootstrap() {
  try {
    environmentVariablesLog();

    const app = await NestFactory.create(AppModule, {
      logger: ['log', 'error', 'warn', 'debug'],
    });

    const httpAdapter = app.getHttpAdapter();
    app.useGlobalFilters(new ErrorFilter(httpAdapter));

    app.use(helmet());
    app.use(ContextStore.middleware('request'));
    app.use(ContextService.middleware);
    app.useGlobalPipes(validationPipe);

    swaggerSetup(app);

    const serverPort = process.env.SERVER_PORT || 3000;

    await app.listen(serverPort);
    Logger.log(`Server start on port: ${serverPort}`);
  } catch (error) {
    Logger.error('Server error');
    Logger.error(error?.stack);
  }
}
const numCPUs: number = Number(process.env.CLUSTER_CPU) || 0;
if (numCPUs === 0) {
  bootstrap();
} else {
  AppClusterService.clusterize(bootstrap, numCPUs);
}

function swaggerSetup(app: INestApplication) {
  const envs = [ENVIRONMENT.DOCKER, ENVIRONMENT.LOCAL, ENVIRONMENT.DEVELOPMENT];
  if (envs.includes(PropertyService.get('NODE_ENV'))) {
    const options = new DocumentBuilder()
      .setTitle('Nest Starter API')
      .setDescription('Nest Starter API')
      .setVersion('1.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'Authorization',
      )
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/v1/docs', app, document);
    Logger.log('Swagger configured');

    app.enableCors({ origin: '*' });
  } else {
    app.enableCors({
      origin: [
        PropertyService.get('FRONT_URL'),
        PropertyService.get('EXTRA_ALLOWED_ORIGIN'),
      ],
      optionsSuccessStatus: HttpStatus.OK,
    });
  }
}
