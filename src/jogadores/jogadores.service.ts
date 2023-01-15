import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AtualizarJogador } from './dtos/atualizar-jogador.dto';

@Injectable()
export class JogadoresService {

    constructor(@InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>) {

    }

    async consultarJogadorPorId(id: string): Promise<Jogador> {
        const jogadorEncontrado = await this.jogadorModel.findOne({ '_id': id }).exec()
        if (!jogadorEncontrado) throw new NotFoundException(`Joagador com id ${id} não encontrado`)
        return jogadorEncontrado
    }

    async criarJogador(jogadorDto: CriarJogadorDto): Promise<Jogador> {
        const { email } = jogadorDto

        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec()

        if (jogadorEncontrado) {
            throw new ConflictException('Jogador já existe')
        }

        const jogadorCriado = new this.jogadorModel(jogadorDto)
        return await jogadorCriado.save()
    }

    async consultarJogadores(): Promise<Jogador[]> {
        return await this.jogadorModel.find().exec()
    }

    async deletarJogador(id: string): Promise<any> {
        await this.consultarJogadorPorId(id)
        return await this.jogadorModel.findOneAndDelete({ '_id': id }).exec()
    }

    async atualizarJogador(id: string, jogadorDto: AtualizarJogador): Promise<Jogador> {
        await this.consultarJogadorPorId(id)
        return await this.jogadorModel.findOneAndUpdate(
            { '_id': id },
            { $set: jogadorDto },
            { returnOriginal: false },
        ).exec()
    }
}
