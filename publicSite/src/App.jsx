import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./components/card";
import viteLogo from "/vite.svg";
// import './App.css'
// import { useState } from "react";
function App() {
  const [detail, setDetail] = useState(true);
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
  const isDetail = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setDetail(false);
  };

  const backToHomePage = (e) => {
    e.preventDefault();

    setDetail(true);
  };

  const onChangeDetail = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      {/* <!-- navbar --> */}

      <body className="bg-slate-800 ">
        {/* navbar */}
        <div className="navbar bg-slate-800 text-neutral-content shadow-xl">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">KaneBato</a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                </div>
              </label>
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Card detail={detail} data={data} isDetail={isDetail} />

        {/* <!-- card --> */}
        {/* {detail && (
          <>
            <div className="flex justify-evenly my-5 mx-5 grid grid-cols-4 gap-4 place-content-center ">
              {data.map((el) => (
                <>
                  <div
                    className="max-w-sm rounded-box overflow-hidden shadow-lg bg-slate-700 w-[75]"
                    key={el.id}
                  >
                    <img
                      className="w-full"
                      src="https://ik.imagekit.io/q7pvfvakd/download_fzKMvrwNK.jpeg?updatedAt=1699032991278"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-white">
                        {el.name}
                      </div>
                      <button
                        className="btn btn-outline btn-default my-5 text-white"
                        onClick={isDetail}
                        value={el.id}
                        onChange={onChangeDetail}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </>
        )} */}
        {/* end of card  */}

        {/* <!-- detail --> */}
        {!detail && (
          <>
            <section className="flex justify-center">
              {data.map((el) => (
                <form
                  method="dialog"
                  className="modal-box rounded-box "
                  key={el.id}
                >
                  <img
                    className="w-full rounded-box"
                    src="https://ik.imagekit.io/q7pvfvakd/download_fzKMvrwNK.jpeg?updatedAt=1699032991278"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">
                      {el.name}
                    </div>
                    <p className="py-8">{el.description}</p>
                    <p className="py-8">{el.price}</p>
                    <button
                      className="btn btn-outline btn-default my-5"
                      onClick={backToHomePage}
                    >
                      Pesan
                    </button>
                  </div>
                </form>
              ))}
            </section>
          </>
        )}
        {/* end detail */}
      </body>
    </>
  );
}

export default App;
