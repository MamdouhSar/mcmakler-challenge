export interface DataType {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  updateDate: string,
  phone: string,
  status: string,
  bid?: string,
  color?: string
};

export type InputValue = string | number | string[] | undefined;