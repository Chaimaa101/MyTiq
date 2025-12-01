import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white drop-shadow-sm mt-20 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h1 className="text-2xl font-bold text-red-600 mb-2">MyTiq</h1>
          <p className="text-gray-600 text-sm">
            Votre plateforme de billetterie événementielle de confiance.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Liens rapides</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>Accueil</li>
            <li>Evenements</li>
            <li>Dashboard</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Support</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>FAQ</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-gray-700 mb-3">Suivez-nous</h3>
          <div className="flex gap-4 text-gray-700 text-xl hover:text-red-600 cursor-pointer">
            <FaXTwitter />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-sm mt-8">
        © 2025 MyTiq. Tous droits réservés.
      </p>
    </footer>
  );
}
