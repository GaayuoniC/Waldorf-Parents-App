import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OfferController } from './offer.controller';
import { PrismaService } from './prisma.service';
import { RequestController } from './request.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, OfferController, RequestController],
  providers: [AppService, PrismaService, Logger],
})
export class AppModule {}
