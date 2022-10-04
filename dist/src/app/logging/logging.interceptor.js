"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const MaskJson = require("mask-json");
const objectTrim = require("object-trim");
const customLogger_service_1 = require("./custom_logger/customLogger.service");
const http_1 = require("http");
const trim = (x) => Array.isArray(x) || typeof x === 'string'
    ? x.slice(0, 4)
    : typeof x === 'object'
        ? objectTrim(x, 4)
        : x;
const redactions = ['password', 'data', 'records'];
const redact = MaskJson(redactions);
let LoggingInterceptor = class LoggingInterceptor {
    constructor() {
        this.stringify = require('fast-json-stable-stringify');
    }
    intercept(context, next) {
        const handlerId = `${context.getClass().name}/${context.getHandler().name}`;
        const logger = new customLogger_service_1.CustomLogger(handlerId);
        const { body, hostname, method, originalUrl } = context.getArgByIndex(0);
        logger.log(`Request: ${this.stringify({
            method,
            originalUrl,
            body: redact(body),
            hostname,
        })}`);
        const now = Date.now();
        return next.handle().pipe((0, operators_1.tap)((result) => {
            logger.log(`Trimmed response: ${result instanceof http_1.ServerResponse
                ? 'Express response object'
                : this.stringify(redact(trim(result)))}. +${Date.now() - now}ms`);
        }), (0, operators_1.catchError)((e) => {
            var _a;
            logger.error('Error handling the request', ((_a = e.message) === null || _a === void 0 ? void 0 : _a.stack) || (e === null || e === void 0 ? void 0 : e.stack));
            throw e;
        }));
    }
};
LoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map