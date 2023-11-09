import { useState } from "react";
import Button from "./components/button";
import Form from "./components/form";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './App.css'use

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Italian Pizza",
      description:
        "Delicious pizza with a thin crust, topped with fresh mozzarella, tomatoes, and basil.",
      price: 181860,
      imgUrl:
        "./assets/Bibimbap _ Recipe _ Asian recipes, Recipetin eats, Bibimbap recipe.jpg",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 2,
      name: "Sushi Platter",
      description:
        "A selection of the freshest sushi rolls, including tuna, salmon, and avocado.",
      price: 279860,
      imgUrl: "https://example.com/sushi.jpg",
      categoryId: 2,
      authorId: 1,
    },
    {
      id: 3,
      name: "Mexican Tacos",
      description:
        "Spicy tacos with seasoned ground beef, lettuce, cheese, and salsa.",
      price: 125860,
      imgUrl: "https://example.com/tacos.jpg",
      categoryId: 3,
      authorId: 1,
    },
    {
      id: 4,
      name: "Indian Curry",
      description:
        "A flavorful chicken curry with aromatic spices and basmati rice.",
      price: 223860,
      imgUrl: "https://example.com/curry.jpg",
      categoryId: 4,
      authorId: 1,
    },
    {
      id: 5,
      name: "Greek Salad",
      description:
        "A healthy salad with fresh vegetables, feta cheese, and olives.",
      price: 139860,
      imgUrl: "https://example.com/salad.jpg",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 6,
      name: "Japanese Ramen",
      description:
        "Authentic ramen with a rich pork broth, tender chashu, and noodles.",
      price: 195860,
      imgUrl: "https://example.com/ramen.jpg",
      categoryId: 2,
      authorId: 1,
    },
    {
      id: 7,
      name: "Mediterranean Kebabs",
      description:
        "Skewers of grilled chicken, vegetables, and tzatziki sauce.",
      price: 167860,
      imgUrl: "https://example.com/kebabs.jpg",
      categoryId: 3,
      authorId: 1,
    },
    {
      id: 8,
      name: "Thai Green Curry",
      description:
        "Spicy green curry with coconut milk, chicken, and Thai herbs.",
      price: 209860,
      imgUrl: "https://example.com/greencurry.jpg",
      categoryId: 4,
      authorId: 1,
    },
    {
      id: 9,
      name: "Burger Deluxe",
      description:
        "A classic beef burger with lettuce, tomato, cheese, and special sauce.",
      price: 153860,
      imgUrl: "https://example.com/burger.jpg",
      categoryId: 1,
      authorId: 1,
    },
    {
      id: 10,
      name: "Spanish Paella",
      description:
        "Saffron-infused rice with a mix of seafood, chicken, and vegetables.",
      price: 251860,
      imgUrl: "https://example.com/paella.jpg",
      categoryId: 2,
      authorId: 1,
    },
  ]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <body className="bg-slate-800">
        {/* <!-- navbar --> */}
        <div className="navbar bg-slate-800 text-neutral-content shadow-2xl">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">KaneBato</a>
          </div>
          <div className="flex-none gap-2">
            <a href="#_" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Add User</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
            <a href="#_" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Add New Cuisine</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
            <a href="#_" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Update Cuisine</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
            <a href="#_" class="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Upload Image</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>
        </div>
        {/* end of nav bar */}
        {/* <!-- login form --> */}
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
                <Button />
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
        {/* end of login form */}
        {/* <!-- add-user form --> */}
        <section className="bg-slate-800">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 shadow-2xl">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
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
                  <Button />
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end of add-user form */}
        {/* <!-- table info --> */}
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
                <th className="text-white">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => (
                <tr>
                  <td className="text-white">{el.name}</td>
                  <td className="text-white">{el.description}</td>
                  <td className="text-white">{el.price}</td>
                  <td className="text-white">{el.imgUrl}</td>
                  <td className="text-white">{el.categoryId}</td>
                  <td className="text-white">{el.authorId}</td>
                  <td>
                    <a
                      href="#_"
                      class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                    >
                      <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                      <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                      <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                        Delete
                      </span>
                      <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* end of table info */}
        {/* <!-- create form --> */}
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
                  >
                    Add Cuisine
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end of create form */}
        {/* <!-- update form --> */}
        <Form />
        {/* end of update form */}
        {/* <!-- Upload Image --> */}
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
                  >
                    Update Cuisine
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end of upload  image form */}
        {/* category table */}
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
        {/* end of category table */}
      </body>
    </>
  );
}

export default App;
