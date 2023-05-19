import { useLoaderData } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyToys = () => {
  const myLoadedToys = useLoaderData();
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
      <h3 className="text-3xl text-center uppercase mb-4 p-2 bg-gray-600">
        My all toys :{myLoadedToys.length}
      </h3>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead className="text-orange-600">
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Category</th>
              <th>Seller</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {myLoadedToys.map((toy, index) => (
              <>
                <tr>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={toy.photoUrl} alt={toy.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{toy.category}</td>
                  <td>{toy.seller}</td>
                  <td>
                    <button className="btn btn-sm bg-yellow-400 hover:bg-yellow-600 border-none">
                      <FaEdit></FaEdit>
                    </button>
                    <button className="btn btn-sm bg-red-600 hover:bg-red-700 ml-2 border-none">
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
