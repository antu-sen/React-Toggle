import { useState } from "react";
import Link from "./NavBar/Link";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/Blog",
  },

  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links =   navigationData.map((route) => (
    <Link key={route.id} route={route}></Link>
  ))

  return (
    <nav className="flex justify-between items-center md:px-20 py-2 px-4">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul className={`md:hidden absolute  duration-1000
          ${open ? "top-10" : "-top-40" }
            bg-amber-300`}>
          {
            links
          }
        </ul>

        <h3 className=" hidden md:block md:text-3xl md:font-extrabold  tracking-wide text-blue-600 cursor-pointer">
          My<span className="text-black">NavBar</span>
        </h3>
      </span>
      <ul className="md:flex hidden justify-center items-center">
        {
          links
      
        }
      </ul>
      <button className="px-5 py-2 sm:mt-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
