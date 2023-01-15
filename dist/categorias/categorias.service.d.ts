import { Model } from 'mongoose';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { AtualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
export declare class CategoriasService {
    private readonly categoriaModel;
    private readonly jogadoresService;
    constructor(categoriaModel: Model<Categoria>, jogadoresService: JogadoresService);
    criarCategoria(categoriaDto: CriarCategoriaDto): Promise<Categoria>;
    buscarCategorias(): Promise<Categoria[]>;
    buscarCategoriaPorId(id: string): Promise<Categoria>;
    atualizarCategoria(id: string, atualizarCategoriaDto: AtualizarCategoriaDto): Promise<Categoria>;
    atribuirCategoriaJogador(params: string[]): Promise<Categoria>;
}
