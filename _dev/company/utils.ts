import {readJsonFile} from '@dev/utils';
import CONST from '@src/CONST';
import {Companies, Company, CompanyName} from '@src/types/database';

/**
 * Read the companies data from the JSON file.
 *
 * @returns The companies data.
 */
function readCompaniesData(): Companies {
  return readJsonFile(CONST.DATA_FILES.COMPANIES);
}

/**
 * Retrieve a company data by its name.
 *
 * @param company_name The name of the company.
 * @returns The company data/object.
 */
function getCompany(company_name: CompanyName): Company {
  const companiesData: Companies = readCompaniesData();
  const company = companiesData.find(
    companyItem => companyItem.name === company_name,
  );
  if (!company) {
    throw new Error(`Company with name ${company_name} not found`);
  }
  return company;
}

export {getCompany};
