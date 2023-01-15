"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasValidacaoParametrosPipe = void 0;
const common_1 = require("@nestjs/common");
class CategoriasValidacaoParametrosPipe {
    transform(value, metadata) {
        if (!value)
            throw new common_1.BadRequestException(`${metadata.data} is required`);
        return value;
    }
}
exports.CategoriasValidacaoParametrosPipe = CategoriasValidacaoParametrosPipe;
//# sourceMappingURL=categorias-validacao-parametros-pipe.js.map