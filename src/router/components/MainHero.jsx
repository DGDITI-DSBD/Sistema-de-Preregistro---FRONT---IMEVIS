import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';


const TEXTOS = {
  tituloPrincipal: 'Mujeres con',
  tituloDestacado: 'Bienestar',
  descripcionPrograma: 'Programa de Desarrollo Social Mujeres con Bienestar: programa social que tiene como propósito contribuir a elevar el ingreso económico de las mujeres de 18 a 64 años de edad que habitan en el Estado de México, que se encuentren en condición de pobreza y carencia por acceso a la seguridad social, mediante el otorgamiento de transferencias monetarias y servicios para el bienestar.',
  objetivoPrograma: 'Objetivo del programa: contribuir a elevar el ingreso económico de las mujeres de 18 a 64 años de edad que habitan en el Estado de México, que se encuentren en condición de pobreza y carencia por acceso a la seguridad social, mediante el otorgamiento de transferencias monetarias y servicios para el bienestar. Recibirán un apoyo monetario, de manera bimestral, por la cantidad de $2,500.00',
  titulo1:'Sistema de',
  subtitulo1:'Administración de Programas ',
  objetivoNuevo:'Gestionar eficientemente los recursos y actividades de los programas sociales, con el fin de mejorar la calidad de vida de las poblaciones vulnerables, promoviendo la inclusión, la equidad y el desarrollo sostenible, asegurando la efectividad de las intervenciones y garantizando la transparencia y la rendición de cuentas en su ejecución.'
  ,objetivoNuevo1:'Estas acciones indican un enfoque integral en la optimización de sistemas, en el desarrollo de nuevos proyectos para fortalecer el bienestar social, y en la mejora de la infraestructura tecnológica dentro de las instituciones gubernamentales. También resalta el constante trabajo en el análisis y gestión de datos, que es fundamental para la transparencia y eficiencia en la implementación de programas sociales'
};


export const MainHero = () => {
  const navigate = useNavigate();
  const irCliente = () => {
    navigate('../validar');
  }

  return (
    <main className={`px-4 lg:mt-14 w-full p-3`}>
      {/* Contenedor principal con grid responsivo */}
      <div className="grid md:grid-cols-2 ">
        {/* Columna izquierda - Contenido */}
        <div className="space-y-4 max-w-4xl mx-auto ">
          {/* Título con diseño mejorado */}
          <h1 className="grid space-y-4 max-w-3x1 text-3xl font-extrabold text-gray-900 sm:text-2xl md:text-3xl text-center">
            <span className="block text-[2rem]">
              {/* {TEXTOS.tituloPrincipal} */}
              {TEXTOS.titulo1}
              </span>
            <small className="block text-[3rem] text-colorPrimario">
              {/* {TEXTOS.tituloDestacado} */}
              {TEXTOS.subtitulo1}
              </small>
          </h1>

          {/* Primer párrafo */}
          <p className={`text-justify text-md text-gray-500 sm:mt-5 sm:text-2xl md:text-md`}>
            {/* {TEXTOS.descripcionPrograma} */}
            {TEXTOS.objetivoNuevo}
          </p>

          {/* Segundo párrafo */}
          <p className={`text-justify text-md text-gray-500 sm:mt-5 sm:text-2xl md:text-md `}>
            {/* {TEXTOS.objetivoPrograma} */}
            {TEXTOS.objetivoNuevo1}
          </p>

          {/* Botón de registro mejorado */}
          <div className="flex justify-center">
            <Button
              variant="text"
              className="flex justify-end text-white bg-colorPrimario hover:bg-colorSecundario hover:text-white hover:border-red-900 transition-all duration-300 ease-in-out"
              onClick={irCliente}
            >
              Registrarse
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-double-right w-5 h-5 ml-2">
                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708" />
                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708" />
              </svg>
            </Button>
          </div>

        </div>

        {/* Columna derecha - Video */}
        <div className="flex items-center justify-center p-4">
          <video
            controls
            className="max-w-full rounded-lg shadow-xl w-auto h-auto max-h-[70vh]"
          >
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </main>

  );
};

export default MainHero;
