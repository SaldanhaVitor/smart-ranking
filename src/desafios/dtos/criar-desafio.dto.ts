import { ArrayMaxSize, ArrayMinSize, IsArray, IsDateString, IsNotEmpty } from "class-validator"

export class CriarDesafioDto {
    @IsNotEmpty()
    @IsDateString()
    dataHoraDesafio: Date

    @IsNotEmpty()
    solicitante: string

    @IsArray()
    @IsNotEmpty()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    jogadores: string[]
}