import CategoriesTab from "../layouts/CategoriesTab";
import Contact from "../layouts/Contact";
import Gallery from "../layouts/Gallery";
import Map from "../layouts/Map";
import Slider from "../layouts/Slider";

const Home = () => {
  return (
    <div className="">
      <Slider></Slider>
      <CategoriesTab></CategoriesTab>
      <Gallery></Gallery>
      <Map></Map>
      <Contact></Contact>
    </div>
  );
};

export default Home;
