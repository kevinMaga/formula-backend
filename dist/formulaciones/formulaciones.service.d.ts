import { PrismaService } from '../common/prisma.service';
import { CreateFormulacionDto, UpdateFormulacionDto } from './dto';
export declare class FormulacionesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(usuarioId: string, dto: CreateFormulacionDto): Promise<{
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
    findAll(usuarioId: string): Promise<({
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
    findOne(id: string, usuarioId: string): Promise<{
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
    update(id: string, usuarioId: string, dto: UpdateFormulacionDto): Promise<{
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
    remove(id: string, usuarioId: string): Promise<{
        nombre: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        descripcion: string | null;
        categoriaId: string;
        usuarioId: string;
    }>;
}
