import React from "react";

const categories = [
  {
    name: "Music",
    image: "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg",
  },
  {
    name: "Cooking",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
  {
    name: "Programming",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg",
  },
  {
    name: "Language",
    image: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
  },
  {
    name: "Fitness",
    image: "https://images.pexels.com/photos/3823034/pexels-photo-3823034.jpeg",
  },
];

const SkillCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-6">
      {categories.map((cat, i) => (
        <div key={i} className="card bg-base-100 shadow-lg hover:scale-105 transition" data-aos="fade-up">
          <figure><img src={cat.image} alt={cat.name} className="h-40 w-full object-cover" /></figure>
          <div className="card-body items-center text-center">
            <h3 className="font-semibold text-lg">{cat.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCategory;
