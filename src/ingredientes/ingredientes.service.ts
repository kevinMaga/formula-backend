import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateIngredienteDto, UpdateIngredienteDto } from './dto';

@Injectable()
export class IngredientesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateIngredienteDto) {
    return this.prisma.ingrediente.create({
      data: dto,
    });
  }

  async findAll() {
    return this.prisma.ingrediente.findMany({
      orderBy: { nombre: 'asc' },
    });
  }

  async findOne(id: string) {
    const ingrediente = await this.prisma.ingrediente.findUnique({
      where: { id },
    });

    if (!ingrediente) {
      throw new NotFoundException(`Ingrediente con ID ${id} no encontrado`);
    }

    return ingrediente;
  }

  async search(query: string) {
    if (!query || query.trim().length === 0) {
      return this.findAll();
    }

    return this.prisma.ingrediente.findMany({
      where: {
        nombre: {
          contains: query,
          mode: 'insensitive',
        },
      },
      take: 20,
      orderBy: { nombre: 'asc' },
    });
  }

  async update(id: string, dto: UpdateIngredienteDto) {
    await this.findOne(id); // Verificar que existe

    return this.prisma.ingrediente.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Verificar que existe

    return this.prisma.ingrediente.delete({
      where: { id },
    });
  }

  // Método para crear ingredientes iniciales
  async seedIngredientes() {
    const ingredientes = [
      {
        nombre: 'Harina de trigo',
        descripcion: 'Harina común para panificación',
        calorias: 364,
        proteinas: 10,
        grasas: 1,
        carbohidratos: 76,
        fibra: 2.7,
        sodio: 2,
        unidadBase: 'g',
      },
      {
        nombre: 'Azúcar blanca',
        descripcion: 'Azúcar refinada',
        calorias: 387,
        proteinas: 0,
        grasas: 0,
        carbohidratos: 100,
        fibra: 0,
        sodio: 1,
        unidadBase: 'g',
      },
      {
        nombre: 'Leche entera',
        descripcion: 'Leche de vaca entera',
        calorias: 61,
        proteinas: 3.2,
        grasas: 3.3,
        carbohidratos: 4.8,
        fibra: 0,
        sodio: 49,
        unidadBase: 'ml',
      },
      {
        nombre: 'Huevo',
        descripcion: 'Huevo de gallina',
        calorias: 155,
        proteinas: 13,
        grasas: 11,
        carbohidratos: 1.1,
        fibra: 0,
        sodio: 124,
        unidadBase: 'unidad',
      },
      {
        nombre: 'Mantequilla',
        descripcion: 'Mantequilla sin sal',
        calorias: 717,
        proteinas: 0.9,
        grasas: 81,
        carbohidratos: 0.1,
        fibra: 0,
        sodio: 11,
        unidadBase: 'g',
      },
      {
        nombre: 'Sal',
        descripcion: 'Sal de mesa',
        calorias: 0,
        proteinas: 0,
        grasas: 0,
        carbohidratos: 0,
        fibra: 0,
        sodio: 38758,
        unidadBase: 'g',
      },
      {
        nombre: 'Chocolate oscuro',
        descripcion: 'Chocolate 70% cacao',
        calorias: 546,
        proteinas: 7.8,
        grasas: 31,
        carbohidratos: 61,
        fibra: 11,
        sodio: 20,
        unidadBase: 'g',
      },
      {
        nombre: 'Vainilla',
        descripcion: 'Extracto de vainilla',
        calorias: 288,
        proteinas: 0.1,
        grasas: 0.1,
        carbohidratos: 12.7,
        fibra: 0,
        sodio: 9,
        unidadBase: 'ml',
      },
    ];

    for (const ing of ingredientes) {
      await this.prisma.ingrediente.upsert({
        where: { nombre: ing.nombre },
        update: {},
        create: ing,
      });
    }

    return { message: 'Ingredientes creados exitosamente', count: ingredientes.length };
  }
}