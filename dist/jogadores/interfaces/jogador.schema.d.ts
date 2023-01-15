import * as mongoose from 'mongoose';
export declare const JogadorSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    collection: string;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    email?: string;
    name?: string;
    phone_number?: string;
    ranking?: string;
    ranking_position?: number;
    picture_url?: string;
}>;
