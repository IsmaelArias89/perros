"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentVariablesLog = void 0;
const dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
dotenv.config();
const environmentVariablesLog = () => {
    common_1.Logger.log(START_MSG);
    common_1.Logger.log(`NODE_ENV: ${process.env.NODE_ENV}`);
};
exports.environmentVariablesLog = environmentVariablesLog;
const START_MSG = '**** Starting nest-starter ****';
//# sourceMappingURL=environment.variable.log.js.map