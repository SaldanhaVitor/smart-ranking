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
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jogadores_service_1 = require("../jogadores/jogadores.service");
let CategoriasService = class CategoriasService {
    constructor(categoriaModel, jogadoresService) {
        this.categoriaModel = categoriaModel;
        this.jogadoresService = jogadoresService;
    }
    async criarCategoria(categoriaDto) {
        const { categoria } = categoriaDto;
        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();
        if (categoriaEncontrada) {
            throw new common_1.ConflictException('Categoria já existe');
        }
        const categoriaCriada = new this.categoriaModel(categoriaDto);
        return await categoriaCriada.save();
    }
    async buscarCategorias() {
        return await this.categoriaModel.find().populate('jogadores').exec();
    }
    async buscarCategoriaPorId(id) {
        const categoriaEncontrada = await this.categoriaModel.findOne({ '_id': id }).exec();
        if (!categoriaEncontrada) {
            throw new common_1.NotFoundException(`Categoria com id ${id} não encontrada`);
        }
        return categoriaEncontrada;
    }
    async atualizarCategoria(id, atualizarCategoriaDto) {
        const categoriaEncontrada = await this.categoriaModel.findOne({ '_id': id }).exec();
        if (!categoriaEncontrada) {
            throw new common_1.NotFoundException(`Categoria com id ${id} não encontrada`);
        }
        return await this.categoriaModel.findOneAndUpdate({ '_id': id }, { $set: atualizarCategoriaDto }, { returnOriginal: false }).exec();
    }
    async buscarCategoriaPorJogador(idJogador) {
        return await this.categoriaModel
            .find()
            .where('jogadores')
            .in(idJogador)
            .exec();
    }
    async atribuirCategoriaJogador(params) {
        const categoria = params['categoria'];
        const idJogador = params['idJogador'];
        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();
        if (!categoriaEncontrada) {
            throw new common_1.NotFoundException(`Categoria ${categoria} não encontrada`);
        }
        const jogadorEncontrado = await this.jogadoresService.consultarJogadorPorId(idJogador);
        if (!jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador ${idJogador} não encontrado`);
        }
        const jogadorJaexisteNaCategoria = await this.categoriaModel
            .find({ categoria })
            .where('jogadores')
            .in(idJogador)
            .exec();
        if (jogadorJaexisteNaCategoria.length > 0) {
            throw new common_1.ConflictException(`Jogador ${idJogador} já cadastrado na categoria ${categoria}`);
        }
        categoriaEncontrada.jogadores.push(idJogador);
        return await this.categoriaModel
            .findOneAndUpdate({ categoria }, { $set: categoriaEncontrada }, { returnOriginal: false })
            .populate('jogadores')
            .exec();
    }
};
CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Categoria')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jogadores_service_1.JogadoresService])
], CategoriasService);
exports.CategoriasService = CategoriasService;
//# sourceMappingURL=categorias.service.js.map