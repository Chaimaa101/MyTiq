import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    price: "",
    place: "",
    capacity: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load event data
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/events/${id}`)
      .then((res) => {
        setFormData(res.data.event);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load event");
        setLoading(false);
      });
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Modifier l'événement</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Titre"
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Prix"
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="place"
          value={formData.place}
          onChange={handleChange}
          placeholder="Lieu"
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          placeholder="Capacité"
          className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
        ></textarea>

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="URL image"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded"
        >
          Modifier
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
