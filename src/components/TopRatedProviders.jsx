import React from "react";
import { FaStar } from "react-icons/fa";

const TopRatedProviders = () => {
  const providers = [
    {
      id: 1,
      name: "Alex Martin",
      skill: "Guitar Lessons",
      rating: 4.9,
      image:
        "https://i.ibb.co.com/HLBRfWY8/alex.jpg",
      students: 120,
    },
    {
      id: 2,
      name: "Emily Carter",
      skill: "Home Cooking",
      rating: 4.8,
      image:
        "https://i.ibb.co.com/YFzx0p8G/emily.jpg",
      students: 95,
    },
    {
      id: 3,
      name: "David Kim",
      skill: "Web Development",
      rating: 5.0,
      image:
        "https://i.ibb.co.com/GQbV23Kz/david.jpg",
      students: 140,
    },
    {
      id: 4,
      name: "Nora Adams",
      skill: "Photography Basics",
      rating: 4.7,
      image:
        "https://i.ibb.co.com/s42n8dK/nora.jpg",
      students: 88,
    },
  ];

  return (
    <section className="py-6 bg-base-100">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Top Rated Providers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet some of our most popular instructors who’ve helped learners
          master new skills through SkillSwap.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto"
        data-aos="fade-up"
      >
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-500"
            />
            <h3 className="text-lg font-semibold mb-1">{provider.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{provider.skill}</p>

            <div className="flex items-center justify-center mb-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="font-medium">{provider.rating}</span>
            </div>

            <p className="text-sm text-gray-500">
              {provider.students}+ students
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;
