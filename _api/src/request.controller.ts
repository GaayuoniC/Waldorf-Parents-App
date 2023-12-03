import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OfferEntity } from './entities';
import { PrismaService } from './prisma.service';

export class PostRequestRequest {
  id: number;

  @ApiProperty({
    description: 'Parent name',
    example: 'John Doe',
  })
  parentName: string;

  @ApiProperty({
    description: 'Start address: street & house number',
    example: 'Dorfstr. 1',
  })
  startStreet: string;

  @ApiProperty({
    description: 'Start address: zip code',
    example: '12345',
  })
  startZip: string;

  @ApiProperty({
    description: 'Start address: city',
    example: 'Entenhausen',
  })
  startCity: string;

  @ApiProperty({
    description: 'Date',
    example: '2023-12-06T09:00:00.000Z',
  })
  dateOfTransportation: Date;

  @ApiProperty({
    description: 'Mode of transportation: car, bus, train, walk',
    example: 'walk',
  })
  modeOfTransportation: string;

  @ApiProperty({
    description: 'Direction: to_school, from_school, both',
    example: 'to_school',
  })
  direction: string;

  @ApiProperty({
    description: 'Number of children',
    example: 2,
  })
  numberOfChildren: number;
}

class RequestResponse extends OfferEntity {}

@ApiTags('Requests')
@Controller('/requests')
export class RequestController {
  constructor(
    private readonly logger: Logger,
    private prisma: PrismaService,
  ) {}

  @Post('/')
  @ApiResponse({
    status: 201,
    description: 'Request created',
    type: RequestResponse,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request body',
  })
  @ApiResponse({
    status: 500,
    description: 'Unexpected error',
  })
  async createOffer(
    @Body() offerData: PostRequestRequest,
  ): Promise<RequestResponse> {
    try {
      const offer = await this.prisma.offer.create({
        data: { ...offerData, isRequest: true },
      });
      return offer;
    } catch (err) {
      console.log(err);
      switch (err.code) {
        default:
          throw new InternalServerErrorException('Unexpected error');
      }
    }
  }

  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'List of requests',
    type: [RequestResponse],
  })
  @ApiResponse({
    status: 500,
    description: 'Unexpected error',
  })
  async getOffers(): Promise<RequestResponse[]> {
    const offers = await this.prisma.offer.findMany({
      where: { isRequest: true },
    });
    return offers;
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    description: 'request Id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Request',
    type: RequestResponse,
  })
  @ApiResponse({
    status: 404,
    description: 'Request not found',
  })
  @ApiResponse({
    status: 500,
    description: 'Unexpected error',
  })
  async getOffer(@Param('id') id: string): Promise<RequestResponse> {
    try {
      const offer = await this.prisma.offer.findUnique({
        where: { id: Number(id), isRequest: true },
      });
      if (!offer) throw { message: 'request not found', code: '404' };
      return offer;
    } catch (error) {
      this.logger.error(error);
      switch (error.code) {
        case '404':
          throw new NotFoundException('Request not found');
        default:
          throw new InternalServerErrorException('Unexpected error');
      }
    }
  }

  @Delete('/:id')
  @ApiResponse({
    status: 204,
    description: 'Request deleted',
  })
  @ApiResponse({
    status: 404,
    description: "Request doesn't exist",
  })
  @ApiResponse({
    status: 500,
    description: 'Unexpected error',
  })
  @ApiParam({
    name: 'id',
    description: 'Request Id',
    type: Number,
    example: 1,
  })
  @HttpCode(204)
  async deleteOffer(@Param('id') id: number): Promise<void> {
    try {
      await this.prisma.offer.delete({ where: { id } });
    } catch (err) {
      this.logger.error(err);
      switch (err.code) {
        case 'P2025':
          throw new NotFoundException("Request doesn't exist");
        default:
          throw new InternalServerErrorException('Unexpected error');
      }
    }
  }
}
