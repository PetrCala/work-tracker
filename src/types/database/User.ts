type UserID = string;

type User = {
  name: string;
  ein: string;
  address: string;
  email: string;
  phone_number: string;
};

export default User;

export type {UserID};
