import { CategoriasService } from './categorias.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
export declare class CategoriasController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriasService);
    criarCategoria(categoria: CriarCategoriaDto): Promise<Categoria>;
    buscarCategorias(): Promise<Categoria[]>;
    buscarCategoriaPorId(id: string): Promise<Categoria>;
    atualizarCategoria(atualizarCategoriaDto: AtualizarCategoriaDto, id: string): Promise<Categoria>;
    atribuirCategoriaJogador(params: string[]): Promise<Categoria>;
}
