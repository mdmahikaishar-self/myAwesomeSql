import { superQuery } from "../db";
import myAwesomeSql from "..";

async function main() {
  // remove User
  await superQuery({
    query: myAwesomeSql.remove({
      db: "users",
      where: `id = "${68}"`,
    }),
  });
}

main();
