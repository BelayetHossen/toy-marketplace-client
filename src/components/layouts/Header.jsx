import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Tooltip } from "@material-tailwind/react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const { auth, user, logOut } = useContext(AuthContext);

  const location = useLocation();
  const pathName = location.pathname;

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      width="300px"
                      className="block h-8 w-auto lg:hidden"
                      src="https://i.ibb.co/sQCQXDG/logo.png"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://i.ibb.co/sQCQXDG/logo.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link
                        to="/"
                        className={`text-gray-700 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                          pathName == "/" ? "bg-orange-600" : ""
                        }`}
                      >
                        Home
                      </Link>
                      <Link
                        to="/blogs"
                        className={`text-gray-700 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                          pathName == "/blogs" ? "bg-orange-600" : ""
                        }`}
                      >
                        Blogs
                      </Link>
                      <Link
                        to="/allToys"
                        className={`text-gray-700 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                          pathName == "/allToys" ? "bg-orange-600" : ""
                        }`}
                      >
                        All toys
                      </Link>
                      {user ? (
                        <Link
                          to={`/myToys`}
                          className={`text-gray-700 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                            pathName == "/myToys" ? "bg-orange-600" : ""
                          }`}
                        >
                          My toys
                        </Link>
                      ) : (
                        ""
                      )}
                      {user ? (
                        <Link
                          to="/addToy"
                          className={`text-gray-700 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                            pathName == "/addToy" ? "bg-orange-600" : ""
                          }`}
                        >
                          Add a toy
                        </Link>
                      ) : (
                        ""
                      )}
                      <Link
                        to="/*"
                        className={`text-gray-700 hover:bg-orange-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium ${
                          pathName == "/*" ? "bg-orange-600" : ""
                        }`}
                      >
                        Not found
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {user ? (
                    <span className="flex items-center">
                      <Tooltip
                        content={auth.currentUser?.displayName}
                        placement="bottom-start"
                      >
                        <img
                          className="h-8 w-8 rounded-full"
                          src={auth?.currentUser?.photoURL}
                          alt=""
                        />
                      </Tooltip>

                      <Link
                        onClick={handleLogout}
                        className="rounded-full bg-orange-500 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-2"
                      >
                        Logout
                      </Link>
                    </span>
                  ) : (
                    <button
                      type="button"
                      className="rounded-full bg-orange-500 p-1 text-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <Link to="/login">Login/Resister</Link>
                    </button>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-orange-500 text-white"
                        : "bg-orange-500 hover:bg-orange-600 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
