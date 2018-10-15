import {User} from "../user/user.model";
import {Country} from "./country";

export class Trip {

  id: number;
  dateFrom: Date;
  dateTo: Date;
  title: string;
  description: string;
  rate: number;
  country: Country[];
  user: User;

}
