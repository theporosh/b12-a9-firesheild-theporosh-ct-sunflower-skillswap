import { useState } from "react";
import toast from "react-hot-toast";

const AddSkill = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Skill added successfully!");
    setFormData({ title: "", category: "", description: "", image: "" });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
        Add a New Skill
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Skill Title"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category (e.g. Design, Language, Coding)"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="textarea textarea-bordered w-full"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default AddSkill;
