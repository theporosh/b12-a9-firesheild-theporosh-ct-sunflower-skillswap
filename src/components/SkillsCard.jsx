import React from 'react';
import { Link } from 'react-router';

const SkillsCard = ({ skill }) => {

    const { skillName, image, rating, price, skillId } = skill;

    return (
        <div

            className="card bg-white shadow-lg hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
        >
            <figure>
                <img
                    src={image}
                    alt={skillName}
                    className="w-full h-56 object-cover rounded-t-xl"
                />
            </figure>
            <div className="card-body">
                <h3 className="card-title text-lg font-semibold">
                    {skillName}
                </h3>
                <p className="text-sm text-gray-600">
                    ⭐ {rating} | 💰 ${price}
                </p>
                <div className="card-actions justify-end mt-4">
                    <Link
                        to={`/skillDetails/${skillId}`}
                        className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;