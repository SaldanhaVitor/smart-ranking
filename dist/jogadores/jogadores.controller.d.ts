import { AtualizarJogador } from './dtos/atualizar-jogador.dto';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { JogadoresService } from './jogadores.service';
export declare class JogadoresController {
    private readonly jogadoresService;
    constructor(jogadoresService: JogadoresService);
    criarJogador(jogadorDto: CriarJogadorDto): Promise<Jogador>;
    atualizarJogador(jogadorDto: AtualizarJogador, id: string): Promise<Jogador>;
    consultarJogadores(): Promise<Jogador[]>;
    consultarJogadorPorId(id: string): Promise<Jogador>;
    deletarJogador(id: string): Promise<void>;
}
