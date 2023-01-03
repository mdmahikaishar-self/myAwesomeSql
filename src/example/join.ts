import {superQuery } from "../db";
import myAwesomeSql from "..";

async function main() {
  // join Post with User
  const data = await superQuery({
    query: myAwesomeSql.join({
      db: {
        name: "posts",
        nick: "post",
        keys: ["title", "img", "describtion"],
      },
      db2: { name: "users", nick: "user", keys: ["name", "img"] },
      on: `post.userId = user.id`,
      where: `post.id = "${4}"`,
    }),
  });

  console.log(data);
}

main();
