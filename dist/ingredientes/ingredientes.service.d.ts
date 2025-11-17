import { PrismaService } from '../common/prisma.service';
import { CreateIngredienteDto, UpdateIngredienteDto } from './dto';
export declare class IngredientesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateIngredienteDto): Promise<{
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
    }>;
    findAll(): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
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
    }>;
    search(query: string): Promise<{
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
    }[]>;
    update(id: string, dto: UpdateIngredienteDto): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    seedIngredientes(): Promise<{
        message: string;
        count: number;
    }>;
}
