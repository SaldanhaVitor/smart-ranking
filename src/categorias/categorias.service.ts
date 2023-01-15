import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';

@Injectable()
export class CategoriasService {

    constructor(
        @InjectModel('Categoria')
        private readonly categoriaModel: Model<Categoria>,
        private readonly jogadoresService: JogadoresService
    ) { }

    async criarCategoria(categoriaDto: CriarCategoriaDto): Promise<Categoria> {
        const { categoria } = categoriaDto

        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec()

        if (categoriaEncontrada) {
            throw new ConflictException('Categoria já existe')
        }

        const categoriaCriada = new this.categoriaModel(categoriaDto)
        return await categoriaCriada.save()
    }

    async buscarCategorias(): Promise<Categoria[]> {
        return await this.categoriaModel.find().populate('jogadores').exec();
    }

    async buscarCategoriaPorId(id: string): Promise<Categoria> {
        const categoriaEncontrada = await this.categoriaModel.findOne({ '_id': id }).exec()
        if (!categoriaEncontrada) {
            throw new NotFoundException(`Categoria com id ${id} não encontrada`)
        }
        return categoriaEncontrada
    }

    async atualizarCategoria(id: string, atualizarCategoriaDto: AtualizarCategoriaDto): Promise<Categoria> {
        const categoriaEncontrada = await this.categoriaModel.findOne({ '_id': id }).exec()
        if (!categoriaEncontrada) {
            throw new NotFoundException(`Categoria com id ${id} não encontrada`)
        }
        return await this.categoriaModel.findOneAndUpdate(
            { '_id': id },
            { $set: atualizarCategoriaDto },
            { returnOriginal: false }
        ).exec()
    }

    async buscarCategoriaPorJogador(idJogador: any) {
        return await
            this.categoriaModel
                .find()
                .where('jogadores')
                .in(idJogador)
                .exec()
    }

    async atribuirCategoriaJogador(params: string[]): Promise<Categoria> {
        const categoria = params['categoria'];
        const idJogador = params['idJogador'];

        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec()
        if (!categoriaEncontrada) {
            throw new NotFoundException(`Categoria ${categoria} não encontrada`)
        }

        const jogadorEncontrado = await this.jogadoresService.consultarJogadorPorId(idJogador)
        if (!jogadorEncontrado) {
            throw new NotFoundException(`Jogador ${idJogador} não encontrado`)

        }

        const jogadorJaexisteNaCategoria = await
            this.categoriaModel
                .find({ categoria })
                .where('jogadores')
                .in(idJogador)
                .exec()

        if (jogadorJaexisteNaCategoria.length > 0) {
            throw new ConflictException(`Jogador ${idJogador} já cadastrado na categoria ${categoria}`)
        }

        categoriaEncontrada.jogadores.push(idJogador)
        return await this.categoriaModel
            .findOneAndUpdate(
                { categoria },
                { $set: categoriaEncontrada },
                { returnOriginal: false }
            )
            .populate('jogadores')
            .exec()
    }
}