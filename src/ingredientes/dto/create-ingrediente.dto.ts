import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateIngredienteDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNumber()
  @Min(0)
  calorias: number;

  @IsNumber()
  @Min(0)
  proteinas: number;

  @IsNumber()
  @Min(0)
  grasas: number;

  @IsNumber()
  @Min(0)
  carbohidratos: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  fibra?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  sodio?: number;

  @IsString()
  unidadBase: string; // 'g', 'ml', 'unidad'
}