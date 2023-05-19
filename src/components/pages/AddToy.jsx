import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../providers/AuthProvider";

const AddToy = () => {
  const { auth } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const seller = form.seller.value;
    const seller_phone = form.seller_phone.value;
    const seller_email = form.seller_email.value;
    const photo = form.photo.value;
    const toy = {
      name,
      category,
      photo,
      description,
      price,
      rating,
      seller,
      seller_phone,
      seller_email,
    };

    if (
      name != "" &&
      category != "" &&
      photo != "" &&
      description != "" &&
      price != "" &&
      rating != "" &&
      seller != "" &&
      seller_phone != "" &&
      seller_email != ""
    ) {
      fetch("http://localhost:5000/addToy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(toy),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            form.reset();
            toast.success("A new toy added successfully");
          }
        });
    } else {
      toast.error("All fields are requred !");
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-2 sm:px-6 lg:px-8 my-8">
      <ToastContainer />
      <h4 className="py-3 text-3xl text-center text-stone-900">Add new toy</h4>
      <form onSubmit={handleAddToy} className="text-black">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <select
          name="category"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        >
          <option disabled>-Select category-</option>
          <option value="Science">Science</option>
          <option value="Math">Math</option>
          <option value="Engineering">Engineering</option>
        </select>
        <textarea
          name="description"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          placeholder="Toy description"
        ></textarea>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="number"
          placeholder="Price"
          name="price"
          min="1"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="number"
          placeholder="Rating"
          name="rating"
          min="0"
          max="5"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Seller name"
          name="seller"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Seller phone"
          name="seller_phone"
        />
        <input
          value={auth?.currentUser?.email}
          className="disabled:opacity-75 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="email"
          placeholder="Seller email"
          name="seller_email"
        />

        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Toy photo URL"
          name="photo"
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Add and publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
