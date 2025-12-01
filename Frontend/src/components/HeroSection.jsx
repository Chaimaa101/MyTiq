import React from "react";

const HeroSection = () => {
  return (
 <div
  className="h-[450px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url('/src/assets/hero.jpeg')` }}
>
  <div className="w-full md:w-1/2 flex flex-col gap-4 bg-white/80 p-10 rounded-lg shadow-lg text-center">
    <h1 className="text-3xl md:text-4xl font-bold">
      Découvrez des événements
      <span className="text-red-500"> inoubliables</span>
    </h1>

    <p className="text-gray-700">
      Réservez vos billets pour les meilleurs concerts, festivals et
      événements culturels en quelques clics.
    </p>

    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Rechercher un événement..."
        className="p-3 rounded-lg w-full text-gray-800 outline-none border-2 border-gray-300"
      />
      <button className="bg-red-500 hover:bg-red-600 px-4 rounded-lg text-white">
        Rechercher
      </button>
    </div>
  </div>
</div>

  );
};

export default HeroSection;
