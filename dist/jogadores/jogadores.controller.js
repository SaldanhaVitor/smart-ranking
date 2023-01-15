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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresController = void 0;
const common_1 = require("@nestjs/common");
const atualizar_jogador_dto_1 = require("./dtos/atualizar-jogador.dto");
const criar_jogador_dto_1 = require("./dtos/criar-jogador.dto");
const jogadores_service_1 = require("./jogadores.service");
const validacao_parametros_pipe_1 = require("../common/pipes/validacao-parametros.pipe");
let JogadoresController = class JogadoresController {
    constructor(jogadoresService) {
        this.jogadoresService = jogadoresService;
    }
    async criarJogador(jogadorDto) {
        return await this.jogadoresService.criarJogador(jogadorDto);
    }
    async atualizarJogador(jogadorDto, id) {
        return await this.jogadoresService.atualizarJogador(id, jogadorDto);
    }
    async consultarJogadores() {
        return this.jogadoresService.consultarJogadores();
    }
    async consultarJogadorPorId(id) {
        return this.jogadoresService.consultarJogadorPorId(id);
    }
    async deletarJogador(id) {
        return this.jogadoresService.deletarJogador(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_jogador_dto_1.CriarJogadorDto]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "criarJogador", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', validacao_parametros_pipe_1.ValidacaoParametrosPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_jogador_dto_1.AtualizarJogador, String]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "atualizarJogador", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "consultarJogadores", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', validacao_parametros_pipe_1.ValidacaoParametrosPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "consultarJogadorPorId", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', validacao_parametros_pipe_1.ValidacaoParametrosPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JogadoresController.prototype, "deletarJogador", null);
JogadoresController = __decorate([
    (0, common_1.Controller)('api/v1/jogadores'),
    __metadata("design:paramtypes", [jogadores_service_1.JogadoresService])
], JogadoresController);
exports.JogadoresController = JogadoresController;
//# sourceMappingURL=jogadores.controller.js.map