import { IRemove } from "../types";

/**
 * remove
 * -------
 * -> `DELETE FROM {db} WHERE {where}`;
 */
export function remove({ db, where }: IRemove) {
  const whereCondition = where ? ` WHERE ${where}` : "";

  return `DELETE FROM ${db}` + whereCondition;
}
