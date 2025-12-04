import React from "react";
import { FaUserPlus, FaBookOpen, FaHandshake, FaStar } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-5xl text-purple-600 mb-4" />,
      title: "1. Create Your Profile",
      description:
        "Sign up and set up your SkillSwap profile — tell others what skills you want to learn or teach.",
    },
    {
      id: 2,
      icon: <FaBookOpen className="text-5xl text-blue-600 mb-4" />,
      title: "2. Browse or Add Skills",
      description:
        "Explore available skills or post your own. From music and cooking to coding and design — it’s all here.",
    },
    {
      id: 3,
      icon: <FaHandshake className="text-5xl text-green-600 mb-4" />,
      title: "3. Connect & Learn Together",
      description:
        "Request a session or accept one. Exchange skills, learn something new, and grow your community.",
    },
    {
      id: 4,
      icon: <FaStar className="text-5xl text-yellow-500 mb-4" />,
      title: "4. Share Your Experience",
      description:
        "Leave a review and help others discover great learning partners while growing the SkillSwap community.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          SkillSwap makes learning and teaching easy. Just follow these simple
          steps to start your journey!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-11/12 mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            {step.icon}
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
