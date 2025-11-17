import { PrismaService } from '../common/prisma.service';
export declare class CategoriasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        nombre: string;
        id: string;
        descripcion: string | null;
    }[]>;
    findOne(id: string): Promise<{
        nombre: string;
        id: string;
        descripcion: string | null;
    }>;
    seedCategorias(): Promise<{
        message: string;
        categorias: {
            nombre: string;
            descripcion: string;
        }[];
    }>;
}
