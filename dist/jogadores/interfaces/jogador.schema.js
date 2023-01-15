"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadorSchema = void 0;
const mongoose = require("mongoose");
exports.JogadorSchema = new mongoose.Schema({
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
}, { timestamps: true, collection: 'jogadores' });
//# sourceMappingURL=jogador.schema.js.map