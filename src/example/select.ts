import { superQuery } from "../db";

interface IUser {
  id: string;
  name: string;
  email: string;
}

async function main() {
  // select all Users
  const users = await superQuery<IUser[]>({
    query: `SELECT * from users;`,
  });

  console.log(users);
}

main();
