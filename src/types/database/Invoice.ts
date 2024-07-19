import {PDFDocument} from 'pdf-lib';
import Company from './Company';

type InvoiceData = {
  date: string;
  hoursWorked: number;
  company: Company;
  ratePerHour: number;
  totalAmount: number;
};

type Invoice = PDFDocument;

export default Invoice;
export type {InvoiceData};
