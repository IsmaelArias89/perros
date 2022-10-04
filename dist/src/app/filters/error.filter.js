"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ErrorFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const dto_1 = require("../../domain/dto");
const customLogger_service_1 = require("../logging/custom_logger/customLogger.service");
let ErrorFilter = ErrorFilter_1 = class ErrorFilter extends core_1.BaseExceptionFilter {
    constructor() {
        super(...arguments);
        this.stringify = require('fast-json-stable-stringify');
        this.logger = new customLogger_service_1.CustomLogger(ErrorFilter_1.name);
    }
    catch(exception, host) {
        this.logger.warn(`Exception thrown: ${this.stringify(exception)}`);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = 500;
        let res = dto_1.ApiErrors.UNKNOWN_API_ERROR;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const aux = exception.getResponse();
            res =
                aux instanceof dto_1.DomainError
                    ? aux.toApiError()
                    : this.httpStatuscodeToApiError(status);
        }
        if (exception instanceof common_1.UnprocessableEntityException) {
            status = exception.getStatus();
            res = dto_1.ApiErrors.INVALID_INPUT;
        }
        if (exception instanceof dto_1.DomainError) {
            res = exception.toApiError();
            status = this.ApiErrorcodeToHttpStatus(res.code);
        }
        if (exception instanceof common_1.UnauthorizedException) {
            status = exception.getStatus();
            res = dto_1.ApiErrors.UNAUTHORIZED_API_ERROR;
        }
        if (exception instanceof common_1.ForbiddenException) {
            status = exception.getStatus();
            res = dto_1.ApiErrors.FORBIDDEN_API_ERROR;
        }
        this.logger.warn(`Answered with HTTP status ${status} and the following payload: ${this.stringify(res)}`);
        response.status(status).json(res);
    }
    httpStatuscodeToApiError(status) {
        switch (status) {
            case 503:
                return dto_1.ApiErrors.API_IN_MAINTENANCE;
            case 404:
                return dto_1.ApiErrors.ROUTE_NOT_FOUND;
            case 502:
                return dto_1.ApiErrors.BAD_GATEWAY;
            default:
                return dto_1.ApiErrors.UNKNOWN_API_ERROR;
        }
    }
    ApiErrorcodeToHttpStatus(errorCode) {
        switch (errorCode) {
            case dto_1.ApiErrors.API_IN_MAINTENANCE.code:
                return 503;
            case dto_1.ApiErrors.UNKNOWN_API_ERROR.code:
            case dto_1.ApiErrors.UNKNOWN_RESPONSE_ERROR.code:
                return 500;
            default:
                return 400;
        }
    }
};
ErrorFilter = ErrorFilter_1 = __decorate([
    (0, common_1.Catch)()
], ErrorFilter);
exports.ErrorFilter = ErrorFilter;
//# sourceMappingURL=error.filter.js.map