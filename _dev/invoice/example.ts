import * as path from 'path';
import {PDFDocument, rgb} from 'pdf-lib';
import fs from 'fs';
import {Company, InvoiceData} from '@src/types/database';
import prepareInvoiceData from './preapreInvoiceData';
import PATHS from '@dev/PATHS';
import {createFolderIfNotExists} from '@dev/utils';

const createPDF = async (invoiceContent: string, outputPath: string) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const {width, height} = page.getSize();
  const fontSize = 12;

  // Draw the invoice content
  page.drawText(invoiceContent, {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    color: rgb(0, 0, 0),
  });

  // Save the PDF to the specified path
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
};

// Example usage:
const createExampleInvoice = async () => {
  const company: Company = {
    name: 'Example Company',
    email: 'info@example.com',
    invoice_template: 'default_template',
    address: '123 Example Street',
    phoneNumber: '123-456-7890',
  };

  const invoiceData: InvoiceData = {
    date: '2024-07-19',
    hoursWorked: 40,
    company: company,
    ratePerHour: 50,
    totalAmount: 2000,
  };

  const invoiceContent = prepareInvoiceData(invoiceData);
  const invoiceFolder = PATHS.INVOICES;
  const outputPath = path.join(invoiceFolder, 'example_invoice.pdf');

  createFolderIfNotExists(invoiceFolder);
  await createPDF(invoiceContent, outputPath);
  console.log(`Invoice saved to ${outputPath}`);
};

export {createPDF, createExampleInvoice};
