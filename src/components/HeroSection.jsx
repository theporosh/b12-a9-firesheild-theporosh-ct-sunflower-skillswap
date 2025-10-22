import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="relative">
      <Swiper autoplay={{ delay: 3000 }} loop={true}>
        <SwiperSlide>
          <div
            className="hero min-h-[80vh]"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Learn & Share Skills Locally</h1>
                <p className="py-6">
                  Exchange your knowledge, grow your network, and master something new — all within your community!
                </p>
                <Link to="/skills" className="btn btn-primary">Explore Skills</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-[80vh]"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Trade What You Know</h1>
                <p className="py-6">
                  Offer guitar lessons, learn a new language, or teach yoga — SkillSwap makes it easy!
                </p>
                <Link to="/add-skill" className="btn btn-accent">Offer a Skill</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
