
export interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IStore {
  users:IUsers[],
  isReady:boolean,
  open:boolean,
  openFile:boolean
}
