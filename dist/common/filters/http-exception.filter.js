"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AllExceptionFilters_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilters = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionFilters = AllExceptionFilters_1 = class AllExceptionFilters {
    constructor() {
        this.logger = new common_1.Logger(AllExceptionFilters_1.name);
    }
    catch(exception, host) {
        const context = host.switchToHttp();
        const request = context.getRequest();
        const response = context.getResponse();
        const instanceOfHttpException = exception instanceof common_1.HttpException;
        const statusCode = instanceOfHttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const message = instanceOfHttpException ? exception.getResponse() : exception;
        this.logger.error(`Http Status: ${statusCode} :: Error Message: ${JSON.stringify(message)}`);
        response.status(statusCode).json({
            timestamp: new Date().toISOString(),
            path: request.url,
            error: message
        });
    }
};
AllExceptionFilters = AllExceptionFilters_1 = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilters);
exports.AllExceptionFilters = AllExceptionFilters;
//# sourceMappingURL=http-exception.filter.js.map