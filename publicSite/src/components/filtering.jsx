const Filter = () => {
  return (
    <>
      <div className="dropdown dropdown-top dropdown-end px-[600px]">
        <label tabIndex={0} className="btn m-1">
          filter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>name</a>
          </li>
          <li>
            <a>price</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Filter;
