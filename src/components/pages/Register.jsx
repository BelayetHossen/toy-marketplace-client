import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../layouts/GoogleLogin";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { createUser, userNamePhoto } = useContext(AuthContext);

  const navigate = useNavigate();
  const submitRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    function checkPassword(str) {
      const passValRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      return passValRegEx.test(str);
    }
    if (!checkPassword(password)) {
      toast.error(
        "Password must be 8 caracters and numeric and special carecters mix"
      );
    }

    if (name == "") {
      toast.error("The name field is requrired!");
    }
    if (email == "") {
      toast.error("The email field is requrired!");
    }
    if (password == "") {
      toast.error("The password field is requrired!");
    }
    if (photo == "") {
      toast.error("The photo field is requrired!");
    }

    if (
      name != "" &&
      email != "" &&
      password != "" &&
      photo != "" &&
      checkPassword
    ) {
      createUser(email, password)
        .then((result) => {
          const registeredUser = result.user;
          update(registeredUser, name, photo);
          form.reset();
          setTimeout(function () {
            navigate("/", { replace: true });
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const update = (registeredUser, name, photo) => {
    userNamePhoto(registeredUser, name, photo)
      .then(() => {
        toast.success("User registered successfully! Redirecting.....");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <ToastContainer />
        <GoogleLogin></GoogleLogin>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or register with
          </p>
        </div>
        <form onSubmit={submitRegister} className="text-black">
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
              className="mt-4 bg-orange-500 hover:bg-orange-500 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
