import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";

const Home = () => {
  return (
    <div className=" top-relative flex flex-col full-width bg-black">
      <Navbar/>
      <Hero/>
    </div>
  );
};
export default Home;

