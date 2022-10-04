"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllersV1Module = exports.CONTROLLERS = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
exports.CONTROLLERS = [app_controller_1.AppController];
let ControllersV1Module = class ControllersV1Module {
};
ControllersV1Module = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [],
        controllers: exports.CONTROLLERS,
    })
], ControllersV1Module);
exports.ControllersV1Module = ControllersV1Module;
//# sourceMappingURL=controllers.v1.module.js.map