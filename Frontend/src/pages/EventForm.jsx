import { useState } from "react";

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    price: "",
    image: "",
    place: "",
    capacity: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data:", formData);
 
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg mt-10">
      <h2 className="text-xl font-bold mb-6 text-red-600">
        Créer un événement
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="text-sm font-medium">Titre</label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            className="border rounded-lg p-3 w-full outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Prix (DH)</label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Image (URL)</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="border rounded-lg p-3 w-full outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Lieu</label>
            <input
              type="text"
              name="location"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full outline-none"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Capacité</label>
            <input
              type="number"
              name="capacity"
              onChange={handleChange}
              className="border rounded-lg p-3 w-full outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            rows="3"
            onChange={handleChange}
            className="border rounded-lg p-3 w-full outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white py-3 w-full rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center gap-2"
        >
          + Créer
        </button>

      </form>
    </div>
  );
};

export default EventForm;
