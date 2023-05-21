import { useEffect, useState } from "react";
import { Alert } from "react-daisyui";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";

const Alltoys = () => {
  const [allToys, setAllToys] = useState([]);
  const [fullToys, setFullToys] = useState([]);
  const url = `http://localhost:5000/allToys20`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [url]);
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setFullToys(data));
  }, []);
  const getAllData = () => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  const searchInput = (e) => {
    const key = e.target.value;
    fetch(`http://localhost:5000/search?name=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };
  const sortByPrice = (e) => {
    const key = e.target.value;
    fetch(`http://localhost:5000/sort?sort=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h4 className="text-3xl py-4 uppercase text-gray-700 font-bold">
          All toys
        </h4>
        <PageTitle />
        <select
          onChange={sortByPrice}
          className="outline-none text-gray-700 px-2 h-10 rounded w-96 mb-3"
        >
          <option value="">-Sort by price-</option>
          <option value="asc">Lowest price</option>
          <option value="desc">Heighest price</option>
        </select>
        <input
          onChange={searchInput}
          className="outline-none text-gray-700 px-2 h-10 rounded w-96 mb-3"
          type="text"
          id="search"
          placeholder="Search something.."
        />
      </div>
      {allToys.length == 0 && (
        <Alert className="bg-red-600 p-2 rounded mb-3">
          Not found any data by this title.... try another keys
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-4">
        {allToys.map((toy) => (
          <>
            <div key={toy._id} className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={toy.photoUrl} alt="Shoes" className="rounded-xl" />
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

      <div
        className={`text-center ${
          parseInt(allToys.length) == parseInt(fullToys.length) ? "hidden" : ""
        } `}
      >
        <button
          onClick={getAllData}
          className="btn bg-orange-500 hover:bg-orange-600 mt-8 border-none"
        >
          Load all
        </button>
      </div>
    </div>
  );
};

export default Alltoys;
