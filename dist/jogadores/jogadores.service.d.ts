import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { Model } from 'mongoose';
import { AtualizarJogador } from './dtos/atualizar-jogador.dto';
export declare class JogadoresService {
    private readonly jogadorModel;
    constructor(jogadorModel: Model<Jogador>);
    consultarJogadorPorId(id: string): Promise<Jogador>;
    criarJogador(jogadorDto: CriarJogadorDto): Promise<Jogador>;
    consultarJogadores(): Promise<Jogador[]>;
    deletarJogador(id: string): Promise<any>;
    atualizarJogador(id: string, jogadorDto: AtualizarJogador): Promise<Jogador>;
}
