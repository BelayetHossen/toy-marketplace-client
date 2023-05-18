import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  //   if (loading) {
  //     return (
  //       <div className="col-2 m-auto">
  //         <RotatingLines
  //           strokeColor="blue"
  //           strokeWidth="5"
  //           animationDuration="0.75"
  //           width="96"
  //           visible={true}
  //         />
  //       </div>
  //     );
  //   }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
