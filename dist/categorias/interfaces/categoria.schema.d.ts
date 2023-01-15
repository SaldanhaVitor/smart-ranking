import * as mongoose from "mongoose";
export declare const CategoriaSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    jogadores: mongoose.Types.ObjectId[];
    eventos: {
        nome?: string;
        operacao?: string;
        valor?: number;
    }[];
    categoria?: string;
    descricao?: string;
}>;
