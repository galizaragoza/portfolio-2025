'use client';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-12 left-12 w-72 h-[20vh] px-4 py-4 bg-gray-900 shadow-md rounded-md flex flex-col justify-between">
      <h2 className="text-xl font-bold text-white">
        Mario Hinojosa Freire
      </h2>
      <div className="flex flex-col space-y-2">
        <Link 
          href="/projects" 
          className="text-base text-white hover:text-gray-300 transition-colors"
        >
          Proyectos
        </Link>
        <Link 
          href="/about" 
          className="text-base text-white hover:text-gray-300 transition-colors"
        >
          Acerca de
        </Link>
        <Link 
          href="/cv" 
          className="text-base text-white hover:text-gray-300 transition-colors"
        >
          Formación y experiencia
        </Link>
        <Link 
          href="/contact" 
          className="text-base text-white hover:text-gray-300 transition-colors"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
