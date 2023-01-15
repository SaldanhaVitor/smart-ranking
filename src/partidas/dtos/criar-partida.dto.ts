import { Categoria } from "src/categorias/interfaces/categoria.interface"
import { Jogador } from "src/jogadores/interfaces/jogador.interface"
import { Partida } from "src/partidas/interfaces/partida.interface"

export class CriarPartidaDto {
    dataHoraDesafio: Date
    dataHoraSolicitacao: Date
    dataHoraResposta: Date
    status: string
    solicitante: Jogador
    categoria: Categoria
    jogadores: Jogador[]
    partida: Partida
}