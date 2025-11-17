import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para el frontend (Tu configuración)
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });

  // Habilitar validación global (Tu configuración)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
}

// --- ¡ESTA ES LA PARTE QUE FALTA! ---
// Llama a la función bootstrap y atrapa cualquier error si falla
bootstrap().catch((err) => {
  console.error('❌ Error al iniciar el servidor:', err);
  process.exit(1);
});