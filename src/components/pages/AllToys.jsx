import { useEffect, useState } from "react";

const Alltoys = () => {
  const [allToys, setAllToys] = useState([]);
  const url = `http://localhost:5000/allToys20`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [url]);
  const getAllData = () => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
      {allToys.length}
      <div className="grid gap-4 md:grid-cols-4">
        {allToys.map((toy) => (
          <>
            <div key={toy._id} className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={toy.photoUrl} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{toy.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="text-center">
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
