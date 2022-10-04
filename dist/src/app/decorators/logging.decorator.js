"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const common_1 = require("@nestjs/common");
const logging_interceptor_1 = require("../logging/logging.interceptor");
function Log() {
    return (0, common_1.applyDecorators)((0, common_1.UseInterceptors)(logging_interceptor_1.LoggingInterceptor));
}
exports.Log = Log;
//# sourceMappingURL=logging.decorator.js.map