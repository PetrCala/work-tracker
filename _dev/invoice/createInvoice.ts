import fs from 'fs';
import path from 'path';
import PATHS from '@dev/PATHS';
import {Company, HoursWorkedData} from '@src/types/database';

function createInvoice(hoursWorked: HoursWorkedData, company: Company): string {
  const templateName = company.invoice_template;
  const templatePath = path.join(PATHS.INVOICE_TEMPLATES, templateName);
  const templateContent = fs.readFileSync(templatePath, 'utf8');

  // const totalAmount = hoursWorked * company.rate;
  // const invoiceData: InvoiceData = {
  //   month,
  //   hoursWorked,
  //   company,
  //   ratePerHour,
  //   totalAmount,
  // };

  // let invoiceContent = templateContent;
  // for (const key in invoiceData) {
  //   const value = invoiceData[key as keyof InvoiceData];
  //   if (typeof value === 'object') {
  //     for (const subKey in value) {
  //       const regex = new RegExp(`{{company.${subKey}}}`, 'g');
  //       invoiceContent = invoiceContent.replace(
  //         regex,
  //         value[subKey as keyof Company] || '',
  //       );
  //     }
  //   } else {
  //     const regex = new RegExp(`{{${key}}}`, 'g');
  //     invoiceContent = invoiceContent.replace(regex, value.toString());
  //   }
  // }

  // // Handle optional fields
  // invoiceContent = invoiceContent.replace(
  //   /{{#if company\.(\w+)}}(.*?){{\/if}}/gs,
  //   (match, p1, p2) => {
  //     return company[p1 as keyof Company] ? p2.trim() : '';
  //   },
  // );

  // return invoiceContent;
  return templateContent;
}

export {createInvoice};
