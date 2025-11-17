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
exports.FormulacionesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma.service");
let FormulacionesService = class FormulacionesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(usuarioId, dto) {
        if (dto.ingredientes && dto.ingredientes.length > 5) {
            throw new common_1.ForbiddenException('El plan Emprendedor permite máximo 5 ingredientes');
        }
        const categoria = await this.prisma.categoria.findUnique({
            where: { id: dto.categoriaId },
        });
        if (!categoria) {
            throw new common_1.NotFoundException('Categoría no encontrada');
        }
        for (const ing of dto.ingredientes) {
            const ingrediente = await this.prisma.ingrediente.findUnique({
                where: { id: ing.ingredienteId },
            });
            if (!ingrediente) {
                throw new common_1.NotFoundException(`Ingrediente con ID ${ing.ingredienteId} no encontrado`);
            }
        }
        return this.prisma.formulacion.create({
            data: {
                nombre: dto.nombre,
                descripcion: dto.descripcion,
                usuarioId,
                categoriaId: dto.categoriaId,
                ingredientes: {
                    create: dto.ingredientes.map((ing) => ({
                        ingredienteId: ing.ingredienteId,
                        cantidad: ing.cantidad,
                        unidad: ing.unidad,
                    })),
                },
            },
            include: {
                ingredientes: {
                    include: {
                        ingrediente: true,
                    },
                },
                categoria: true,
                usuario: {
                    select: {
                        id: true,
                        nombre: true,
                        email: true,
                    },
                },
            },
        });
    }
    async findAll(usuarioId) {
        return this.prisma.formulacion.findMany({
            where: { usuarioId },
            include: {
                categoria: true,
                ingredientes: {
                    include: {
                        ingrediente: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id, usuarioId) {
        const formulacion = await this.prisma.formulacion.findUnique({
            where: { id },
            include: {
                categoria: true,
                ingredientes: {
                    include: {
                        ingrediente: true,
                    },
                },
                usuario: {
                    select: {
                        id: true,
                        nombre: true,
                        email: true,
                    },
                },
            },
        });
        if (!formulacion) {
            throw new common_1.NotFoundException('Formulación no encontrada');
        }
        if (formulacion.usuarioId !== usuarioId) {
            throw new common_1.ForbiddenException('No tienes acceso a esta formulación');
        }
        return formulacion;
    }
    async update(id, usuarioId, dto) {
        await this.findOne(id, usuarioId);
        if (dto.ingredientes && dto.ingredientes.length > 5) {
            throw new common_1.ForbiddenException('El plan Emprendedor permite máximo 5 ingredientes');
        }
        if (dto.categoriaId) {
            const categoria = await this.prisma.categoria.findUnique({
                where: { id: dto.categoriaId },
            });
            if (!categoria) {
                throw new common_1.NotFoundException('Categoría no encontrada');
            }
        }
        if (dto.ingredientes) {
            for (const ing of dto.ingredientes) {
                const ingrediente = await this.prisma.ingrediente.findUnique({
                    where: { id: ing.ingredienteId },
                });
                if (!ingrediente) {
                    throw new common_1.NotFoundException(`Ingrediente con ID ${ing.ingredienteId} no encontrado`);
                }
            }
            await this.prisma.formulacionIngrediente.deleteMany({
                where: { formulacionId: id },
            });
        }
        return this.prisma.formulacion.update({
            where: { id },
            data: {
                ...(dto.nombre && { nombre: dto.nombre }),
                ...(dto.descripcion !== undefined && { descripcion: dto.descripcion }),
                ...(dto.categoriaId && { categoriaId: dto.categoriaId }),
                ...(dto.ingredientes && {
                    ingredientes: {
                        create: dto.ingredientes.map((ing) => ({
                            ingredienteId: ing.ingredienteId,
                            cantidad: ing.cantidad,
                            unidad: ing.unidad,
                        })),
                    },
                }),
            },
            include: {
                ingredientes: {
                    include: {
                        ingrediente: true,
                    },
                },
                categoria: true,
            },
        });
    }
    async remove(id, usuarioId) {
        await this.findOne(id, usuarioId);
        return this.prisma.formulacion.delete({
            where: { id },
        });
    }
};
exports.FormulacionesService = FormulacionesService;
exports.FormulacionesService = FormulacionesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FormulacionesService);
//# sourceMappingURL=formulaciones.service.js.map