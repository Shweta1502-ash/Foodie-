import { FormEvent, useState, useContext, useLayoutEffect } from "react";
import { Input, Form, Button } from "../../components";
import recipeOne from "../../assets/recipe-one.png.jpg";
import { validateEmail } from "../../utils";
import { AuthenticationContext } from "../../context";
import { AUTH_TYPE } from "../../@types";
import cogoToast from "cogo-toast";
import { useNavigate } from "react-router-dom";

type _STATE = {
  email: string;
  password: string;
  confirmPassword?: string;
};

export const Landing = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  // Protecting this route (can be done in a higher-order component)
  useLayoutEffect(() => {
    if (
      !!sessionStorage.getItem("token") &&
      !!sessionStorage.getItem("email")
    ) {
      navigate("/dashboard");
    }
  }, []);

  // Using AuthenticationContext
  const context = useContext(AuthenticationContext) as AUTH_TYPE;
  if (!context) {
    console.error("AuthenticationContext is null.");
    return <div>Error: Authentication context is not available.</div>;
  }
  const { loading, onLogin } = context;

  const [state, setState] = useState<_STATE>({ 
    email: "", 
    password: "",
    confirmPassword: ""
  });

  const handleState = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(state.email)) {
      return cogoToast.error("Invalid email");
    }

    if (!state.password) {
      return cogoToast.error("Please provide a password");
    }

    if (isSignup && state.password !== state.confirmPassword) {
      return cogoToast.error("Passwords do not match");
    }

    if (isSignup && state.password.length < 6) {
      return cogoToast.error("Password must be at least 6 characters");
    }

    try {
      if (onLogin) {
        await onLogin({
          email: state.email,
          password: state.password,
        });
      }
    } catch (err: any) {
      console.error(err);
      cogoToast.error("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Form
        className="flex items-center justify-center w-full md:w-1/2 h-full p-10 bg-black text-white"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 w-full">
          {/* Enhanced Zaika Heading */}
          <h2 className="text-orange-500 font-extrabold text-3xl md:text-4xl underline underline-offset-8 mb-4">
            Zaika
          </h2>

          {/* Auth Type Toggle Tabs */}
          <div className="flex gap-2 mb-6 w-full md:w-[80%]">
            <button
              type="button"
              onClick={() => {
                setIsSignup(false);
                setState({ email: "", password: "", confirmPassword: "" });
              }}
              className={`flex-1 py-2 px-4 font-semibold rounded transition ${
                !isSignup
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSignup(true);
                setState({ email: "", password: "", confirmPassword: "" });
              }}
              className={`flex-1 py-2 px-4 font-semibold rounded transition ${
                isSignup
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Title */}
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            {isSignup ? "Create your account" : "Welcome back"}
          </h3>

          {/* Input Fields with Less Width */}
          <Input
            name="email"
            placeholder="Email"
            handleChange={handleState}
            type="text"
            value={state.email}
            className="bg-zinc-900 py-1 px-4 w-full md:w-[80%] shadow-xl placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none"
          />

          <Input
            name="password"
            placeholder="Password"
            handleChange={handleState}
            type="password"
            value={state.password}
            className="bg-zinc-900 py-1 px-4 w-full md:w-[80%] placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none"
          />

          {/* Confirm Password - Only for Signup */}
          {isSignup && (
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              handleChange={handleState}
              type="password"
              value={state.confirmPassword}
              className="bg-zinc-900 py-1 px-4 w-full md:w-[80%] placeholder:text-sm hover:bg-zinc-800 cursor-pointer focus:outline-none"
            />
          )}

          <div className="w-full md:w-[50%] m-auto flex flex-col gap-2">
            <Button
              title={loading ? "Loading..." : isSignup ? "Sign Up" : "Login"}
              className="bg-orange-500 text-white hover:bg-orange-600 py-1 px-6 w-full disabled:opacity-50"
              type="submit"
              disabled={loading}
            />
          </div>

          {/* Helper Text */}
          <p className="text-sm text-gray-400 text-center md:w-[80%]">
            {isSignup
              ? "Already have an account? Click the Login tab"
              : "Don't have an account? Click the Sign Up tab"}
          </p>
        </div>
      </Form>

      <div className="hidden md:block w-1/2 h-full">
        <img
          src={recipeOne}
          alt="A dish with food recipes"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
