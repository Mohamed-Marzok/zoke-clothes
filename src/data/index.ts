import { v4 as uuid } from "uuid";
import { IFormInput, IProduct, ISelectProductMenu } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Graphic T-shirt",
    description:
      "A trendy graphic t-shirt with unique designs for a stylish look.",
    imageURL:
      "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_640.png",
    price: "30",
    colors: ["#FF5733", "#33FF57"],
    category: {
      name: "T-shirts",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_640.png",
    },
  },
  {
    id: uuid(),
    title: "Running Sneakers",
    description:
      "High-performance sneakers designed for comfort and speed during workouts.",
    imageURL:
      "https://cdn.pixabay.com/photo/2014/04/02/10/26/shoes-303825_640.png",
    price: "80",
    colors: ["#FF5733", "#000000", "#33FF57", "#0000FF"],
    category: {
      name: "Sneakers",
      imageURL:
        "https://cdn.pixabay.com/photo/2014/04/02/10/26/shoes-303825_640.png",
    },
  },
  {
    id: uuid(),
    title: "Leather Jacket",
    description: "A timeless leather jacket that adds an edge to any outfit.",
    imageURL:
      "https://cdn.pixabay.com/photo/2017/06/27/01/11/jacket-2445833_640.png",
    price: "120",
    colors: ["#FF5733", "#000000", "#8B4513", "#D2B48C", "#A0522D"],
    category: {
      name: "Jackets",
      imageURL:
        "https://cdn.pixabay.com/photo/2017/06/27/01/11/jacket-2445833_640.png",
    },
  },
  {
    id: uuid(),
    title: "Summer Hat",
    description: "A stylish hat to keep you cool and shaded during sunny days.",
    imageURL:
      "https://cdn.pixabay.com/photo/2013/07/13/10/41/hat-157581_1280.png",
    price: "25",
    colors: ["#FF5733", "#FFFF00", "#FFD700", "#00FF00", "#FF00FF", "#00FFFF"],
    category: {
      name: "Hats",
      imageURL:
        "https://cdn.pixabay.com/photo/2013/07/13/10/41/hat-157581_1280.png",
    },
  },
  {
    id: uuid(),
    title: "Casual T-shirt",
    description:
      "Comfortable casual t-shirt available in various colors for everyday wear.",
    imageURL:
      "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_640.png",
    price: "22",
    colors: [
      "#FF5733",
      "#33FF57",
      "#0000FF",
      "#FFD700",
      "#FF6347",
      "#8A2BE2",
      "#FF4500",
      "#FF1493",
    ],
    category: {
      name: "T-shirts",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_640.png",
    },
  },
  {
    id: uuid(),
    title: "Trendy Backpack",
    description:
      "A stylish and practical backpack with ample space for daily essentials.",
    imageURL:
      "https://cdn.pixabay.com/photo/2013/07/12/12/31/backpack-145841_640.png",
    price: "65",
    colors: [
      "#FF5733",
      "#A52A2A",
      "#4682B4",
      "#DC143C",
      "#FF4500",
      "#2E8B57",
      "#FFD700",
      "#8B008B",
      "#00CED1",
    ],
    category: {
      name: "Backpacks",
      imageURL:
        "https://cdn.pixabay.com/photo/2013/07/12/12/31/backpack-145841_640.png",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    lable: "product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    lable: "product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    lable: "product image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    lable: "product price",
    type: "number",
  },
];

export const colors: string[] = [
  "#FF5733", // Red-Orange
  "#33FF57", // Green
  "#3357FF", // Blue
  "#FF33A1", // Pink
  "#33FFF2", // Cyan
  "#FFC733", // Yellow
  "#A133FF", // Purple
  "#57FF33", // Lime
  "#5733FF", // Indigo
  "#FF3333", // Red
  "#33FFA1", // Mint
  "#FF8633", // Orange
  "#3377FF", // Azure
  "#FF33E5", // Magenta
];

export const selectProductMenu: ISelectProductMenu[] = [
  {
    name: "T-shirt",
    imageURL:
      "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_640.png",
  },
  {
    name: "Jeans",
    imageURL:
      "https://cdn.pixabay.com/photo/2022/04/02/12/14/jeans-7106887_640.png",
  },
  {
    name: "Sneakers",
    imageURL:
      "https://cdn.pixabay.com/photo/2014/04/02/10/26/shoes-303825_640.png",
  },
  {
    name: "Jacket",
    imageURL:
      "https://cdn.pixabay.com/photo/2017/06/27/01/11/jacket-2445833_640.png",
  },
  {
    name: "Hat",
    imageURL:
      "https://cdn.pixabay.com/photo/2013/07/13/10/41/hat-157581_1280.png",
  },
  {
    name: "Watch",
    imageURL:
      "https://cdn.pixabay.com/photo/2013/07/13/13/58/wristwatch-161854_960_720.png",
  },
  {
    name: "Backpack",
    imageURL:
      "https://cdn.pixabay.com/photo/2013/07/12/12/31/backpack-145841_640.png",
  },
  {
    name: "Sunglasses",
    imageURL:
      "https://cdn.pixabay.com/photo/2020/04/13/20/53/sunglasses-5040012_640.png",
  },
  {
    name: "Gloves",
    imageURL:
      "https://cdn.pixabay.com/photo/2012/04/13/20/59/gloves-33621_640.png",
  },
];
