import { Module } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [IngredientesController],
  providers: [IngredientesService, PrismaService],
  exports: [IngredientesService],
})
export class IngredientesModule {}
