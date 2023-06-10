import { Link } from "@remix-run/react";
import { useState } from "react";
import avatar from "~/images/image-avatar.png";
import HeaderCart from "./HeaderCart";

const Hamburger = ({
  isOpen,
  setOpen,
}: {
  isOpen: Boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const classes = [
    `${isOpen ? "rotate-45" : "-translate-y-1.5"}`,
    `${isOpen ? "opacity-0" : ""}`,
    `${isOpen ? "-rotate-45" : "translate-y-1.5"}`,
  ];
  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className="relative z-10 h-11 w-8 self-center bg-white text-my-very-dark-blue focus:outline-none"
    >
      <span className="sr-only">Open main menu</span>
      <div className="absolute left-1/2 top-1/2 block w-4 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-4 transform bg-current transition duration-500 ease-in-out ${classes[0]}`}
        ></span>
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-4 transform bg-current transition duration-500 ease-in-out ${classes[1]}`}
        ></span>
        <span
          aria-hidden="true"
          className={`absolute block h-0.5 w-4 transform bg-current transition duration-500 ease-in-out ${classes[2]}`}
        ></span>
      </div>
    </button>
  );
};
const Logo = () => (
  <Link
    to="/"
    className="font-kumbh-sans text-3xl font-bold text-my-very-dark-blue"
  >
    sneakers
  </Link>
);

const Thumbnail = () => (
  <div className="h-6 w-6 self-center rounded-full bg-my-grayish-blue">
    <img className="object-contain" src={avatar} />
  </div>
);
const Sidebar = () => {
  const links = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-black/[.75]">
      <div className="h-screen w-72 bg-my-white pt-20">
        <ul>
          {links.map((link, key) => {
            return (
              <li className="px-4 py-2 text-lg font-bold" key={key}>
                {link}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="mx-auto flex max-w-7xl gap-2 bg-my-white px-2 py-4">
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
        <Logo />
        <HeaderCart />
        <Thumbnail />
      </div>
      {isOpen && <Sidebar />}
    </>
  );
}
