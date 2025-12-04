import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: "Sophia Turner",
      skillLearned: "Guitar",
      image:
        "https://i.ibb.co.com/wNv3M9K4/turner.jpg",
      quote:
        "I always wanted to learn guitar but couldn’t afford lessons. Through SkillSwap, I found Alex — now we swap guitar lessons for yoga training. It’s been amazing!",
    },
    {
      id: 2,
      name: "Michael Lee",
      skillLearned: "Cooking",
      image:
        "https://i.ibb.co.com/qLVkNsrj/lee.jpg",
      quote:
        "SkillSwap helped me learn home cooking from Emily in exchange for web development help. It’s more than learning — it’s building friendships.",
    },
    {
      id: 3,
      name: "Aisha Rahman",
      skillLearned: "Photography",
      image:
        "https://i.ibb.co.com/7tn6RxbM/aisha.jpg",
      quote:
        "Thanks to SkillSwap, I discovered a passion for photography! The one-on-one sessions made it easy to learn at my own pace.",
    },
    {
      id: 4,
      name: "Daniel Carter",
      skillLearned: "Digital Illustration",
      image:
        "https://i.ibb.co.com/8LJt3nXQ/ss.webp",
      quote:
        "Through SkillSwap, I exchanged fitness coaching for digital art lessons. Now I can create my own illustrations — something I never imagined I’d be able to do!",
    },
  ];

  return (
    <section className="py-16 bg-base-200" data-aos="fade-up">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Success Stories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real people. Real growth. See how SkillSwap is helping individuals
          learn, teach, and connect within their communities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-11/12 mx-auto">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300"
            data-aos="fade-up"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-purple-500"
            />
            <FaQuoteLeft className="text-2xl text-purple-500 mx-auto mb-3" />
            <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
            <h4 className="font-semibold text-lg text-gray-800">
              {story.name}
            </h4>
            <p className="text-sm text-gray-500">
              Learned {story.skillLearned}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
