import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreateFormulacionDto, UpdateFormulacionDto } from './dto';

@Injectable()
export class FormulacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(usuarioId: string, dto: CreateFormulacionDto) {
    // Validar que no tenga más de 5 ingredientes (plan Emprendedor)
    if (dto.ingredientes && dto.ingredientes.length > 5) {
      throw new ForbiddenException('El plan Emprendedor permite máximo 5 ingredientes');
    }

    // Verificar que la categoría existe
    const categoria = await this.prisma.categoria.findUnique({
      where: { id: dto.categoriaId },
    });

    if (!categoria) {
      throw new NotFoundException('Categoría no encontrada');
    }

    // Verificar que todos los ingredientes existen
    for (const ing of dto.ingredientes) {
      const ingrediente = await this.prisma.ingrediente.findUnique({
        where: { id: ing.ingredienteId },
      });
      if (!ingrediente) {
        throw new NotFoundException(`Ingrediente con ID ${ing.ingredienteId} no encontrado`);
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

  async findAll(usuarioId: string) {
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

  async findOne(id: string, usuarioId: string) {
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
      throw new NotFoundException('Formulación no encontrada');
    }

    if (formulacion.usuarioId !== usuarioId) {
      throw new ForbiddenException('No tienes acceso a esta formulación');
    }

    return formulacion;
  }

  async update(id: string, usuarioId: string, dto: UpdateFormulacionDto) {
    // Verificar que existe y que el usuario tiene acceso
    await this.findOne(id, usuarioId);

    // Validar límite de ingredientes si se actualizan
    if (dto.ingredientes && dto.ingredientes.length > 5) {
      throw new ForbiddenException('El plan Emprendedor permite máximo 5 ingredientes');
    }

    // Verificar categoría si se actualiza
    if (dto.categoriaId) {
      const categoria = await this.prisma.categoria.findUnique({
        where: { id: dto.categoriaId },
      });
      if (!categoria) {
        throw new NotFoundException('Categoría no encontrada');
      }
    }

    // Si hay ingredientes, verificar que existan
    if (dto.ingredientes) {
      for (const ing of dto.ingredientes) {
        const ingrediente = await this.prisma.ingrediente.findUnique({
          where: { id: ing.ingredienteId },
        });
        if (!ingrediente) {
          throw new NotFoundException(`Ingrediente con ID ${ing.ingredienteId} no encontrado`);
        }
      }

      // Eliminar ingredientes viejos
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

  async remove(id: string, usuarioId: string) {
    // Verificar que existe y que el usuario tiene acceso
    await this.findOne(id, usuarioId);

    return this.prisma.formulacion.delete({
      where: { id },
    });
  }
}