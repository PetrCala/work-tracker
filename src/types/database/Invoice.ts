import Company from './Company';

type InvoiceData = {
  date: string;
  hoursWorked: number;
  company: Company;
  ratePerHour: number;
  totalAmount: number;
};

export type {InvoiceData};
