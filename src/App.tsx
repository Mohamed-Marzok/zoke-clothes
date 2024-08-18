import { colors, formInputsList, productList, selectProductMenu } from "./data";
import ProductCard from "./component/ProductCard";
import Modal from "./component/ui/Modal";
import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from "react";
import Button from "./component/ui/Button";
import Input from "./component/ui/Input";
import { IErrorsFormInputs, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import Validation from "./component/ui/Validation";
import CircleColor from "./component/ui/CircleColor";
import { v4 as uuid } from "uuid";
import ListMenu from "./component/ui/ListMenu";
import Nav from "./component/Nav";
import Land from "./component/Land";
import Footer from "./component/Footer";

const initialProductState: IProduct = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  category: {
    name: "",
    imageURL: "",
  },
};

const initialErrorsState: IErrorsFormInputs = {
  title: "",
  description: "",
  imageURL: "",
  colors: "",
  price: "",
};

function App() {
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(initialProductState);
  const [productEdit, setProductEdit] = useState<IProduct>(initialProductState);
  const [errors, setErrors] = useState<IErrorsFormInputs>(initialErrorsState);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selected, setSelected] = useState(selectProductMenu[0]);

  // Handlers
  const closeModalNewProductHandler = () => setModalOpen(false);
  const openModalNewProductHandler = () => setModalOpen(true);
  const closeModalEditHandler = () => setModalEditOpen(false);
  const openModalEditHandler = () => setModalEditOpen(true);
  useEffect(() => {
    setSelectedColors(productEdit.colors);
    setSelected(productEdit.category);
  }, [isModalEditOpen]);
  useEffect(() => {
    setSelectedColors([]);
    setSelected(selectProductMenu[0]);
  }, [isModalOpen]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const validationErrors = productValidation(product);

    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors({ ...errors, [name]: "" });
    }

    setProduct({ ...product, [name]: value });
    setProductEdit({ ...productEdit, [name]: value });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = productValidation(product);
    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
      return;
    }

    const newProduct = { ...product, id: uuid(), category: selected };
    setProducts([newProduct, ...products]);

    resetFormHandler();
  };
  const handleFormEditSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = productValidation(productEdit);
    console.log(productEdit);
    console.log(selectedColors);
    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
      return;
    }
    const updatedProduct = {
      ...productEdit,
      category: selected,
      colors: selectedColors,
    };
    const updatedProducts = products.map((product) =>
      product.id === productEdit.id ? updatedProduct : product
    );

    setProducts(updatedProducts);
    resetFormHandler();
  };

  const resetFormHandler = (): void => {
    setProduct(initialProductState);
    setErrors(initialErrorsState);
    setSelectedColors([]);
    closeModalEditHandler();
    closeModalNewProductHandler();
  };

  const handleColorSelection = (color: string): void => {
    let updatedColors;
    setErrors({ ...errors, colors: "" });
    if (!selectedColors.includes(color)) {
      updatedColors = [...selectedColors, color];
    } else {
      updatedColors = selectedColors.filter((c) => c !== color);
    }

    setSelectedColors(updatedColors);
    setProduct({ ...product, colors: updatedColors, category: selected });
    setProductEdit({
      ...productEdit,
      colors: updatedColors,
      category: selected,
    });
  };

  // Render
  const renderedProducts = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      products={products}
      setProducts={setProducts}
      setProductEdit={setProductEdit}
      openModalEditHandler={openModalEditHandler}
    />
  ));

  const renderedFormInputs = formInputsList.map((input) => (
    <Fragment key={input.id}>
      <Input
        input={input}
        onChange={handleInputChange}
        value={product[input.name]}
      />
      <Validation error={errors[input.name as keyof IErrorsFormInputs]} />
    </Fragment>
  ));

  const renderedFormInputsEdit = formInputsList.map((input) => (
    <Fragment key={input.id}>
      <Input
        input={input}
        onChange={handleInputChange}
        value={productEdit[input.name]}
      />
      <Validation error={errors[input.name as keyof IErrorsFormInputs]} />
    </Fragment>
  ));

  const renderedColorOptions = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => handleColorSelection(color)}
    />
  ));

  const renderedSelectedColors = selectedColors.map((color) => (
    <p
      key={color}
      className="rounded-md px-2 text-white"
      style={{ backgroundColor: color }}
    >
      {color}
    </p>
  ));

  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Nav />
        <Land />
      </div>
      <div className="container mx-auto my-10">
        <div className="flex gap-2">
          <h3 className="font-bold text-gray-950 size-max text-nowrap ">
            All Products
          </h3>
          <div className="flex-grow"></div>
          <Button
            className="bg-green-800 max-w-fit"
            onClick={openModalNewProductHandler}
          >
            Add Product
          </Button>
        </div>

        <div className="m-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-4 items-center">
          {renderedProducts}
        </div>

        {/* New Product Modal */}
        <Modal
          isOpen={isModalOpen}
          closeModal={resetFormHandler}
          title="Add New Product"
        >
          <form onSubmit={handleFormSubmit}>
            <div className="my-4">{renderedFormInputs}</div>
            <ListMenu
              selected={selected}
              setSelected={setSelected}
              menu={selectProductMenu}
            />
            <div className="flex gap-1 my-5 flex-wrap">
              {renderedSelectedColors}
            </div>
            <div className="flex gap-1 my-5">{renderedColorOptions}</div>
            <Validation error={errors.colors} />
            <div className="flex items-center gap-2">
              <Button
                className="bg-violet-700 hover:bg-violet-500"
                type="submit"
              >
                Submit
              </Button>
              <Button
                type="button"
                className="bg-gray-600 hover:bg-gray-400"
                onClick={resetFormHandler}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* Edit Product Modal */}
        <Modal
          isOpen={isModalEditOpen}
          closeModal={closeModalEditHandler}
          title="Edit Product"
        >
          <form onSubmit={handleFormEditSubmit}>
            <div className="my-4">{renderedFormInputsEdit}</div>
            <ListMenu
              selected={selected}
              setSelected={setSelected}
              menu={selectProductMenu}
            />
            <div className="flex gap-1 my-5 flex-wrap">
              {renderedSelectedColors}
            </div>
            <div className="flex gap-1 my-5">{renderedColorOptions}</div>
            <Validation error={errors.colors} />
            <div className="flex items-center gap-2">
              <Button
                className="bg-violet-700 hover:bg-violet-500"
                type="submit"
              >
                Submit
              </Button>
              <Button
                type="button"
                className="bg-gray-600 hover:bg-gray-400"
                onClick={resetFormHandler}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default App;
