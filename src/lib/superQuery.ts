import { Connection } from "mysql";

interface IMySqlSuperQuery {
  query: string;
  args?: string[] | string[][];
}
export function superQueryWrapper(db: Connection) {
  return function superQuery<T = string>({
    query,
    args = [],
  }: IMySqlSuperQuery) {
    return new Promise(
      (resolve: (data: T) => void, reject: (error: any) => void) => {
        // query
        db.query(query, args, (error: any, data: T) =>
          error ? reject(error) : resolve(data)
        );
      }
    );
  };
}
