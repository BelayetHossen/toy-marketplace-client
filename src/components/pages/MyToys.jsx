import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Alert } from "react-daisyui";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myLoadedToys, setMyLoadedToys] = useState([]);
  console.log(user);

  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyLoadedToys(data));
  }, [url]);

  const handleDelete = (id) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are You sure you want to delete?",
      buttons: [
        {
          label: "Yes",
          onClick: () =>
            fetch(`http://localhost:5000/toy/delete/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  toast.success("Data deleted successfully! ");
                  const remaining = myLoadedToys.filter(
                    (booking) => booking._id !== id
                  );
                  setMyLoadedToys(remaining);
                }
              }),
        },
        {
          label: "No",
          onClick: () => toast.success("Data is safe"),
        },
      ],
    });
  };
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
      <h3 className="text-2xl text-center uppercase mb-4 p-2 bg-gray-600">
        My all toys : {myLoadedToys.length} items
      </h3>
      <ToastContainer />
      {myLoadedToys.length > 0 ? (
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
                      <div
                        key={toy._id}
                        className="flex items-center space-x-3"
                      >
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
                      <Link
                        to={`/toy/edit/${toy._id}`}
                        className="btn btn-sm bg-yellow-400 hover:bg-yellow-600 border-none"
                      >
                        <FaEdit></FaEdit>
                      </Link>
                      <button
                        onClick={() => handleDelete(toy._id)}
                        className="btn btn-sm bg-red-600 hover:bg-red-700 ml-2 border-none"
                      >
                        <FaTrash></FaTrash>
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Alert className="bg-yellow-400 text-gray-600 p-2 rounded mb-3">
          <p>No data ! please add toys</p>
          <Link
            to="/addToy"
            className="btn bg-green-500 btn-sm hover:bg-orange-600 border-none"
          >
            Add toy
          </Link>
        </Alert>
      )}
    </div>
  );
};

export default MyToys;
