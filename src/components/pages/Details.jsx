import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle";

const Details = () => {
  const toy = useLoaderData();

  function getStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(<span>☆</span>);
      } else {
        stars.push(<span>★</span>);
      }
    }
    return stars;
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
      <h3 className="text-3xl py-4 text-center uppercase text-gray-600 font-bold">
        Toy details
      </h3>

      <PageTitle />
      <div className="flex gap-3 md:flex-row flex-col">
        <figure className="md:w-2/5 rounded-lg">
          <img className="rounded-lg" src={toy.photoUrl} alt="Album" />
        </figure>
        <div className="md:w-3/5 card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-gray-700">{toy.name}</h2>
            <p className="text-gray-500">
              <span className="font-bold">Category:</span> {toy.category}
            </p>
            <p className="text-gray-500">
              <span className="font-bold">Seller name:</span> {toy.seller}
            </p>
            <p className="text-gray-500">
              <span className="font-bold">Price:</span> {toy.price}
            </p>
            <p className="text-gray-500">
              <span className="font-bold">Available QTY:</span> {toy.qty}
            </p>
            <p className="text-gray-500 ">
              <span className="font-bold">Rating:</span> {toy.rating}
              {getStars(toy.rating)}
            </p>
            <p className="text-gray-500">
              <span className="font-bold">Product description:</span>{" "}
              {toy.description}
            </p>
            <div className="card-actions justify-end">
              <Link to="/allToys">
                <button className="btn bg-orange-500 hover:bg-orange-600 border-none">
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
