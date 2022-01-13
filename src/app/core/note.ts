import {Label} from "./label";
import {User} from "./user";

export interface Note {
  id?: number;
  title: string;
  description: string;
  label?: Label;
  user?: User;
}
