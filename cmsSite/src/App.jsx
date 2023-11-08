import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isPageAddUser, setIsPageAddUser] = useState(false);
  const [isPageAddCuisine, setIsPageAddCuisine] = useState(false);
  const [isPageUpdateCuisine, setIsPageUpdateCuisine] = useState(false);
  const [isPageUploadImage, setIsPageUploadImage] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  const [formLogin, setFromLogin] = useState({
    email: "",
    password: "",
  });

  const [formAddUser, setFromAddUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const onClickLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  const onClickAddUser = (e) => {
    e.preventDefault();
    setIsHomePage(false);
    setIsPageAddUser(true);
  };

  const onClickAddCuisine = (e) => {
    e.preventDefault();
    setIsHomePage(false);
    setIsPageAddCuisine(true);
  };

  const onClickUpdateCuisine = (e) => {
    e.preventDefault();
    setIsHomePage(false);
    setIsPageUpdateCuisine(true);
  };

  const onClickUploadImage = (e) => {
    e.preventDefault();
    setIsHomePage(false);
    setIsPageUploadImage(true);
  };

  const homePage = (e) => {
    e.preventDefault();
    setIsPageAddUser(false);
    setIsPageAddCuisine(false);
    setIsPageUpdateCuisine(false);
    setIsPageUploadImage(false);
    setIsHomePage(true);
  };

  const submitInputFormLogin = (e) => {
    e.preventDefault();
  };

  const onChangeLoginInput = (e) => {
    const data = e.target.value;
    console.log(data);
    setFromLogin(data);
  };

  const onChangeUserInput = (e) => {
    const data = e.target.value;
    console.log(data);
    setFromAddUser(data);
  };
  return (
    <>
      <body className="bg-slate-800">
        {/* <!-- navbar --> */}
        <div className="navbar bg-slate-800 text-neutral-content shadow-2xl">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">KaneBato</a>
          </div>
          <div className="flex-none gap-2">
            <button
              type="submit"
              className="btn btn-outline btn-default my-5 text-black"
              onClick={onClickAddUser}
            >
              add-user
            </button>
            <button
              type="submit"
              className="btn btn-outline btn-default my-5 text-black"
              onClick={onClickAddCuisine}
            >
              add new cuisine
            </button>
            <button
              type="submit"
              className="btn btn-outline btn-default my-5 text-black"
              onClick={onClickUpdateCuisine}
            >
              update cuisine
            </button>
            <button
              type="submit"
              className="btn btn-outline btn-default my-5 text-black"
              onClick={onClickUploadImage}
            >
              upload Image
            </button>
          </div>
        </div>
        {/* end of nav bar */}
        {/* <!-- login form --> */}
        {!isLogin && (
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                  className="space-y-4 md:space-y-6"
                  action="#"
                  // onSubmit={submitInputFormLogin}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      // placeholder="name@company.com"
                      //! value={formLogin.email}
                      onChange={onChangeLoginInput}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      //! value={formLogin.password}
                      onChange={onChangeLoginInput}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline btn-default my-5 text-black"
                    onClick={onClickLogin}
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
        {/* end of login form */}
        {/* <!-- add-user form --> */}
        {isLogin && isPageAddUser && (
          <section className="bg-slate-800">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign up your account
                  </h1>
                  <form
                    className="space-y-4 md:space-y-6"
                    action="#"
                    onChange={onChangeUserInput}
                  >
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your username
                      </label>
                      <input
                        type="username"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="user one"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your phone number
                      </label>
                      <input
                        type="phoneNumber"
                        name="phoneNumber"
                        id="phoneNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="08080808080"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your address
                      </label>
                      <input
                        type="address"
                        name="address"
                        id="address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="jl blablabli"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline btn-default my-5 text-black"
                      onClick={homePage}
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* end of add-user form */}
        {/* <!-- table info --> */}
        {isLogin && isHomePage && (
          <div className="overflow-x-auto  px-64 py-[200px]">
            <table className="table ">
              <thead>
                <tr>
                  <th className="text-white">Name</th>
                  <th className="text-white">Description</th>
                  <th className="text-white">Price</th>
                  <th className="text-white">ImgURL</th>
                  <th className="text-white">CategoryId</th>
                  <th className="text-white">AuthorId</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-white">Ayam geprek</td>
                  <td className="text-white">ini recommend banget</td>
                  <td className="text-white">Rp 300,000,00 </td>
                  <td className="text-white">
                    /images/stock/photo-1534528741775-53994a69daeb.jpg
                  </td>
                  <td className="text-white">2</td>
                  <td className="text-white">1</td>
                </tr>
                <tr>
                  <td className="text-white">Ayam geprek</td>
                  <td className="text-white">ini recommend banget</td>
                  <td className="text-white">Rp 300,000,00 </td>
                  <td className="text-white">
                    /images/stock/photo-1534528741775-53994a69daeb.jpg
                  </td>
                  <td className="text-white">2</td>
                  <td className="text-white">1</td>
                </tr>
                <tr>
                  <td className="text-white">Ayam geprek</td>
                  <td className="text-white">ini recommend banget</td>
                  <td className="text-white">Rp 300,000,00 </td>
                  <td className="text-white">
                    /images/stock/photo-1534528741775-53994a69daeb.jpg
                  </td>
                  <td className="text-white">2</td>
                  <td className="text-white">1</td>
                </tr>
                <tr>
                  <td className="text-white">Ayam geprek</td>
                  <td className="text-white">ini recommend banget</td>
                  <td className="text-white">Rp 300,000,00 </td>
                  <td className="text-white">
                    /images/stock/photo-1534528741775-53994a69daeb.jpg
                  </td>
                  <td className="text-white">2</td>
                  <td className="text-white">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {/* end of table info */}
        {/* <!-- create form --> */}
        {isLogin && isPageAddCuisine && (
          <section className="bg-slate-800 my-20">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create New Cuisine
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name cuisine
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="cosang"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price cuisine
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="imgUrl"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image cuisine
                      </label>
                      <input
                        type="imgUrl"
                        name="imgUrl"
                        id="imgUrl"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="imgUrl"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        name="categoryId"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="" disabled>
                          Category
                        </option>
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="authorId"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Author
                      </label>
                      <select
                        name="authorId"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="" disabled>
                          Author
                        </option>
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline btn-default my-5 text-black"
                      onClick={homePage}
                    >
                      Add Cuisine
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* end of create form */}
        {/* <!-- update form --> */}
        {isLogin && isPageUpdateCuisine && (
          <section className="bg-slate-800 my-1 py-24">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Update Cuisine
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name cuisine
                      </label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="cosang"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Price cuisine
                      </label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="imgUrl"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image cuisine
                      </label>
                      <input
                        type="imgUrl"
                        name="imgUrl"
                        id="imgUrl"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="imgUrl"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        name="categoryId"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="" disabled>
                          Category
                        </option>
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="authorId"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Author
                      </label>
                      <select
                        name="authorId"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value="" disabled>
                          Author
                        </option>
                        <option value="option-1">Option 1</option>
                        <option value="option-2">Option 2</option>
                        <option value="option-3">Option 3</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-outline btn-default my-5 text-black"
                      onClick={homePage}
                    >
                      Update Cuisine
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* end of update form */}
        {/* <!-- Upload Image --> */}
        {isLogin && isPageUploadImage && (
          <section className="bg-slate-800">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <img
                      className="w-full rounded-box"
                      src="https://ik.imagekit.io/q7pvfvakd/download_fzKMvrwNK.jpeg?updatedAt=1699032991278"
                      alt=""
                    />
                    <div className="font-bold text-xl mb-2">Ayam Kecap </div>

                    <div className="upload-container relative flex items-center justify-between w-full">
                      <div className="drop-area w-full rounded-md border-2 border-dotted border-gray-200 transition-all hover:border-blue-600/30 text-center">
                        <label
                          htmlFor="file-input"
                          className="block w-full h-full text-gray-500 p-4 text-sm cursor-pointer"
                        >
                          Drop your image here or click to browse
                        </label>
                        <input
                          name="imgData"
                          type="file"
                          id="file-input"
                          accept="image/*"
                          className="hidden"
                        />
                        {/* <!-- Image upload input --> */}
                        <div className="preview-container hidden items-center justify-center flex-col">
                          <div className="preview-image w-36 h-36 bg-cover bg-center rounded-md"></div>
                          <span className="file-name my-4 text-sm font-medium"></span>
                          <p className="close-button cursor-pointer transition-all mb-4 rounded-md px-3 py-1 border text-xs text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
                            Delete
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-outline btn-default my-5 text-black"
                      onClick={homePage}
                    >
                      Update Cuisine
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* end of upload  image form */}
        {/* category table */}]
        {isLogin && isHomePage && (
          <div className="overflow-x-auto px-[500px] py-[200px] shadow-lg">
            <table className="table ">
              <thead>
                <tr>
                  <th className="text-white">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-white"> Desserts </td>
                </tr>
                <tr>
                  <td className="text-white"> Beverages </td>
                </tr>
                <tr>
                  <td className="text-white"> Snacks </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {/* end of category table */}
      </body>
    </>
  );
}

export default App;
