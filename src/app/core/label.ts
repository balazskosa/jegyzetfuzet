import {User} from "./user";

export interface Label {
  id?: number;
  text: string;
  noteId: number;
  user?: User;
}
