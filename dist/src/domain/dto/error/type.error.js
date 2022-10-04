"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = exports.DomainErrors = exports.ApiErrors = void 0;
exports.ApiErrors = {
    API_IN_MAINTENANCE: {
        code: 2999,
        message: 'Api is in maintenance mode',
    },
    UNKNOWN_API_ERROR: {
        code: 2000,
        message: 'Something has failed.',
    },
    UNAUTHORIZED_API_ERROR: {
        code: 2001,
        message: 'Unauthorized user.',
    },
    INVALID_INPUT: {
        code: 2002,
        message: 'Invalid/Empty input',
    },
    UNKNOWN_RESPONSE_ERROR: {
        code: 2003,
        message: 'The external service returned an unknown response',
    },
    ROUTE_NOT_FOUND: {
        code: 2004,
        message: 'The route cannot be found',
    },
    BAD_GATEWAY: {
        code: 2005,
        message: 'Bad Gateway',
    },
    FORBIDDEN_API_ERROR: {
        code: 2006,
        message: 'Forbidden access',
    },
};
exports.DomainErrors = Object.assign({}, exports.ApiErrors);
class DomainError extends Error {
    constructor(error) {
        super(error.message);
        this.error = error;
    }
    toApiError() {
        return this.error;
    }
    static getError(errorCode) {
        return exports.DomainErrors[errorCode] || exports.DomainErrors.UNKNOWN_API_ERROR;
    }
}
exports.DomainError = DomainError;
//# sourceMappingURL=type.error.js.map