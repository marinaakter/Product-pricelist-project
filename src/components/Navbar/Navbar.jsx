import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
    { id: 6, path: "*", name: "NotFound" },
  ];

  return (
    <nav className="p-6">
      <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? <IoClose /> : <IoIosMenu />}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static bg-gray-200 md:bg-white rounded-sm  px-6
        ${open ? "" : "hidden"}
        `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
