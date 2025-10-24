import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-500">Please log in to see your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-2xl shadow">
      <div className="flex flex-col items-center">
        <img
          src={user.photoURL || "https://i.ibb.co.com/nNBzT2zv/p1.jpg"}
          alt={user.displayName || "User Avatar"}
          className="w-24 h-24 rounded-full border-4 border-[#632ee3]"
        />
        <h2 className="text-2xl font-bold mt-4">{user.displayName || "No Name Found"}</h2>
        <p className="text-gray-500">{user.email}</p>

        <p className="mt-2 text-sm text-gray-400">
          Joined: {user.metadata?.creationTime
            ? new Date(user.metadata.creationTime).toLocaleDateString()
            : "Unknown"}
        </p>

        <button className="btn btn-primary my-3">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
