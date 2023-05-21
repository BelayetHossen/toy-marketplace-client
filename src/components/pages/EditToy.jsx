import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { useLoaderData, useNavigate } from "react-router-dom";
import PageTitle from "../PageTitle";

const EditToy = () => {
  const { auth } = useContext(AuthContext);
  const loadedToy = useLoaderData();
  const navigate = useNavigate();
  const handleEditToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const id = form.id.value;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const qty = form.rating.qty;
    const seller = form.seller.value;
    const seller_phone = form.seller_phone.value;
    const seller_email = form.seller_email.value;
    const photoUrl = form.photoUrl.value;
    const toy = {
      id,
      name,
      category,
      photoUrl,
      description,
      price,
      rating,
      qty,
      seller,
      seller_phone,
      seller_email,
    };

    if (
      name != "" &&
      category != "" &&
      photoUrl != "" &&
      description != "" &&
      price != "" &&
      rating != "" &&
      seller != "" &&
      seller_phone != "" &&
      seller_email != ""
    ) {
      fetch(
        "https://assignment-11-server-belayethossen.vercel.app/toy/update/",
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(toy),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount == 1) {
            toast.success("Data updated successfully! Redirecting .......");
            setTimeout(() => {
              navigate(`/myToys/`, {
                replace: true,
              });
            }, 2000);
          }
        });
    } else {
      toast.error("All fields are requred !");
    }
  };
  return (
    <div className="mx-auto max-w-3xl px-2 sm:px-6 lg:px-8 my-8">
      <ToastContainer />
      <PageTitle />
      <h4 className="py-3 text-3xl text-center text-stone-900">
        Update toy : {loadedToy.name}
      </h4>
      <form onSubmit={handleEditToy} className="text-black">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Name"
          name="name"
          defaultValue={loadedToy.name}
        />
        <input name="id" type="hidden" defaultValue={loadedToy._id} />
        <select
          name="category"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        >
          <option disabled>-Select category-</option>
          <option
            value="Science"
            selected={loadedToy.category == "Science" ? "selected" : ""}
          >
            Science
          </option>
          <option
            value="Math"
            selected={loadedToy.category == "Math" ? "selected" : ""}
          >
            Math
          </option>
          <option
            value="Engineering"
            selected={loadedToy.category == "Engineering" ? "selected" : ""}
          >
            Engineering
          </option>
        </select>
        <textarea
          rows="12"
          name="description"
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          placeholder="Toy description"
        >
          {loadedToy.description}
        </textarea>
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="number"
          placeholder="Price"
          name="price"
          defaultValue={loadedToy.price}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="number"
          placeholder="Rating"
          name="rating"
          defaultValue={loadedToy.rating}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="number"
          placeholder="Available QTY"
          name="qty"
          defaultValue={loadedToy.qty}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Seller name"
          name="seller"
          defaultValue={loadedToy.seller}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Seller phone"
          name="seller_phone"
          defaultValue={loadedToy.seller_phone}
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
          name="photoUrl"
          defaultValue={loadedToy.photoUrl}
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Update and publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditToy;
