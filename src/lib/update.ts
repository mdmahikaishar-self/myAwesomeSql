import { IUpdate } from "../types";

/**
 * update
 * -------
 * -> `UPDATE {db} SET {key=value} WHERE {where}`
 */
export function update({ db, data, where }: IUpdate) {
  const keyPairs = formatKeyPairs(data);
  const whereCondition = where ? ` WHERE ${where}` : "";

  return `UPDATE ${db} SET ${keyPairs}` + whereCondition;
}

/**
 * formatKeyPairs
 * --------------
 * -> '`{key}` = "{value}", `{key}` = "{value}"'
 */
function formatKeyPairs<T extends {}, K extends keyof T>(input: T) {
  const keys = Object.keys(input);

  // sentence -> '`{key}` = "{value}", `{key}` = "{value}"'
  return keys
    .map((key, index) => {
      const seperator = index < keys.length - 1 ? ", " : "";

      // `{key}`
      const newKey = "`" + key + "`";
      // "{value}"
      const newValue = '"' + input[key as K] + '"';

      // `{key}` = "{value}"
      return newKey + " = " + newValue + seperator;
    })
    .join("");
}
