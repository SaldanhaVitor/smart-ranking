import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoriasService } from 'src/categorias/categorias.service';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { DesafioStatusEnum } from './interfaces/desafio-status.enum';
import { Desafio } from './interfaces/desafio.interface';

@Injectable()
export class DesafiosService {

    constructor(
        @InjectModel('Desafio')
        private readonly desafioModel: Model<Desafio>,
        private readonly categoriaModel: CategoriasService,
        private readonly jogadorModel: JogadoresService

    ) { }

    async criarDesafio(criarDesafio: CriarDesafioDto): Promise<Desafio> {
        const { solicitante: idSolicitante, jogadores } = criarDesafio;

        const jogadoresDaPartida: Jogador[] = []
        for (const idJogador of jogadores) {
            const jogadorExiste = await this.jogadorModel.consultarJogadorPorId(idJogador)
            if (!jogadorExiste) {
                throw new NotFoundException(`Jogador ${idJogador} não encontrado`)
            }
            jogadoresDaPartida.push(jogadorExiste)
        }

        const solicitanteEhValido = criarDesafio.jogadores.find(jogador => jogador === idSolicitante)
        if (!solicitanteEhValido) {
            throw new UnprocessableEntityException(`Jogador solicitante não é um jogador presente no desafio`)
        }

        const [categoriaJogadorSolicitante] = await this.categoriaModel.buscarCategoriaPorJogador(idSolicitante)

        if (!categoriaJogadorSolicitante) {
            throw new NotFoundException(`Jogador ${idSolicitante} não está cadastrado em nenhuma categoria`)
        }

        const solicitante = {
            categoriaSolicitante: categoriaJogadorSolicitante.categoria
        }

        const desafiado = criarDesafio.jogadores.find(jogador => jogador !== idSolicitante)

        const [categoriaJogadorDesafiado] = await this.categoriaModel.buscarCategoriaPorJogador(desafiado)
        if (categoriaJogadorDesafiado.categoria !== solicitante.categoriaSolicitante) {
            throw new UnprocessableEntityException('Jogador solicitante deve desafiar um jogador da mesma categoria')
        }

        const desafioCriado: Desafio = new this.desafioModel(criarDesafio)
        Object.assign(desafioCriado, {
            dataHoraDesafio: criarDesafio.dataHoraDesafio,
            dataHoraSolicitacao: new Date(),
            status: DesafioStatusEnum.PENDENTE,
            solicitante: idSolicitante,
            categoria: categoriaJogadorSolicitante,
            jogadores: jogadoresDaPartida,
        })
        return await desafioCriado.save()
    }

    async buscarTodosDesafios(): Promise<Desafio[]> {
        return await this.desafioModel.find().exec()
    }
}
