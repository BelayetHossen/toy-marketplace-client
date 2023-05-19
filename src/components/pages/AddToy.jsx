// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

const AddToy = () => {
  //   const { setLoading } = useContext(AuthContext);

  return (
    <div className="mx-auto max-w-3xl px-2 sm:px-6 lg:px-8 my-8">
      <h4 className="py-3 text-3xl text-center text-stone-900">Add new toy</h4>
      <form className="text-black">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="email"
          placeholder="Email Address"
          name="email"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="text"
          placeholder="Photo URL"
          name="photo"
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
