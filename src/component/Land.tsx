import { useState } from "react";
import Button from "./ui/Button";
import Image from "./ui/Image";

export default function Land() {
  const jacketImageURLs: string[] = [
    "https://cdn.pixabay.com/photo/2017/06/27/01/11/jacket-2445833_1280.png",
    "https://cdn.pixabay.com/photo/2017/06/30/21/50/jacket-2459928_640.png",
    "https://cdn.pixabay.com/photo/2012/04/13/14/55/jacket-32714_640.png",
  ];
  const [jacket, setJacket] = useState<string>(jacketImageURLs[0]);

  return (
    <div className="grow bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center py-8">
      <div className="container flex flex-col items-center justify-between py-4 md:flex-row">
        <div className="text-center md:text-left md:w-1/2">
          <p className="uppercase text-white text-2xl mb-5">
            Outfit of the Day
          </p>
          <p className="uppercase text-3xl font-medium text-gray-500 mb-2">
            All your
          </p>
          <p className="uppercase text-6xl font-bold text-gray-700 mb-6">
            styles are here
          </p>
          <p className="uppercase text-sm text-gray-500 mb-8">
            Consectetur adipiscing elit. Cursus condimentum donec non dictum. Id
            et sed ac mauris, adipiscing tincidunt amet vel at. Quis lobortis
            id. consectetur adipiscing elit.
          </p>
          <Button className="bg-gray-50 text-blue-600 active:bg-gray-400 max-w-fit px-5 rounded-3xl">
            Buy Now
          </Button>
        </div>
        <div className="md:w-1/2 flex flex-col items-center mt-6 md:mt-0">
          <Image
            className="w-80 h-60 md:w-full md:max-w-xs mb-4 md:mb-8"
            imageURL={jacket}
            alt="jacket"
          />
          <div className="flex gap-3 justify-center">
            {jacketImageURLs.map((item, index) => (
              <img
                key={index}
                className="w-16 h-16 md:w-20 md:h-20 cursor-pointer"
                src={item}
                alt={`jacket-${index}`}
                onClick={() => setJacket(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
