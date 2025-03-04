import React, { useState, useEffect } from 'react';
import LogoColibriBienestar from '../../images/colibri.png'
import Colibri from '../../images/colibri-cafe.png'
import { useNavigate } from 'react-router-dom';

// import { Menu, X } from 'lucide-react';

export const Header = () => {
  const navigate = useNavigate();
  const irLogin = () => {
    navigate('../Iniciar-Sesion');

  }
  const [isOpen, setIsOpen] = useState(false);

  // Manejo del estado móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-colorPrimario dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 p-4">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto px-4">
        {/* Logo y título */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={Colibri}
            alt="Logo Colibri Bienestar"
            className="mr-4 w-12 h-14 object-contain"
          />
          <span className="font-extrabold text-white text-xl md:text-2xl transition-colors duration-300 hover:text-gray-200">
            Secretaria de Bienestar
          </span>
        </div>

        {/* Navegación principal */}
        <nav className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 transition-all duration-300 ${isOpen && isMobile ? 'block' : ''
          }`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-white border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <label className='w-full text-center p-4'>Administración de Programas 2025</label>
            {/* <a href="#" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 transition-colors duration-300 hover:bg-gray-700 hover:text-white">
              Mujeres con Bienestar 2025
              </a> */}
            </li>
          </ul>
        </nav>

        {/* Botones de acción */}
        <div className="flex justify-center md:order-2  md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={irLogin}
            className="text-white border-colorSecundario bg-colorSecundario hover:bg-colorPrimario border hover:border-colorSecundario font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Iniciar Sesión
          </button>

          {/* Botón de menú móvil */}
          {/* <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-300"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button> */}
        </div>
      </div>
    </nav>
  );
};

