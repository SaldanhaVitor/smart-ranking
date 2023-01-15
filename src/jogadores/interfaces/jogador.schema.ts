import * as mongoose from 'mongoose'

export const JogadorSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String,
    },
    phone_number: {
        type: String
    },
    ranking: {
        type: String,
    },
    ranking_position: {
        type: Number,
    },
    picture_url: {
        type: String
    }
}, { timestamps: true, collection: 'jogadores' })