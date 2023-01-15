import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AtualizarJogador } from './dtos/atualizar-jogador.dto';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';
import { ValidacaoParametrosPipe } from '../common/pipes/validacao-parametros.pipe';

@Controller('api/v1/jogadores')
export class JogadoresController {
    constructor(private readonly jogadoresService: JogadoresService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarJogador(
        @Body() jogadorDto: CriarJogadorDto
    ): Promise<Jogador> {
        return await this.jogadoresService.criarJogador(jogadorDto)
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async atualizarJogador(
        @Body() jogadorDto: AtualizarJogador,
        @Param('id', ValidacaoParametrosPipe) id: string
    ): Promise<Jogador> {
        return await this.jogadoresService.atualizarJogador(id, jogadorDto)
    }

    @Get()
    async consultarJogadores(
    ): Promise<Jogador[]> {
        return this.jogadoresService.consultarJogadores()
    }

    @Get('/:id')
    @UsePipes(ValidationPipe)
    async consultarJogadorPorId(
        @Param('id', ValidacaoParametrosPipe) id: string
    ): Promise<Jogador> {
        return this.jogadoresService.consultarJogadorPorId(id)
    }

    @Delete('/:id')
    @UsePipes(ValidationPipe)
    async deletarJogador(
        @Param('id', ValidacaoParametrosPipe) id: string
    ): Promise<void> {
        return this.jogadoresService.deletarJogador(id)
    }
}
