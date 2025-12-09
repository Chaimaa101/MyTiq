import React, { useContext, useState } from "react";
import { MdEmail } from "react-icons/md";
import { NewsLetterContext } from "../context/NewsLetterContext";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const { abonner } = useContext(NewsLetterContext);
  
  const handleSubscribe = () => {
    console.log(email)
    abonner({email : email})
    
  };
  return (
    <>
    <section className="bg-linear-to-r from-gray-200 to-gray-300 rounded-xl py-12 px-6 text-center mt-12">
      <div className="flex justify-center mb-4">
        <MdEmail className="text-red-500 w-14 h-14" />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Restez informé
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        Inscrivez-vous à notre newsletter pour recevoir les dernières
        actualités et offres exclusives.
      </p>

      {/* Input + Button */}
      <div className="flex justify-center gap-2 max-w-lg mx-auto">
        <input
          type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse email"
          className="p-3 rounded-lg w-full text-gray-800 bg-white"
        />
        <button
          onClick={handleSubscribe}
          className="bg-red-500 hover:bg-red-600 px-5 rounded-lg text-white"
        >
          S'abonner
        </button>
      </div>
    </section>

    </>
  )
}

export default NewsLetter