import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Alert } from "react-daisyui";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CategoriesTab = () => {
  const [scienceData, setScienceData] = useState([]);
  const [mathData, setMathData] = useState([]);
  const [engineeringData, setEngineeringData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/category?category=Science`)
      .then((res) => res.json())
      .then((data) => {
        setScienceData(data);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/category?category=Science`)
      .then((res) => res.json())
      .then((data) => {
        setScienceData(data);
        setIsLoading(false);
      });
  }, []);

  const scienceHandller = () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/category?category=Science`)
      .then((res) => res.json())
      .then((data) => {
        setScienceData(data);
        setIsLoading(false);
      });
  };
  const mathHandller = () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/category?category=Math`)
      .then((res) => res.json())
      .then((data) => {
        setMathData(data);
        setIsLoading(false);
      });
  };
  const engineeringHandller = () => {
    setIsLoading(true);
    fetch(`http://localhost:5000/category?category=Engineering`)
      .then((res) => res.json())
      .then((data) => {
        setEngineeringData(data);
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-slate-300">
      <div className="max-w-7xl px-2 py-16 sm:px-6 lg:px-8 mx-auto ">
        <h4 className="text-2xl py-4 text-center uppercase text-gray-600 font-bold">
          Shop by category
        </h4>
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl p-1">
            <Tab
              onClick={scienceHandller}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500",
                  "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Science
            </Tab>
            <Tab
              onClick={mathHandller}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500",
                  "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Math
            </Tab>
            <Tab
              onClick={engineeringHandller}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500",
                  "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Engineering
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500",
                  "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              No product
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-gray-300 p-3",
                "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2"
              )}
            >
              {isLoading && <progress className="progress w-full"></progress>}
              {scienceData.length == 0 && (
                <Alert className="bg-red-500 p-2 rounded mb-3">
                  No data available !
                </Alert>
              )}
              <div className="grid gap-4 md:grid-cols-4">
                {scienceData.map((toy) => (
                  <>
                    <div
                      key={toy._id}
                      className="card w-full bg-base-100 shadow-xl"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={toy.photoUrl}
                          alt="Shoes"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-600">{toy.name}</h2>
                        <p className="text-gray-500">Price: ৳{toy.price}</p>
                        <div className="card-actions">
                          <Link to={`/detalis/${toy._id}`}>
                            <button
                              className="bg-orange-500 hover:bg-orange-600 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              View details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-gray-300 p-3",
                "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2"
              )}
            >
              {isLoading && <progress className="progress w-full"></progress>}
              {mathData.length == 0 && (
                <Alert className="bg-red-500 p-2 rounded mb-3">
                  No data available !
                </Alert>
              )}
              <div className="grid gap-4 md:grid-cols-4">
                {mathData.map((toy) => (
                  <>
                    <div
                      key={toy._id}
                      className="card w-full bg-base-100 shadow-xl"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={toy.photoUrl}
                          alt="Shoes"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-600">{toy.name}</h2>
                        <p className="text-gray-500">Price: ৳{toy.price}</p>
                        <div className="card-actions">
                          <Link to={`/detalis/${toy._id}`}>
                            <button
                              className="bg-orange-500 hover:bg-orange-600 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              View details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-gray-300 p-3",
                "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2"
              )}
            >
              {isLoading && <progress className="progress w-full"></progress>}
              {engineeringData.length == 0 && (
                <Alert className="bg-red-500 p-2 rounded mb-3">
                  No data available !
                </Alert>
              )}
              <div className="grid gap-4 md:grid-cols-4">
                {engineeringData.map((toy) => (
                  <>
                    <div
                      key={toy._id}
                      className="card w-full bg-base-100 shadow-xl"
                    >
                      <figure className="px-10 pt-10">
                        <img
                          src={toy.photoUrl}
                          alt="Shoes"
                          className="rounded-xl"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-600">{toy.name}</h2>
                        <p className="text-gray-500">Price: ৳{toy.price}</p>
                        <div className="card-actions">
                          <Link to={`/detalis/${toy._id}`}>
                            <button
                              className="bg-orange-500 hover:bg-orange-600 text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                            >
                              View details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "rounded-xl bg-gray-300 p-3",
                "ring-orange-500 ring-opacity-60 ring-offset-2 ring-offset-orange-500 focus:outline-none focus:ring-2"
              )}
            >
              <Alert className="bg-red-600 p-2 rounded mb-3">
                No data available !
              </Alert>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default CategoriesTab;
