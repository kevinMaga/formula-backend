"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
let CategoriasService = class CategoriasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.categoria.findMany({
            orderBy: { nombre: 'asc' },
        });
    }
    async findOne(id) {
        return this.prisma.categoria.findUnique({
            where: { id },
        });
    }
    async seedCategorias() {
        const categorias = [
            { nombre: 'Bebidas', descripcion: 'Bebidas y líquidos' },
            { nombre: 'Panadería', descripcion: 'Pan y productos horneados' },
            { nombre: 'Lácteos', descripcion: 'Productos lácteos' },
            { nombre: 'Snacks', descripcion: 'Aperitivos y bocadillos' },
            { nombre: 'Confitería', descripcion: 'Dulces y golosinas' },
            { nombre: 'Otros', descripcion: 'Otros productos alimenticios' },
        ];
        for (const cat of categorias) {
            await this.prisma.categoria.upsert({
                where: { nombre: cat.nombre },
                update: {},
                create: cat,
            });
        }
        return { message: 'Categorías creadas exitosamente', categorias };
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map