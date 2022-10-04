"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTIVE_ENVIRONMENT = exports.LOCAL_ENVIRONMENT = exports.ENVIRONMENT = void 0;
exports.ENVIRONMENT = {
    DOCKER: 'docker',
    LOCAL: 'local',
    DEVELOPMENT: 'development',
    TEST: 'test',
    QA: 'qa',
    PRE: 'preproduction',
    PRO: 'production',
};
exports.LOCAL_ENVIRONMENT = [exports.ENVIRONMENT.LOCAL, exports.ENVIRONMENT.DOCKER];
exports.PRODUCTIVE_ENVIRONMENT = [exports.ENVIRONMENT.PRE, exports.ENVIRONMENT.PRO];
//# sourceMappingURL=constants.js.map