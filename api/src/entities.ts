import { ApiProperty } from '@nestjs/swagger';
import { Offer } from '@prisma/client';

export class OfferEntity {
  @ApiProperty({
    description: 'Id',
    example: 1,
  })
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
  constructor(offer: Offer) {
    this.id = offer.id;
    this.parentName = offer.parentName;
    this.startStreet = offer.startStreet;
    this.startZip = offer.startZip;
    this.startCity = offer.startCity;
    this.dateOfTransportation = offer.dateOfTransportation;
    this.modeOfTransportation = offer.modeOfTransportation;
    this.direction = offer.direction;
  }
}
