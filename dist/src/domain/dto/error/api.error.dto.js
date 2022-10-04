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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiErrorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const fast_json_stable_stringify_1 = require("fast-json-stable-stringify");
const type_error_1 = require("./type.error");
class ApiErrorDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: Object.values(type_error_1.ApiErrors).map((e) => e.code),
        example: type_error_1.ApiErrors.UNKNOWN_API_ERROR.code,
    }),
    __metadata("design:type", Number)
], ApiErrorDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: Object.values(type_error_1.ApiErrors).map((e) => `[${e.code}] ${e.message}`),
        example: type_error_1.ApiErrors.UNKNOWN_API_ERROR.message,
    }),
    __metadata("design:type", String)
], ApiErrorDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        enum: Object.values(type_error_1.ApiErrors)
            .filter((e) => e.extraInfo)
            .map((e) => `[${e.code}] ${(0, fast_json_stable_stringify_1.default)(e.extraInfo)}`),
    }),
    __metadata("design:type", Object)
], ApiErrorDto.prototype, "extraInfo", void 0);
exports.ApiErrorDto = ApiErrorDto;
//# sourceMappingURL=api.error.dto.js.map