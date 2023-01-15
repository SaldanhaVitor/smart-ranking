"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jogadores_module_1 = require("./jogadores/jogadores.module");
const config_1 = require("@nestjs/config");
const categorias_module_1 = require("./categorias/categorias.module");
const desafios_module_1 = require("./desafios/desafios.module");
const partidas_module_1 = require("./partidas/partidas.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env' }),
            mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URI_CONNECTION),
            jogadores_module_1.JogadoresModule,
            categorias_module_1.CategoriasModule,
            desafios_module_1.DesafiosModule,
            partidas_module_1.PartidasModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map