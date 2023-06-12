import ProductImages from "~/components/ProductImages";
import MinusIcon from "~/components/Icons/MinusIcon";
import PlusIcon from "~/components/Icons/PlusIcon";
import CartIcon from "~/components/Icons/CartIcon";
import { getProductById } from "~/models/product.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const product = await getProductById(1);
  return json(product);
};
export default function Test() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return (
    <div className="pb-96">
      <ProductImages />
      <div className="m-4">
        <h6 className="text-sm- mb-2 font-bold text-my-orange">
          SNEAKER COMPANY
        </h6>
        <h1 className="text-3xl font-bold text-my-very-dark-blue">
          Fall Limited Edition Sneakers
        </h1>
        <p className="mt-4 text-my-dark-grayish-blue">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber cutter sole, they'll withstand everything
          the weather can offer
        </p>
        <div className="my-6 flex items-center">
          <h6 className="text-3xl font-bold">$125.00</h6>
          <span className="mx-4 rounded-md bg-my-pale-orange px-2 py-1 font-bold text-my-orange">
            50%
          </span>
          <span className="ml-auto text-lg font-bold text-my-dark-grayish-blue line-through">
            $250.00
          </span>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center rounded-md">
          <button className="rounded-lg bg-my-light-grayish-blue p-5 text-my-orange">
            <MinusIcon />
          </button>
          <span className="flex h-full items-center justify-center bg-my-light-grayish-blue text-center font-bold">
            0
          </span>
          <button className="justify-self-end rounded-lg bg-my-light-grayish-blue p-5 text-my-orange">
            <PlusIcon />
          </button>
          <button className="col-span-full mt-4 flex items-center justify-center gap-4 rounded-lg bg-my-orange p-5 font-bold text-my-white">
            <CartIcon />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
