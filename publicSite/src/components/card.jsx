import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RESTAURANT_SERVER_URL = "http://localhost:3000";
const restApi = axios.create({
  baseURL: RESTAURANT_SERVER_URL,
});

const Card = () => {
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);
  const [rest, setRest] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    const fetchRest = async () => {
      try {
        setIsloading(true);
        const { data } = await restApi.get("/cuisine/pub");
        setRest(data);
      } catch (error) {
        console.log(error);
        setError(err);
      } finally {
        setIsloading(false);
      }
    };
    fetchRest();
  }, []);

  if (isLoading) return <p>Loading......Sabar</p>;
  if (error) return <p>error fetching, please try again!!</p>;
  return (
    <>
      {/* <h1>cuko</h1> */}
      <section className="bg-slate-900">
        <div className="flex justify-evenly my-5 mx-5 grid grid-cols-4 gap-4 shadow-lg bg-slate-900 place-content-center ">
          {rest?.data?.rows?.map((el) => (
            <>
              <div
                className="max-w-sm rounded-lg overflow-hidden shadow-xl bg-slate-700 w-[350px]"
                key={el.id}
              >
                <img className="w-full max-h-48 object-cover" src={el.imgUrl} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-white">
                    {el.name}
                  </div>
                  <a href="#_" className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                      <span
                        className="relative"
                        onClick={() => handleClick(el.id)}
                      >
                        Detail
                      </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                      data-rounded="rounded-lg"
                    ></span>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card;
