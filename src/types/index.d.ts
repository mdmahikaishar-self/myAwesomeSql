export interface IInsert {
  db: string;
  data: Object;
}

export interface IJoinDB {
  name: string;
  nick: string;
  keys: string[];
}

export interface IJoin {
  db: IJoinDB;
  db2: IJoinDB;
  on?: string;
  where?: string;
}

export interface IRemove {
  db: string;
  where?: string;
}

export interface IUpdate {
  db: string;
  data: Object;
  where?: string;
}
