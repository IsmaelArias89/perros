"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyService = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
const ENV_FILE = '.env';
class PropertyService {
    static get(key) {
        if (!PropertyService.envConfig) {
            PropertyService.envConfig = fs.existsSync(ENV_FILE)
                ? dotenv.parse(fs.readFileSync(ENV_FILE))
                : {};
        }
        return process.env[key] || PropertyService.envConfig[key];
    }
}
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map