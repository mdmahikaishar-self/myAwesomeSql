import { superQuery } from "../db";
import myAwesomeSql from "..";

async function main() {
  // update User
  await superQuery({
    query: myAwesomeSql.update({
      db: "users",
      data: {
        name: "Test One",
        email: "test@gmail.com",
        createdAt: new Date().toISOString(),
      },
      where: `id = "${68}"`,
    }),
  });
}

main();
