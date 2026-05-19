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
    <nav className="flex justify-between items-center py-2 px-20">
      <h3 className="text-3xl font-extrabold tracking-wide text-blue-600 cursor-pointer">
        My<span className="text-black">NavBar</span>
      </h3>
      <ul className="flex justify-center items-center">
        {navigationData.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
      <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
