import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <section className="pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-5 xl:gap-40 items-center gap-y-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-volkhov font-bold">
            The ultimate tour guide to fuel your wanderlust
          </h1>
          <p className="my-8 lg:my-10">
            Trippie provies the best service and travel suggestions around the
            world for you. Pack your bag and travel the world.
          </p>
          <Link
            to="/"
            className="px-8 md:px-12 py-3 rounded-lg outline outline-1 text-primary text-sm md:text-base xl:text-lg font-semibold"
          >
            Discover Now
          </Link>
        </div>
        <div className="">
          <img src={banner} alt="banner-img" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
