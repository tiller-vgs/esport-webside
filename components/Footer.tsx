import { Mail, ShieldHalf, Smartphone, Users } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img
              src="tiller-esport-logo.png"
              alt="Tiller E-Sport Logo"
              className="h-12 w-auto"
            />
            <h2 className="text-2xl font-bold">Tiller E-Sport</h2>
          </div>
          <p className="text-sm text-gray-300">
            Bli en del av et engasjerende e-sportmiljø på Tiller Videregående
            Skole.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Navigasjon</h3>
          <Link href="/" className="footer-link-item">
            Home
          </Link>
          <Link href="/signin" className="footer-link-item">
            Logg Inn
          </Link>
          <Link href="/signup" className="footer-link-item">
            Registrer Deg
          </Link>
        </nav>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Kontakt Oss</h3>

          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span className="text-sm">testemail@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone size={18} />
            <span className="text-sm">+47 12345678</span>
          </div>

          <div className="flex gap-4 mt-2">
            <a
              href="https://web.trondelagfylke.no/tiller-videregaende-skole/utdanningsprogrammer/studieforberedende-utdanningsprogram/idrettsfag/"
              target="_blank"
              className="hover:text-accent transition"
            >
              <ShieldHalf size={24} />
            </a>
            <a
              href="https://www.facebook.com/TillerEsport/?locale=nb_NO"
              target="_blank"
              className="hover:text-accent transition"
            >
              <Users size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Tiller E-Sport. All rights reserved.
      </div>
    </footer>
  );
}
