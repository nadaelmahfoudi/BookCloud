import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activer CORS
  app.enableCors({
    origin: 'http://localhost:5173', // URL de votre frontend React
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Méthodes autorisées
    credentials: true, // Pour permettre l'envoi des cookies (si nécessaire)
  });

  const port = process.env.PORT ?? 3000; // Utilisation de la variable d'environnement PORT
  await app.listen(port, '0.0.0.0');


  console.log(`Application running on: http://localhost:${port}`);
}
bootstrap();
