export interface IContactData {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}

export interface IGetContactResponseWrapper {
  message: string;
  data: IContactData[];
}

export interface IGetContactDetailResponseWrapper {
  message: string;
  data: IContactData;
}
