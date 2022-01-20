import {Label} from "./label";
import {User} from "./user";

export interface Note {
  id?: number;
  title: string;
  description: string;
  importance: Importance;
  date: Date;
  labels?: Label[];
  user?: User;
}

export enum Importance {
  None = "NONE",
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH'
}

export enum Date {
  None = "NONE",
  Today = "TODAY",
  NextWeek = "NEXTWEEK",
  NextMonth = "NEXTMONTH",
  Someday = "SOMEDAY",

}
