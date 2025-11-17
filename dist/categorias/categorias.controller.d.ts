import { CategoriasService } from './categorias.service';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
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
    seed(): Promise<{
        message: string;
        categorias: {
            nombre: string;
            descripcion: string;
        }[];
    }>;
}
