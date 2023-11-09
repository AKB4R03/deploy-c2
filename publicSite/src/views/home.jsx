import Card from "../components/card";
import Filter from "../components/filtering";
import Page from "../components/pagination";
const Home = () => {
  return (
    <>
      <div className="bg-slate-900">
        <Page />
        <Filter />
        <Card />
      </div>
    </>
  );
};

export default Home;
