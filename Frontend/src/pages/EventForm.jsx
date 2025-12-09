import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const EventForm = () => {
  const navigate = useNavigate();

  const { ajouter, loading } = useContext(EventContext);

  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    place: "",
    capacity: "",
    date: "",
    image: null,
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFile = (event) => {
    setFormData((prev) => ({ ...prev, image: event.target.files[0] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await ajouter(formData);

    navigate("/events");

    if (res?.errors) {
      setErrors(res.errors);
    }
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
            onChange={handleChange}
            name="title"
            className="border p-3 rounded-lg w-full"
            value={formData.title}
          />
          {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              value={formData.date}
              className="border p-3 rounded-lg w-full"
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Prix (DH)</label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={formData.price}
              className="border p-3 rounded-lg w-full"
            />
            {errors.price && <p className="text-red-500">{errors.price}</p>}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFile}
            accept="image/*"
            className="border p-3 rounded-lg w-full"
          />
          {errors.image && <p className="text-red-500">{errors.image}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Lieu</label>
            <input
              type="text"
              name="place"
              onChange={handleChange}
              value={formData.place}
              className="border p-3 rounded-lg w-full"
            />
            {errors.place && <p className="text-red-500">{errors.place}</p>}
          </div>

          <div>
            <label className="text-sm font-medium">Capacité</label>
            <input
              type="number"
              name="capacity"
              onChange={handleChange}
              value={formData.capacity}
              className="border p-3 rounded-lg w-full"
            />
            {errors.capacity && (
              <p className="text-red-500">{errors.capacity}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            rows="3"
            onChange={handleChange}
            name="description"
            value={formData.description}
            className="border p-3 rounded-lg w-full"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white 
    ${
      loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
    }
  `}
        >
          {loading ? "Veuillez patienter..." : "+ Créer"}
        </button>
      </form>
    </div>
  );
};

export default EventForm;
