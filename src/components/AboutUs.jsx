import React from "react";
import { FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-0 text-center">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    About <span className="text-purple-600">SkillSwap</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    SkillSwap is a community-driven platform designed to help people share
                    knowledge, learn new abilities, and connect with others who are passionate
                    about personal growth. Whether you're learning a new skill or offering one,
                    SkillSwap makes the exchange simple, meaningful, and rewarding.
                </p>

                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Mission */}
                    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                        <FaLightbulb className="text-4xl mx-auto mb-4 text-purple-600" />
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-gray-600">
                            To empower individuals by making skill-sharing accessible,
                            affordable, and enjoyable for everyone.
                        </p>
                    </div>

                    {/* Community */}
                    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                        <FaUsers className="text-4xl mx-auto mb-4 text-purple-600" />
                        <h3 className="text-xl font-semibold mb-2">Our Community</h3>
                        <p className="text-gray-600">
                            A growing network of learners, instructors, and creators who
                            believe in improving life through knowledge exchange.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
                        <FaHandshake className="text-4xl mx-auto mb-4 text-purple-600" />
                        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                        <p className="text-gray-600">
                            To become the most trusted platform where people can trade skills,
                            inspire one another, and build lasting connections.
                        </p>
                    </div>

                </div>

                {/* Footer Text */}
                <p className="text-gray-600 mt-12 max-w-3xl mx-auto">
                    At SkillSwap, we believe everyone has something valuable to share.
                    Our goal is to bring people together—those who want to grow and those
                    who want to help others grow. Together, we can build a world where learning
                    never stops and knowledge flows freely.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
