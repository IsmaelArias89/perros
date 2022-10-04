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
var AppController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../decorators");
const logging_1 = require("../../logging");
const constants_1 = require("../constants");
let AppController = AppController_1 = class AppController {
    constructor() {
        this.logger = new logging_1.CustomLogger(AppController_1.name);
    }
    async isHealth() {
        this.logger.log('Status OK');
    }
};
__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({ summary: 'Lets you test the health of an API instance.' }),
    (0, swagger_1.ApiOkResponse)({
        description: constants_1.SUCCESSFUL_RESPONSE,
        status: common_1.HttpStatus.OK,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "isHealth", null);
AppController = AppController_1 = __decorate([
    (0, decorators_1.Log)(),
    (0, decorators_1.ApiController)(),
    (0, swagger_1.ApiTags)('App')
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map