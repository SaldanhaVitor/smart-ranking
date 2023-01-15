import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class CategoriasValidacaoParametrosPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) throw new BadRequestException(`${metadata.data} is required`)
        return value
    }
}