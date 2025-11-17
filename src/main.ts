import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // CORS - permite tu frontend de Vercel
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://formula-frontend-rogj0qmox-kevinmagas-projects.vercel.app/', // Cambia por tu URL real
      /\.vercel\.app$/, // Permite cualquier subdominio de vercel.app
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  // Validación global
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0'); // Importante: escuchar en 0.0.0.0
  console.log(`🚀 Backend corriendo en puerto ${port}`);
}
bootstrap();