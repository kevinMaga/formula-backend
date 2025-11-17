import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { FormulacionesModule } from './formulaciones/formulaciones.module';
import { CategoriasModule } from './categorias/categorias.module';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CategoriasModule,
    IngredientesModule,
    FormulacionesModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}