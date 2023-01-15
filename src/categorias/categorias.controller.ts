import { Body, Controller, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { ValidacaoParametrosPipe } from 'src/common/pipes/validacao-parametros.pipe';

@Controller('api/v1/categorias')
export class CategoriasController {
    constructor(private readonly categoriaService: CategoriasService) { }

    @Post()
    @UsePipes(ValidationPipe)
    async criarCategoria(
        @Body() categoria: CriarCategoriaDto
    ): Promise<Categoria> {
        return await this.categoriaService.criarCategoria(categoria)
    }

    @Get()
    async buscarCategorias(
    ): Promise<Categoria[]> {
        return await this.categoriaService.buscarCategorias()
    }

    @Get('/:id')
    async buscarCategoriaPorId(
        @Param('id', ValidacaoParametrosPipe) id: string
    ): Promise<Categoria> {
        return await this.categoriaService.buscarCategoriaPorId(id)
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async atualizarCategoria(
        @Body() atualizarCategoriaDto: AtualizarCategoriaDto,
        @Param('id', ValidacaoParametrosPipe) id: string
    ): Promise<Categoria> {
        return await this.categoriaService.atualizarCategoria(id, atualizarCategoriaDto)
    }

    @Patch('/:categoria/jogador/:idJogador')
    async atribuirCategoriaJogador(
        @Param() params: string[]
    ): Promise<Categoria> {
        return await this.categoriaService.atribuirCategoriaJogador(params)
    }
}
