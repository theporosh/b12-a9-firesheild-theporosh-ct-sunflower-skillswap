import React from "react";
import { FaEnvelope, FaPhoneAlt, FaComments, FaQuestionCircle } from "react-icons/fa";

const Support = () => {
    return (
        <div className="py-16 bg-white">
            <div className="max-w-5xl mx-auto px-6 lg:px-0 text-center">

                {/* Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Need <span className="text-purple-600">Support?</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    We're here to help! Whether you're facing login issues, need help with bookings,
                    or have questions about adding a skill — our support team is ready to assist you.
                </p>

                {/* Support Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Email */}
                    <div className="p-8 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition">
                        <FaEnvelope className="text-4xl text-purple-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                        <p className="text-gray-600 mb-3">
                            Get quick responses directly from our support team.
                        </p>
                        <a
                            href="mailto:support@skillswap.com"
                            className="text-purple-600 font-medium hover:underline"
                        >
                            support@skillswap.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="p-8 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition">
                        <FaPhoneAlt className="text-4xl text-purple-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                        <p className="text-gray-600 mb-3">
                            Need urgent help? Our support hotline is available.
                        </p>
                        <p className="text-purple-600 font-medium">+1 (800) 123-4567</p>
                    </div>

                    {/* Live Chat */}
                    <div className="p-8 rounded-xl shadow-md bg-gray-50 hover:shadow-lg transition">
                        <FaComments className="text-4xl text-purple-600 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                        <p className="text-gray-600 mb-3">
                            Chat with our support team in real-time during working hours.
                        </p>
                        <button className="text-white bg-purple-600 px-5 py-2 rounded-lg hover:bg-purple-700 transition">
                            Start Chat
                        </button>
                    </div>

                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center justify-center gap-2">
                        <FaQuestionCircle className="text-purple-600 text-3xl" />
                        Frequently Asked Questions
                    </h3>

                    <div className="text-left max-w-3xl mx-auto space-y-6">

                        <details className="group bg-gray-50 p-5 rounded-lg shadow">
                            <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-purple-600">
                                How do I book a skill?
                            </summary>
                            <p className="mt-2 text-gray-600">
                                Go to the skill details page and click the “Book Now” button.
                                You must be logged in to complete the booking.
                            </p>
                        </details>

                        <details className="group bg-gray-50 p-5 rounded-lg shadow">
                            <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-purple-600">
                                How do I add a new skill?
                            </summary>
                            <p className="mt-2 text-gray-600">
                                Navigate to the “Add Skill” page from the navbar, fill in the information,
                                and submit. Your skill will be added instantly.
                            </p>
                        </details>

                        <details className="group bg-gray-50 p-5 rounded-lg shadow">
                            <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-purple-600">
                                Can I update my profile?
                            </summary>
                            <p className="mt-2 text-gray-600">
                                Yes. Visit the “My Profile” section where you can update your name,
                                photo URL, and other details.
                            </p>
                        </details>

                    </div>
                </div>

                {/* Footer Text */}
                <p className="mt-14 text-gray-600 max-w-2xl mx-auto">
                    Our goal is to make your SkillSwap experience smooth and enjoyable.
                    If you need help at any time, don't hesitate to reach out — we're always here for you.
                </p>
            </div>
        </div>
    );
};

export default Support;
