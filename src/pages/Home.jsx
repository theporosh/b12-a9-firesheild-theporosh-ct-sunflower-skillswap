import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import AOS from "aos";
import Skills from "./Skills";
import { useLoaderData } from "react-router";
import HowItWorks from "../components/HowItWorks";
import TopRatedProviders from "../components/TopRatedProviders";
import SuccessStories from "../components/SuccessStories";



const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

   const skills = useLoaderData();
  //  console.log(skills)

  return (
    <div>
        {/* Hero Slider (use Swiper */}
      <HeroSection></HeroSection>

        {/* Popular Skills – Cards with */}
      <section className="py-10 bg-base-200">
            <Skills skills={skills}></Skills>
      </section>

        {/* Top Rated Providers Section */}
      <section className="py-10 bg-base-200">
        <TopRatedProviders></TopRatedProviders>
      </section>

        {/* How It Works Section */}
      <section>
            <HowItWorks></HowItWorks>
      </section>

        {/*extra section: SuccessStories */}
      <section>
         <SuccessStories></SuccessStories>
      </section>
    </div>
  );
};

export default Home;
