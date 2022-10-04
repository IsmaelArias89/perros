"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextService = void 0;
const ContextStore = require("request-context");
const uuid_1 = require("uuid");
class ContextService {
    static middleware(req, _res, next) {
        ContextService.set(ContextService.KEYS.REQUEST_ID, (0, uuid_1.v1)());
        ContextService.set(ContextService.KEYS.REQUEST_IP, req.ip);
        next();
    }
    static set(key, value) {
        ContextStore.set(key, value);
    }
    static get(key) {
        return ContextStore.get(key);
    }
}
exports.ContextService = ContextService;
ContextService.KEYS = {
    REQUEST_ID: 'request:id',
    REQUEST_IP: 'request:ip',
};
//# sourceMappingURL=context.service.js.map