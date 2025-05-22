import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            rewind: true,
            gap: "1rem",
            arrows: false,
            pagination: false,
            autoplay: "play",
          }}
          aria-label="MV Images Kobe"
        >
          <SplideSlide>
            <div className="relative w-full h-screen">
              <img
                className="w-full h-full object-cover"
                src="/img/landing-carousel-1.jpg"
                alt="Image 1"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-[4rem] md:text-[7rem] text-white text-center font-bold">
                  The Legend
                </h1>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="relative w-full h-screen">
              <img
                className="w-full h-full object-cover"
                src="/img/landing-carousel-2.jpg"
                alt="Image 1"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-[4rem] md:text-[7rem] text-white text-center font-bold">
                  The Champion
                </h1>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="relative w-full h-screen">
              <img
                className="w-full h-full object-cover"
                src="/img/landing-carousel-3.jpg"
                alt="Image 1"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-[4rem] md:text-[7rem] text-white text-center font-bold">
                  The Olympian
                </h1>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </section>
      <section
        className=" bg-[#000] pt-[50px] overflow-hidden
"
      >
        <h1 className="block text-center text-[#fff] text-[3rem]">The Mamba</h1>
        <div className="mt-[40px] flex flex-col gap-[40px]">
          <div
            className="flex items-center justify-center w-full h-[300px] bg-[url(/img/shooting.jpg)] bg-no-repeat bg-cover bg-center"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div className="max-width text-center">
              <h1 className="text-[5rem] text-[#fff] max-md:text-[30px]">
                33,643 Career Points
              </h1>
              <span className="text">3rd in The NBA</span>
            </div>
          </div>
          <div
            className="mt-[20px] flex items-center justify-center w-full h-[300px] bg-[url(/img/champion.jpg)] bg-no-repeat bg-cover bg-center"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
          >
            <div className="max-width text-center">
              <h1 className="text-[5rem] text-[#fff] max-md:text-[30px]">
                5x Time NBA Champion
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[40px]">
          <Link
            to="/profile"
            className="flex items-center justify-center w-[200px] h-[40px] text-[1.6rem] text-[#fff] border border-[#fff] bg-[#000] hover:bg-[#fff] hover:text-[#000] duration-300 ease-in-out"
          >
            Explore
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
