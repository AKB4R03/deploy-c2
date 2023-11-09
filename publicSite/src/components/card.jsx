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
      <div className="flex justify-evenly my-5 mx-5 grid grid-cols-4 gap-4 place-content-center ">
        {rest?.data?.rows?.map((el) => (
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
                  onClick={() => handleClick(el.id)}
                >
                  Detail
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Card;
