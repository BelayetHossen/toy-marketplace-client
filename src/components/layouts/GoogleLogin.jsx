import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const LoginGoogleHandler = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-center">
        <button
          onClick={LoginGoogleHandler}
          type="button"
          className="p-3 bg-orange-600 hover:bg-orange-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
        >
          Sign In with google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
