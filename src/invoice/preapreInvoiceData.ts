import {InvoiceData} from '@src/types/database';

const prepareInvoiceData = (invoiceData: InvoiceData): string => {
  const {date, hoursWorked, company, ratePerHour, totalAmount} = invoiceData;
  return `
    Invoice Date: ${date}
    Company: ${company.name}
    Email: ${company.email}
    Address: ${company.address || 'N/A'}
    Phone: ${company.phoneNumber || 'N/A'}
    
    Hours Worked: ${hoursWorked}
    Rate per Hour: $${ratePerHour}
    Total Amount: $${totalAmount}
  `;
};

export default prepareInvoiceData;
