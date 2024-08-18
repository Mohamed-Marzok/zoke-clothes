import { IErrorsFormInputs } from "../interfaces";

export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  colors: string[];
}) => {
  const errors: IErrorsFormInputs = {
    title: "",
    description: "",
    imageURL: "",
    colors: "",
    price: "",
  };

  const validURL = /^https?:\/\/[^\s$.?#].[^\s]*$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Title must be between 10 and 80 characters.";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 800
  ) {
    errors.description = "Description must be between 10 and 800 characters.";
  }

  if (!product.imageURL.trim() || !validURL) {
    errors.imageURL = "Please provide a valid image URL.";
  }
  if (product.colors.length === 0) {
    errors.colors = "Please provide a valid Colors.";
  }

  return errors;
};
