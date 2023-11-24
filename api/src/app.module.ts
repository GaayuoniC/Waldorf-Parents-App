import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, OfferController],
  providers: [AppService, PrismaService, OfferService, Logger],
})
export class AppModule {}
