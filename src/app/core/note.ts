import {Label} from "./label";
import {User} from "./user";

export interface Note {
  id?: number;
  title: string;
  description: string;
  importance: Importance;
  labels?: Label[];
  user?: User;
}

export enum Importance {
  None = "NONE",
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH'
}
