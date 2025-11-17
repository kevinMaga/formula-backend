import { IngredienteFormulacionDto } from './ingrediente-formulacion.dto';
export declare class CreateFormulacionDto {
    nombre: string;
    descripcion?: string;
    categoriaId: string;
    ingredientes: IngredienteFormulacionDto[];
}
