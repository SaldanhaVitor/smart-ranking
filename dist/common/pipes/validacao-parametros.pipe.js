"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidacaoParametrosPipe = void 0;
const common_1 = require("@nestjs/common");
class ValidacaoParametrosPipe {
    transform(value, metadata) {
        if (!value)
            throw new common_1.BadRequestException(`${metadata.data} is required`);
        return value;
    }
}
exports.ValidacaoParametrosPipe = ValidacaoParametrosPipe;
//# sourceMappingURL=validacao-parametros.pipe.js.map