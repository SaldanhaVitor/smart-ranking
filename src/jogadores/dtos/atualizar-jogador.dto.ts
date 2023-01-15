import { IsNotEmpty } from 'class-validator'

export class AtualizarJogador {
    @IsNotEmpty()
    readonly phone_number: string
    
    @IsNotEmpty()
    name: string
}