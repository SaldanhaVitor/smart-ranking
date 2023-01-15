import * as mongoose from 'mongoose'

export const DesafioSchema = new mongoose.Schema({
    dataHoraDesafio: {
        type: Date,
    },
    dataHoraSolicitacao: {
        type: Date,
    },
    dataHoraResposta: {
        type: Date,
    },
    status: { Type: String },
    solicitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogador',
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria"
    },
    jogadores: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Jogador"
        }
    ],
    partida:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Partida"
    }

}, { timestamps: true, collection: 'desafios' })