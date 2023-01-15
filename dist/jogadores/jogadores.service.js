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
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JogadoresService = class JogadoresService {
    constructor(jogadorModel) {
        this.jogadorModel = jogadorModel;
    }
    async consultarJogadorPorId(id) {
        const jogadorEncontrado = await this.jogadorModel.findOne({ '_id': id }).exec();
        if (!jogadorEncontrado)
            throw new common_1.NotFoundException(`Joagador com id ${id} não encontrado`);
        return jogadorEncontrado;
    }
    async criarJogador(jogadorDto) {
        const { email } = jogadorDto;
        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
        if (jogadorEncontrado) {
            throw new common_1.ConflictException('Jogador já existe');
        }
        const jogadorCriado = new this.jogadorModel(jogadorDto);
        return await jogadorCriado.save();
    }
    async consultarJogadores() {
        return await this.jogadorModel.find().exec();
    }
    async deletarJogador(id) {
        await this.consultarJogadorPorId(id);
        return await this.jogadorModel.findOneAndDelete({ '_id': id }).exec();
    }
    async atualizarJogador(id, jogadorDto) {
        await this.consultarJogadorPorId(id);
        return await this.jogadorModel.findOneAndUpdate({ '_id': id }, { $set: jogadorDto }, { returnOriginal: false }).exec();
    }
};
JogadoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Jogador')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JogadoresService);
exports.JogadoresService = JogadoresService;
//# sourceMappingURL=jogadores.service.js.map