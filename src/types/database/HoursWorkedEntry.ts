import type {CompanyName} from './Company';

type HoursWorkedEntry = {
  date: string;
  hours_worked: number;
  rate_per_day: number;
  currency: string;
  company_name: CompanyName;
};

type HoursWorkedData = Array<HoursWorkedEntry>;

export default HoursWorkedEntry;

export type {HoursWorkedData};
