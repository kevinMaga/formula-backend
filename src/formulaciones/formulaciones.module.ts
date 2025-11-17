import { Module } from '@nestjs/common';
import { FormulacionesService } from './formulaciones.service';
import { FormulacionesController } from './formulaciones.controller';
import { PrismaService } from '../common/prisma.service';

@Module({
  controllers: [FormulacionesController],
  providers: [FormulacionesService, PrismaService],
  exports: [FormulacionesService],
})
export class FormulacionesModule {}