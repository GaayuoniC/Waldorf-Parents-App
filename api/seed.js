// import knexBuilder from "knex";

// const knex = knexBuilder({
//   client: "better-sqlite3",
//   connection: {
//     filename: "./db/car-service-db.sqlite",
//   },
// });
import "dotenv/config";
import clerkClient from "@clerk/clerk-sdk-node";
import { knex } from "./util/knex.js";
import { uniqueNamesGenerator, names } from "unique-names-generator";
import dayjs from "dayjs";

const defaultNames = {
  "gayuoni@hotmail.com": {
    name: "Christian Gayuoni",
  },
  "gayuoni@proton.me": {
    name: "Jane Doe",
  },
  "ralf.siewert@actyvyst.com": {
    name: "Ralf Siewert",
  },
  "isewat@gmail.com": {
    name: "Isabel Sewat",
  },
};

const addresses = [
  { street: "Dorotheenstr. 39", zip: "53111", city: "Bonn" },
  { street: "Am Markt 7", zip: "53115", city: "Bonn" },
  { street: "Maxstraße 14", zip: "53114", city: "Bonn" },
  { street: "Georgstraße 27", zip: "53117", city: "Bonn" },
  { street: "Luisenstraße 24b", zip: "53111", city: "Bonn" },
  { street: "Wolfstraße 114", zip: "53115", city: "Bonn" },
  { street: "Mozartstraße 19", zip: "53115", city: "Bonn" },
];

await knex.schema.dropTableIfExists("offers");
// await knex.schema.dropTableIfExists("customers");

await knex.schema.createTable("offers", function (table) {
  table.increments().primary();
  table.string("userId").notNullable();
  table.string("parentEmail").notNullable();
  table.string("acceptedByUserId");
  table.string("acceptedByEmail");
  table.string("acceptedByName");
  table.string("acceptedMessage");
  table.string("parentName");
  table.string("startStreet");
  table.string("startZip");
  table.string("startCity");
  table.dateTime("dateOfTransportation");
  table.string("modeOfTransportation");
  table.string("direction");
  table.integer("numberOfChildren");
  table.boolean("isRequest");
});

const users = await clerkClient.users.getUserList({
  orderBy: "-created_at",
  limit: 10,
});
console.log("users");
console.log(users.map((user) => user.emailAddresses));

let addressIndex = 0;
for (const user of users) {
  const primaryEmailAddress = user.emailAddresses.find(
    (emailAddress) => emailAddress.id === user.primaryEmailAddressId
  );

  const randomName =
    defaultNames[primaryEmailAddress.emailAddress]?.name ||
    uniqueNamesGenerator({ dictionaries: [names] });
  const randomAddress = addresses[addressIndex];
  addressIndex++;
  const randomDate = dayjs()
    .add(Math.floor(Math.random() * 10), "day")
    .format("YYYY-MM-DDTHH:mm:ss.SSSZ");
  const randomMode = ["car", "walk", "bus"][Math.floor(Math.random() * 3)];
  const randomDirection = ["to_school", "from_school"][
    Math.floor(Math.random() * 2)
  ];
  const randomNumberOfChildren = Math.floor(Math.random() * 3) + 1;
  const randomIsRequest = Math.random() > 0.5;
  await knex("offers").insert({
    userId: user.id,
    parentName: randomName,
    parentEmail: primaryEmailAddress.emailAddress,
    startStreet: randomAddress.street,
    startZip: randomAddress.zip,
    startCity: randomAddress.city,
    dateOfTransportation: randomDate,
    modeOfTransportation: randomMode,
    direction: randomDirection,
    numberOfChildren: randomNumberOfChildren,
    isRequest: randomIsRequest,
  });
}

await knex.destroy();
