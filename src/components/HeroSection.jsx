import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <Swiper autoplay={{ delay: 3000 }} loop={true}>

        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="hero min-h-[65vh] w-full"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/XftydJmG/hero1.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-full">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Learn & Share Skills Locally
                </h1>
                <p className="py-6 text-lg">
                  Exchange your knowledge, grow your network, and master something new — all within your community!
                </p>
                <Link to="/" className="btn btn-primary">
                  Explore Skills
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="hero min-h-[65vh] w-full"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/qLmnpwwR/hero2.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-full">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Trade What You Know
                </h1>
                <p className="py-6 text-lg">
                  Offer guitar lessons, learn a new language, or teach yoga — SkillSwap makes it easy!
                </p>
                <Link to="/add-skill" className="btn btn-accent">
                  Offer a Skill
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="hero min-h-[65vh] w-full"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/qLT9Rhxm/hero3.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content w-full">
              <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Learn Anything. Teach Anything.
                </h1>
                <p className="py-6 text-lg">
                  Meet new people, build real connections, and exchange your unique skills with others.
                </p>
                <Link to="/skills" className="btn btn-secondary">
                  Discover Skills
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HeroSection;
