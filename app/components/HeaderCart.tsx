import DeleteIcon from "./Icons/DeleteIcon";
import CartIcon from "./Icons/CartIcon";
import productThumbnail from "~/images/image-product-1-thumbnail.jpg";
import { useState } from "react";
import classNames from "classnames";
const CheckoutButton = () => {
  return (
    <button className="mx-auto mt-5 w-full rounded-md bg-my-orange py-4 text-my-white">
      Checkout
    </button>
  );
};
const CartDropdown = ({ cart = true }) => {
  return (
    <div className="fixed left-0 right-0 top-24 mx-auto max-w-[360px] rounded-md bg-my-white py-6  shadow-xl">
      <h4 className="mb-4 border-b border-my-grayish-blue px-4 pb-4 font-bold">
        Cart
      </h4>
      {!cart ? (
        <h6 className="py-15 flex justify-center py-14 font-bold text-my-dark-grayish-blue">
          Your cart is empty.
        </h6>
      ) : (
        <>
          <ul className="px-4">
            <li className="grid grid-cols-[auto_1fr_auto] gap-2">
              <img
                className="h-14 w-14 rounded-sm object-cover"
                src={productThumbnail}
                alt="product thumbnail"
              />
              <div className="text-my-very-dark-blue">
                <h6 className="text-sm">Fall Limited Edition Sneakers</h6>
                <span className="text-sm">
                  $125.00 x 3 <span className="font-bold">$375.00</span>
                </span>
              </div>
              <button className="self-center">
                <DeleteIcon />
              </button>
            </li>
          </ul>
          <div className="px-4">
            <CheckoutButton />
          </div>
        </>
      )}
    </div>
  );
};

const CartItems = () => {
  return (
    <div className="pointer-events-none absolute right-[-10px] top-[-10px] inline-flex rounded-full bg-my-orange px-2">
      <span className="select-none text-xs text-my-white">3</span>
    </div>
  );
};

export default function HeaderCart() {
  const [isOpen, setOpen] = useState(false);
  const cartBtnClassName = classNames({
    "text-my-dark-grayish-blue hover:text-my-very-dark-blue": true,
    "text-my-very-dark-blue": isOpen,
  });
  return (
    <div className="relative mr-4 flex flex-1 justify-end self-center">
      <button onClick={() => setOpen(!isOpen)} className={cartBtnClassName}>
        <CartIcon />
      </button>
      <CartItems />
      {isOpen && <CartDropdown />}
    </div>
  );
}
