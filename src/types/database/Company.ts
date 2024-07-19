type CompanyName = string;

type Company = {
  name: CompanyName;
  email: string;
  invoice_template: string;
  address?: string;
  phoneNumber?: string;
};

type Companies = Array<Company>;

export default Company;
export type {CompanyName, Companies};
