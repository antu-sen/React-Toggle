import Link from "./NavBar/Link";

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
  return (
    <nav>
      <h3 className="text-3xl font-extrabold tracking-wide text-blue-600 cursor-pointer">
        My<span className="text-black">NavBar</span>
      </h3>
      <ul className="flex justify-center items-center mt-2">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
