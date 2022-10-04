"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const common_1 = require("@nestjs/common");
function ApiController(prefix) {
    return (target) => {
        const version = Reflect.getMetadata('apiVersion', target);
        if (version) {
            const paths = getPathsWithVersion(prefix, version);
            (0, common_1.Controller)(paths)(target);
        }
        else {
            (0, common_1.Controller)(prefix)(target);
        }
    };
}
exports.ApiController = ApiController;
const addVersion = (version, path) => {
    const thisPath = path ? path : '';
    return version.map((v) => `${v}/${thisPath}`);
};
const getPathsWithVersion = (prefix, version) => {
    const paths = [];
    if (Array.isArray(prefix)) {
        prefix.forEach((path) => {
            paths.push(...addVersion(version, path));
        });
    }
    else {
        paths.push(...addVersion(version, prefix));
    }
    return paths;
};
//# sourceMappingURL=apiController.decorator.js.map