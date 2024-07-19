import * as path from 'path';
import PATHS from '@dev/PATHS';
import {CompanyName} from '@src/types/database';

/**
 * Get a path to the invoice template for a given company.
 *
 * @param company_name The name of the company.
 * @returns The path to the invoice template.
 */
function getInvoiceTemplatePath(company_name: CompanyName): string {
  return path.join(PATHS.INVOICE_TEMPLATES, `${company_name}.txt`);
}

export {getInvoiceTemplatePath};
