import { Document } from "mongoose"

export interface Jogador extends Document {
    readonly phone_number: string
    readonly email: string
    name: string
    ranking: string
    ranking_position: number
    picture_url: string
}