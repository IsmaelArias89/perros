"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiVersion = void 0;
const ApiVersion = (...versions) => {
    return Reflect.metadata('apiVersion', versions);
};
exports.ApiVersion = ApiVersion;
//# sourceMappingURL=apiVersion.decorator.js.map