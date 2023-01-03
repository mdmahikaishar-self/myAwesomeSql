import { IInsert } from "../types";

/**
 * insert
 * ----------
 * -> `INSERT INTO {db} ({keys}) VALUES ({values})`
 */
export function insert({ db, data }: IInsert) {
  const _keys = Object.keys(data);

  const keys = formatKeys(_keys);
  const values = formatValues(data, _keys);

  return `INSERT INTO ${db} (${keys}) VALUES (${values})`;
}

/**
 * formatKeys
 * ----------
 * -> "`{key}`, `{key}`"
 */
function formatKeys(keys: string[]) {
  return keys
    .map((key, index) => {
      const seperator = index < keys.length - 1 ? ", " : "";
      return "`" + key + "`" + seperator;
    })
    .join("");
}

/**
 * formatValues
 * ------------
 * -> '"{value}", "{value}"'
 */
function formatValues<T extends {}>(input: T, keys: string[]) {
  return keys
    .map((key, index) => {
      const seperator = index < keys.length - 1 ? ", " : "";
      return '"' + input[key as keyof T] + '"' + seperator;
    })
    .join("");
}
