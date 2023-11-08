const Card = ({ detail, data, isDetail }) => {
  return (
    <>
      {/* <h1>cuko</h1> */}
      {detail && (
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
                    // value={el.id}
                    // onChange={onChangeDetail}
                  >
                    Detail
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
