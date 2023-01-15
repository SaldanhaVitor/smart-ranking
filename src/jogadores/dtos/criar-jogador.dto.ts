import { IsNotEmpty, IsEmail } from 'class-validator'

export class CriarJogadorDto {
    @IsNotEmpty()
    readonly phone_number: string

    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    name: string
}