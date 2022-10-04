"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var CustomLogger_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const common_1 = require("@nestjs/common");
const context_service_1 = require("./context.service");
const emptyLogger_service_1 = require("./emptyLogger.service");
let CustomLogger = CustomLogger_1 = class CustomLogger extends common_1.Logger {
    constructor(context) {
        super(context);
        if (process.env.NODE_ENV === 'test') {
            return new emptyLogger_service_1.EmptyLogger(context);
        }
    }
    log(message, context) {
        super.log(message, CustomLogger_1.getContextTrace(context));
    }
    warn(message, context) {
        super.warn(message, CustomLogger_1.getContextTrace(context));
    }
    error(message, trace, context) {
        super.error(message, trace, CustomLogger_1.getContextTrace(context));
    }
    debug(message, context) {
        super.debug(message, CustomLogger_1.getContextTrace(context));
    }
    static getRequestId() {
        const id = context_service_1.ContextService.get(context_service_1.ContextService.KEYS.REQUEST_ID);
        return id ? `${id}] [` : '';
    }
    static getContextTrace(context) {
        const contextMessage = context ? `[ ${context}] ${context}` : '';
        return `${CustomLogger_1.getRequestId()}${contextMessage}`;
    }
};
CustomLogger = CustomLogger_1 = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT }),
    __metadata("design:paramtypes", [String])
], CustomLogger);
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=customLogger.service.js.map