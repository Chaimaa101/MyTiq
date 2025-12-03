import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Context from "../services/Context";

const EventForm = () => {
  const { ajouter } = useContext(Context);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      await ajouter(formData); 
      reset();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg mt-10">
      <h2 className="text-xl font-bold mb-6 text-red-600">Créer un événement</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        <div>
          <label className="text-sm font-medium">Titre</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="border p-3 rounded-lg w-full"
          />
          {errors.title && <p className="text-red-500">Titre obligatoire</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              {...register("date", { required: true })}
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Prix (DH)</label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="border p-3 rounded-lg w-full"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image")}
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Lieu</label>
            <input
              type="text"
              {...register("location", { required: true })}
              className="border p-3 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Capacité</label>
            <input
              type="number"
              {...register("capacity", { required: true })}
              className="border p-3 rounded-lg w-full"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            rows="3"
            className="border p-3 rounded-lg w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white w-full py-3 rounded-lg hover:bg-red-700"
        >
          + Créer
        </button>
      </form>
    </div>
  );
};

export default EventForm;
