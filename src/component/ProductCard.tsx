import Image from "./ui/Image";
import { IProduct } from "../interfaces";
import Button from "./ui/Button";
import { circleSlicer, txtSlicer } from "../utils/funcations";
import CircleColor from "./ui/CircleColor";
import ReminderCircle from "./ReminderCircle";
import Modal from "./ui/Modal";
import { useState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

interface IProps {
  product: IProduct;
  products: IProduct[];
  setProducts: (updatedProducts: IProduct[]) => void;
  setProductEdit: (product: IProduct) => void;
  openModalEditHandler: () => void;
}

export default function ProductCard({
  product,
  products,
  setProducts,
  setProductEdit,
  openModalEditHandler,
}: IProps) {
  const productColors = circleSlicer(product.colors, 3);
  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);

  // Handlers
  const closeModalDeleteHandler = () => setModalDeleteOpen(false);
  const openModalDeleteHandler = () => setModalDeleteOpen(true);

  const deleteProduct = () => {
    const updatedProducts = products.filter(
      (p: IProduct) => p.id !== product.id
    );
    setProducts(updatedProducts);
    closeModalDeleteHandler();
  };

  const onEdit = () => {
    setProductEdit(product); // Set the product to edit first
    openModalEditHandler(); // Then open the modal
  };

  return (
    <div className="border p-3 max-w-sm md:max-w-lg mx-auto rounded-lg flex flex-col min-w-70 min-h-full">
      <Image
        className="self-center rounded-lg h-56 object-center w-full"
        imageURL={product.imageURL}
        alt={product.title}
      />

      <h2 className="text-lg font-bold mt-1">{product.title}</h2>
      <p className="text-gray-500">{txtSlicer(product.description)}</p>

      <div className="flex gap-1 my-2 relative">
        {productColors.arr.map((color) => (
          <CircleColor key={color} color={color} />
        ))}
        <ReminderCircle reminder={productColors.reminder} />
      </div>

      <div className="flex items-center justify-between ">
        <p>${product.price}</p>
        <Image
          className="w-10 h-10 rounded-full object-center"
          imageURL={product.category.imageURL}
          alt={product.category.name}
        />
      </div>

      <div className="flex justify-between space-x-2 my-3">
        <Button className="bg-violet-700 hover:bg-violet-500" onClick={onEdit}>
          Edit
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-500"
          onClick={openModalDeleteHandler}
        >
          Delete
        </Button>
      </div>

      <Modal
        isOpen={isModalDeleteOpen}
        closeModal={closeModalDeleteHandler}
        title="Are you sure you want to delete this product?"
      >
        <div className="flex items-center mb-6">
          <ExclamationCircleIcon className="h-6 w-6 text-red-500 mr-2" />
          <p className="font-medium">{product.title}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            className="bg-red-700 hover:bg-red-500"
            onClick={deleteProduct}
          >
            Delete
          </Button>
          <Button
            type="button"
            className="bg-gray-600 hover:bg-gray-400"
            onClick={closeModalDeleteHandler}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}
