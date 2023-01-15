import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class ValidacaoParametrosPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
