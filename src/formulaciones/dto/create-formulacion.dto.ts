import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  ArrayMaxSize,
  IsUUID,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IngredienteFormulacionDto } from './ingrediente-formulacion.dto';

export class CreateFormulacionDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsUUID()
  categoriaId: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'Debe incluir al menos 1 ingrediente' })
  @ArrayMaxSize(5, { message: 'Máximo 5 ingredientes permitidos (plan Emprendedor)' })
  @ValidateNested({ each: true })
  @Type(() => IngredienteFormulacionDto)
  ingredientes: IngredienteFormulacionDto[];
}