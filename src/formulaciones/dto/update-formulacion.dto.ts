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
// Asegúrate que la ruta a este DTO sea correcta
import { IngredienteFormulacionDto } from './ingrediente-formulacion.dto';

export class UpdateFormulacionDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsUUID()
  categoriaId?: string;

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1, { message: 'Debe incluir al menos 1 ingrediente' })
  @ArrayMaxSize(5, { message: 'Máximo 5 ingredientes permitidos (plan Emprendedor)' })
  @ValidateNested({ each: true })
  @Type(() => IngredienteFormulacionDto)
  ingredientes?: IngredienteFormulacionDto[];
}