import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../layouts/GoogleLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Alert } from "react-daisyui";

const Login = () => {
  const { loginEmailPassword } = useContext(AuthContext);
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const loginEmailPass = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginEmailPassword(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        setWarning("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setWarning(error.message);
      });
  };
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-slate-300">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        {location.state && (
          <Alert className="bg-red-600">Login first to access !</Alert>
        )}
        {warning && <Alert className="bg-red-600">{warning}</Alert>}

        <GoogleLogin></GoogleLogin>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <form onSubmit={loginEmailPass} className="text-black">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
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

          {/* <div className="mt-4 flex justify-between font-semibold text-sm">
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
            href="#"
          >
            Forgot Password?
          </a>
        </div> */}
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Do not have an account?{" "}
          <Link
            to="/register"
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
