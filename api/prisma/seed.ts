import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.offer.deleteMany();
  await prisma.offer.create({
    data: {
      parentName: 'Ralf Siewert',
      startStreet: 'Dorotheenstr. 39',
      startZip: '53111',
      startCity: 'Bonn',
      dateOfTransportation: '2023-11-28T16:00:00.000Z',
      modeOfTransportation: 'car',
      direction: 'to_school',
    },
  });
  await prisma.offer.create({
    data: {
      parentName: 'Sascha Rose',
      startStreet: 'Dorfstr. 1',
      startZip: '53508',
      startCity: 'Mayschoß',
      dateOfTransportation: '2023-11-29T09:00:00.000Z',
      modeOfTransportation: 'walk',
      direction: 'both',
    },
  });
  await prisma.offer.create({
    data: {
      parentName: 'Christian Gayuoni',
      startStreet: 'Teststraße',
      startZip: '53123',
      startCity: 'Bonn',
      dateOfTransportation: '2023-11-27T11:00:00.000Z',
      modeOfTransportation: 'bus',
      direction: 'from_school',
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
