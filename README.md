# myAwesomeSql

a promised base mysql mini sdk with typescript.

## Getting Started

Create a file and replace the file with this helper code.

```ts
import mysql from "mysql";
import { superQueryWrapper } from ".";

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "2006",
  database: "blog-web",
});

export const superQuery = superQueryWrapper(db);
```

### insert a tabel:

```ts
import { superQuery } from "../db";
import myAwesomeSql from "..";

await superQuery({
  query: myAwesomeSql.insert({
    db: "users",
    data: {
      name: "Test",
      email: "test@gmail.com",
    },
  }),
});
```

### select a tabel:

```ts
import { superQuery } from "../db";

interface IUser {
  id: string;
  name: string;
  email: string;
}

await superQuery<IUser[]>({
  query: `SELECT * from users;`,
});
```

### update a table:

```ts
import { superQuery } from "../db";
import myAwesomeSql from "..";

await superQuery({
  query: myAwesomeSql.update({
    db: "users",
    data: {
      name: "Test One",
      email: "test@gmail.com",
    },
    where: `id = "${68}"`,
  }),
});
```

### remove a table:

```ts
import { superQuery } from "../db";
import myAwesomeSql from "..";

await superQuery({
  query: myAwesomeSql.remove({
    db: "users",
    where: `id = "${68}"`,
  }),
});
```

### join a table:

```ts
import { superQuery } from "../db";
import myAwesomeSql from "..";

await superQuery({
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
```
