import knexBuilder from "knex";

export const knex = knexBuilder({
  client: "better-sqlite3",
  connection: {
    filename: "./db/waldorf-db.sqlite",
  },
  useNullAsDefault: true,
});
