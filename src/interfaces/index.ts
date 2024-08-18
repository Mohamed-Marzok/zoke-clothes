export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  name: "title" | "description" | "imageURL" | "price";
  lable: string;
  type: string;
}

export interface IErrorsFormInputs {
  title: string;
  description: string;
  imageURL: string;
  colors: string;
  price: string;
}
export interface ISelectProductMenu {
  name: string;
  imageURL: string;
}
