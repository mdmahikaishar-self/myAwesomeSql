import { superQuery } from "../db";
import myAwesomeSql from "..";

async function main() {
  // create User
  await superQuery({
    query: myAwesomeSql.insert({
      db: "users",
      data: {
        name: "Test",
        email: "test@gmail.com",
        createdAt: new Date().toISOString(),
      },
    }),
  });
}

main();
