import { Document } from 'mongoose';
import { Categoria } from 'src/categorias/interfaces/categoria.interface';
import { Jogador } from 'src/jogadores/interfaces/jogador.interface';
import { Partida } from 'src/partidas/interfaces/partida.interface';
import { DesafioStatusEnum } from './desafio-status.enum'

export class Desafio extends Document {
    dataHoraDesafio: Date
    status: DesafioStatusEnum
    dataHoraSolicitacao: Date
    dataHoraResposta: Date
    solicitante: string
    categoria: Categoria
    jogadores: Jogador[]
    partida: Partida
}