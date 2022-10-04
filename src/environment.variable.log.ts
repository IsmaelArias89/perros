import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

dotenv.config();
export const environmentVariablesLog = () => {
  Logger.log(START_MSG);
  Logger.log(`NODE_ENV: ${process.env.NODE_ENV}`);
};

const START_MSG = '**** Starting nest-starter ****';
