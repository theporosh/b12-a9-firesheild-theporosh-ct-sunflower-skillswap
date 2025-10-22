const MyProfile = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joined: "January 2025",
    avatar: "https://i.ibb.co.com/nNBzT2zv/p1.jpg",
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-2xl shadow">
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-[#632ee3]"
        />
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
        <p className="mt-2 text-sm text-gray-400">
          Joined {user.joined}
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
