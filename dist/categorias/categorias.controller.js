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
exports.CategoriasController = void 0;
const common_1 = require("@nestjs/common");
const categorias_service_1 = require("./categorias.service");
const atualizar_categoria_dto_1 = require("./dtos/atualizar-categoria.dto");
const criar_categoria_dto_1 = require("./dtos/criar-categoria.dto");
const validacao_parametros_pipe_1 = require("../common/pipes/validacao-parametros.pipe");
let CategoriasController = class CategoriasController {
    constructor(categoriaService) {
        this.categoriaService = categoriaService;
    }
    async criarCategoria(categoria) {
        return await this.categoriaService.criarCategoria(categoria);
    }
    async buscarCategorias() {
        return await this.categoriaService.buscarCategorias();
    }
    async buscarCategoriaPorId(id) {
        return await this.categoriaService.buscarCategoriaPorId(id);
    }
    async atualizarCategoria(atualizarCategoriaDto, id) {
        return await this.categoriaService.atualizarCategoria(id, atualizarCategoriaDto);
    }
    async atribuirCategoriaJogador(params) {
        return await this.categoriaService.atribuirCategoriaJogador(params);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_categoria_dto_1.CriarCategoriaDto]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "criarCategoria", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "buscarCategorias", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', validacao_parametros_pipe_1.ValidacaoParametrosPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "buscarCategoriaPorId", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', validacao_parametros_pipe_1.ValidacaoParametrosPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_categoria_dto_1.AtualizarCategoriaDto, String]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "atualizarCategoria", null);
__decorate([
    (0, common_1.Patch)('/:categoria/jogador/:idJogador'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CategoriasController.prototype, "atribuirCategoriaJogador", null);
CategoriasController = __decorate([
    (0, common_1.Controller)('api/v1/categorias'),
    __metadata("design:paramtypes", [categorias_service_1.CategoriasService])
], CategoriasController);
exports.CategoriasController = CategoriasController;
//# sourceMappingURL=categorias.controller.js.map