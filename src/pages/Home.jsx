import HeroSection from "../components/HeroSection";
import SkillCategory from "../components/SkillCategory";
import { useEffect } from "react";
import AOS from "aos";



const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <HeroSection></HeroSection>
      <section className="py-16 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Categories</h2>
        <SkillCategory></SkillCategory>
      </section>
    </div>
  );
};

export default Home;
