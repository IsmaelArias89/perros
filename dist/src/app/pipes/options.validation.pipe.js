"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationPipe = exports.VALIDATION_PIPE_OPTIONS = void 0;
const common_1 = require("@nestjs/common");
const type_error_1 = require("../../domain/dto/error/type.error");
exports.VALIDATION_PIPE_OPTIONS = {
    transform: true,
    validationError: { target: false },
    exceptionFactory: (errors) => {
        throw new type_error_1.DomainError(Object.assign(Object.assign({}, type_error_1.DomainErrors.INVALID_INPUT), { extraInfo: errors[0] }));
    },
};
exports.validationPipe = new common_1.ValidationPipe(exports.VALIDATION_PIPE_OPTIONS);
//# sourceMappingURL=options.validation.pipe.js.map