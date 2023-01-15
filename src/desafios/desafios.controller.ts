import { Body, Controller, Get, Post, UsePipes, ValidationPipe, ValueProvider } from '@nestjs/common';
import { DesafiosService } from './desafios.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { Desafio } from './interfaces/desafio.interface';

@Controller('api/v1/desafios')
export class DesafiosController {

    constructor(private readonly desafioService: DesafiosService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarDesafio(
        @Body() criarDesafio: CriarDesafioDto
    ): Promise<Desafio> {
        return await this.desafioService.criarDesafio(criarDesafio)
    }

    @Get()
    async buscarDesafios(
    ): Promise<Desafio[]> {
        return await this.desafioService.buscarTodosDesafios()
    }

}
