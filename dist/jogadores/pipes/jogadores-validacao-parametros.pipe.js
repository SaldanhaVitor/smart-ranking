"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresValidacaoParametrosPipe = void 0;
const common_1 = require("@nestjs/common");
class JogadoresValidacaoParametrosPipe {
    transform(value, metadata) {
        if (!value)
            throw new common_1.BadRequestException(`${metadata.data} is required`);
        return value;
    }
}
exports.JogadoresValidacaoParametrosPipe = JogadoresValidacaoParametrosPipe;
//# sourceMappingURL=jogadores-validacao-parametros.pipe.js.map