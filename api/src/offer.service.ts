import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Offer, Prisma } from '@prisma/client';

import { PostOfferRequest } from './offer.controller';
import { OfferEntity } from './entities';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService) {}

  async offer(
    offerWhereUniqueInput: Prisma.OfferWhereUniqueInput,
  ): Promise<OfferEntity | null> {
    return this.prisma.offer.findUnique({
      where: offerWhereUniqueInput,
    });
  }

  async offers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OfferWhereUniqueInput;
    where?: Prisma.OfferWhereInput;
    orderBy?: Prisma.OfferOrderByWithRelationInput;
  }): Promise<OfferEntity[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.offer.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createOffer(data: PostOfferRequest): Promise<OfferEntity> {
    return this.prisma.offer.create({
      data,
    });
  }

  async updateOffer(params: {
    where: Prisma.OfferWhereUniqueInput;
    data: Prisma.OfferUpdateInput;
  }): Promise<Offer> {
    const { where, data } = params;
    return this.prisma.offer.update({
      data,
      where,
    });
  }

  async deleteOffer(where: Prisma.OfferWhereUniqueInput): Promise<Offer> {
    return this.prisma.offer.delete({
      where,
    });
  }
}
