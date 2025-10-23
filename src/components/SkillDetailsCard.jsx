import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import { Link } from 'react-router';

const SkillDetailsCard = ({ skill }) => {

    // console.log(skill);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Handle booking form
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Your booking request has been submitted successfully!");
        e.target.reset();
    };

    if (!skill) {
        return (
            <div className="flex justify-center items-center h-64 text-xl font-semibold text-gray-600">
                Skill not found.
            </div>
        );
    }

    return (
        <div>
            <Toaster></Toaster>
            <div
                className="flex flex-col lg:flex-row gap-10 items-start"
                data-aos="fade-up"
            >
                {/* Skill Image */}
                <div className="lg:w-1/2">
                    <img
                        src={skill.image}
                        alt={skill.skillName}
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>

                {/* Skill Details */}
                <div className="lg:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                        {skill.skillName}
                    </h2>
                    <p className="text-gray-600">{skill.description}</p>

                    <div className="space-y-2">
                        <p>
                            <span className="font-semibold">Provider:</span>{" "}
                            {skill.providerName}
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span>{" "}
                            {skill.providerEmail}
                        </p>
                        <p>
                            <span className="font-semibold">Category:</span>{" "}
                            {skill.category}
                        </p>
                        <p>
                            <span className="font-semibold">Price:</span> ${skill.price}
                        </p>
                        <p>
                            <span className="font-semibold">Rating:</span> ⭐{" "}
                            {skill.rating}
                        </p>
                        <p>
                            <span className="font-semibold">Available Slots:</span>{" "}
                            {skill.slotsAvailable}
                        </p>
                    </div>

                    {/* Booking Form */}
                    <div
                        className="mt-8 p-6 bg-base-200 rounded-2xl shadow-md"
                        data-aos="fade-up"
                    >
                        <h3 className="text-2xl font-semibold mb-4">
                            Book a Session with {skill.providerName}
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default SkillDetailsCard;