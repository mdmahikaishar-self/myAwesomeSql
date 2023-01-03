import { IJoin } from "../types";
import { toTitle } from "../utils/case";

/**
 * join
 * --------
 * -> `SELECT {dbKeys}, {db2ndKeys} {statement} ON {on} WHERE {where}`
 */
export function join({ db, db2, on, where }: IJoin) {
  const dbKeys = formatAsKeys(db.keys, db.nick);
  const db2ndKeys = formatAsDotKeys(db2.keys, db2.nick);
  const statement = `FROM ${db2.name} as ${db2.nick} CROSS JOIN ${db.name} as ${db.nick}`;
  const onCondition = on ? ` ON ${on}` : "";
  const whereCondition = where ? ` WHERE ${where}` : "";

  return (
    `SELECT ${dbKeys}, ${db2ndKeys} ${statement}` + onCondition + whereCondition
  );
}

/**
 * formatAsKeys
 * -----------------
 * -> post.name as name, post.img as img
 */
function formatAsKeys(keys: string[], name: string) {
  return keys
    .map((key, index) => {
      const sep = index < keys.length - 1 ? ", " : "";

      return `${name}.${key} as ${key}` + sep;
    })
    .join("");
}

/**
 * formatAsDotKeys
 * -------------------
 * -> post.name as postName, post.img as postImg
 */
function formatAsDotKeys(keys: string[], name: string) {
  return keys
    .map((key, index) => {
      const sep = index < keys.length - 1 ? ", " : "";

      return `${name}.${key} as ${name}${toTitle(key)}` + sep;
    })
    .join("");
}
