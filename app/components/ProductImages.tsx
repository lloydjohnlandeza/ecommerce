import image1 from "~/images/image-product-1.jpg";
import image2 from "~/images/image-product-2.jpg";
import image3 from "~/images/image-product-3.jpg";
import NextIcon from "./Icons/NextIcon";
import PreviousIcon from "./Icons/PreviousIcon";
export default function ProductImages() {
  return (
    <div className="relative grid h-80 items-center overflow-hidden">
      <button className="absolute ml-4 flex h-10 w-10 items-center justify-center self-center justify-self-start rounded-full bg-my-white text-my-very-dark-blue">
        <PreviousIcon />
      </button>
      <img className="h-full w-full object-cover" src={image1} />
      <button className="absolute mr-4 flex h-10 w-10 items-center justify-center self-center justify-self-end rounded-full bg-my-white text-my-very-dark-blue">
        <NextIcon />
      </button>
    </div>
  );
}
