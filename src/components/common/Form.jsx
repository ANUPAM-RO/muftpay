import { Link } from "react-router-dom";
import "../LogIn/login.css"
const Form = ({
  isLogin,
  userName,
  setUserName,
  email,
  setEmail,
  phone,
  setPhone,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  showCpassword,
  isChecked,
  handleCheckboxChange,
  handleLogin,
  handleRegister,
  togglePasswordVisibility,
  toggleCPasswordVisibility,
}) => {

  return (
    <div className="flex justify-center items-center h-[100%]">
      <div className="w-full max-w-sm px-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-2" action="#">
          <h5 className="text-2xl font-semibold dark:text-white">
            Welcome to Muftpay App
          </h5>
          <p className="pb-4" style={{ color: "#77878F" }}>
            Please {isLogin ? "sign-in" : "sign-up"} your account
          </p>
          <hr />
          {isLogin ? (
            <>
              <div className="pt-4">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                  style={{ color: "#191C1F" }}
                >
                  Email Address / Mobile Number
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                  style={{ color: "#191C1F" }}
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border  border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  onClick={togglePasswordVisibility}
                  src={!showPassword ? "./Hide-512.webp" : "./Eye.svg"}
                  alt=""
                  className="w-5 h-6 absolute top-9 right-2"
                />
              </div>
            </>
          ) : (
            <>
              <div className="pt-4">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium dark:text-white"
                  style={{ color: "#191C1F" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder=""
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                  style={{ color: "#191C1F" }}
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="+91 |"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium dark:text-white"
                  style={{ color: "#191C1F" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="relative">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                  style={{ color: "#191C1F" }}
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border  border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  onClick={togglePasswordVisibility}
                  src={!showPassword ? "./Hide-512.webp" : "./Eye.svg"}
                  alt=""
                  className="w-5 h-6 absolute top-9 right-2 cursor-pointer"
                />
              </div>
              <div className="relative">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium  dark:text-white"
                  style={{ color: "#191C1F" }}
                >
                  Confirm Password
                </label>
                <input
                  type={showCpassword ? "text" : "password"}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Your Password"
                  className="border  border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <img
                  onClick={toggleCPasswordVisibility}
                  src={!showCpassword ? "./Hide-512.webp" : "./Eye.svg"}
                  alt=""
                  className="w-5 h-6 absolute top-9 right-2 cursor-pointer"
                />
              </div>
            </>
          )}

          {isLogin ? (
            <div className="flex items-start">
              <div className="flex items-start">
                <label className="containerLogin text-sm">
                  Remember me
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <a
                href="#"
                className="ms-auto text-sm font-medium text-color  mt-2"
              >
                Forget Password?
              </a>
            </div>
          ) : (
            <div className="flex items-start">
              <label className="containerLogin text-sm" style={{ color: "#475156" }}>
                I Agree to Privacy policy & terms
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          )}

          <button
            type="submit"
            style={{ backgroundColor: "#CB7EFF" }}
            className="w-full text-whitefont-medium text-sm text-white px-5 py-2.5 text-center"
            onClick={isLogin ? handleLogin : handleRegister}
          >
            <div className="flex justify-center gap-2 uppercase">
              {isLogin ? "Login" : "Register"}
              <img src="./ArrowRight.svg" alt="" />
            </div>
          </button>
          {isLogin ? (
            <div
              className="text-sm font-medium text-center pb-8"
              style={{ color: "#191C1F" }}
            >
              New on our platform?{" "}
              <Link to="/register">Create an account.</Link>
            </div>
          ) : (
            <div
              className="text-sm font-medium text-center pb-8"
              style={{ color: "#191C1F" }}
            >
              Already have an account? <Link to="/">Sign in instead.</Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
