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

await knex.schema.dropTableIfExists("offers");
// await knex.schema.dropTableIfExists("customers");

await knex.schema.createTable("offers", function (table) {
  table.increments().primary();
  table.string("parentEmail").notNullable().unique();
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

for (const user of users) {
  const primaryEmailAddress = user.emailAddresses.find(
    (emailAddress) => emailAddress.id === user.primaryEmailAddressId
  );
  const randomName = uniqueNamesGenerator({ dictionaries: [names] });
  await knex("offers").insert({
    id: user.id,
    parentName: randomName,
    parentEmail: primaryEmailAddress.emailAddress,
  });
  await knex("appointments").insert({
    customerId: user.id,
    service: "Oil Change",
    startTime: "2021-06-01T09:00:00.000Z",
  });
}

await knex.destroy();
