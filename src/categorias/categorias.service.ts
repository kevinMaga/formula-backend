import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.categoria.findMany({
      orderBy: { nombre: 'asc' },
    });
  }

  async findOne(id: string) {
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
}