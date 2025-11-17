import { FormulacionesService } from './formulaciones.service';
import { CreateFormulacionDto, UpdateFormulacionDto } from './dto';
export declare class FormulacionesController {
    private readonly formulacionesService;
    constructor(formulacionesService: FormulacionesService);
    create(req: any, dto: CreateFormulacionDto): Promise<{
        usuario: {
            email: string;
            nombre: string;
            id: string;
        };
        categoria: {
            nombre: string;
            id: string;
            descripcion: string | null;
        };
        ingredientes: ({
            ingrediente: {
                nombre: string;
                id: string;
                descripcion: string | null;
                calorias: number;
                proteinas: number;
                grasas: number;
                carbohidratos: number;
                fibra: number | null;
                sodio: number | null;
                unidadBase: string;
            };
        } & {
            id: string;
            unidad: string;
            ingredienteId: string;
            cantidad: number;
            formulacionId: string;
        })[];
    } & {
        nombre: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        categoriaId: string;
        usuarioId: string;
    }>;
    findAll(req: any): Promise<({
        categoria: {
            nombre: string;
            id: string;
            descripcion: string | null;
        };
        ingredientes: ({
            ingrediente: {
                nombre: string;
                id: string;
                descripcion: string | null;
                calorias: number;
                proteinas: number;
                grasas: number;
                carbohidratos: number;
                fibra: number | null;
                sodio: number | null;
                unidadBase: string;
            };
        } & {
            id: string;
            unidad: string;
            ingredienteId: string;
            cantidad: number;
            formulacionId: string;
        })[];
    } & {
        nombre: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        categoriaId: string;
        usuarioId: string;
    })[]>;
    findOne(id: string, req: any): Promise<{
        usuario: {
            email: string;
            nombre: string;
            id: string;
        };
        categoria: {
            nombre: string;
            id: string;
            descripcion: string | null;
        };
        ingredientes: ({
            ingrediente: {
                nombre: string;
                id: string;
                descripcion: string | null;
                calorias: number;
                proteinas: number;
                grasas: number;
                carbohidratos: number;
                fibra: number | null;
                sodio: number | null;
                unidadBase: string;
            };
        } & {
            id: string;
            unidad: string;
            ingredienteId: string;
            cantidad: number;
            formulacionId: string;
        })[];
    } & {
        nombre: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        categoriaId: string;
        usuarioId: string;
    }>;
    update(id: string, req: any, dto: UpdateFormulacionDto): Promise<{
        categoria: {
            nombre: string;
            id: string;
            descripcion: string | null;
        };
        ingredientes: ({
            ingrediente: {
                nombre: string;
                id: string;
                descripcion: string | null;
                calorias: number;
                proteinas: number;
                grasas: number;
                carbohidratos: number;
                fibra: number | null;
                sodio: number | null;
                unidadBase: string;
            };
        } & {
            id: string;
            unidad: string;
            ingredienteId: string;
            cantidad: number;
            formulacionId: string;
        })[];
    } & {
        nombre: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        categoriaId: string;
        usuarioId: string;
    }>;
    remove(id: string, req: any): Promise<{
        nombre: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        categoriaId: string;
        usuarioId: string;
    }>;
}
