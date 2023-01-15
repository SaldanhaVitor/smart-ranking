import { Document } from "mongoose";
import { Jogador } from "src/jogadores/interfaces/jogador.interface";

export class Partida extends Document {
    def: Jogador
    resultado: Resultado[]
    jogadores: Jogador[]
}

export class Resultado extends Document {
    _set: string
}