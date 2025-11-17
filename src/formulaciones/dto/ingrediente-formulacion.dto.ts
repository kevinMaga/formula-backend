import { IsNumber, IsString, IsUUID, Min } from 'class-validator';

export class IngredienteFormulacionDto {
  @IsUUID()
  ingredienteId: string;

  @IsNumber()
  @Min(0.01)
  cantidad: number;

  @IsString()
  unidad: string;
}