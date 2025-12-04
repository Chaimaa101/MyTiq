import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Inscription() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/register", data);
      alert("Compte créé !");
    } catch {
      alert("Erreur pendant l'inscription.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-15 p-6 bg-white rounded-lg shadow">
    <h1 className="text-3xl font-bold text-center text-red-600 mb-6">MyTiq</h1>
      <div className="flex justify-center gap-4 mb-10 border-b-gray-300 bg-gray-300 text-gray-500 font-medium p-2 rounded w-fit mx-auto">
        <button className="px-4 py-1 rounded  "><Link to="/connexion">Connexion</Link></button>
        <button className="px-4 py-1 rounded bg-gray-100 "><Link to="/inscription">Inscription</Link></button>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label className="text-gray-700 font-bold">Nom complet</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Entrez votre nom complet"
            className="w-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 border border-gray-300 placeholder-gray-400 rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="text-gray-700 font-bold">Email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="Entrez votre email"
            className="w-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 border border-gray-300 placeholder-gray-400 rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="text-gray-700 font-bold">Mot de passe</label>
          <input
            type="password"
            {...register("password")}
            placeholder=".........."
            className="w-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 border border-gray-300 placeholder-gray-400 font-extrabold  rounded-lg p-2 mt-1"
          />
        </div>

        <div>
          <label className="text-gray-700 font-bold">Confirmation de mot de passe</label>
          <input
            type="password"
            {...register("password_confirmation")}
            placeholder=".........."
            className="w-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 border border-gray-300 placeholder-gray-400 font-extrabold  rounded-lg p-2 mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white font-medium w-full py-2 rounded-lg mt-3 hover:bg-red-700"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}
