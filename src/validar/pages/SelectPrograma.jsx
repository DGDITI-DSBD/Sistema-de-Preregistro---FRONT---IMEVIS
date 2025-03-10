import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import vivienda_bienestar from '../../images/vivienda_bienestar.JPEG';
import primer_hogar from '../../images/primer_hogar_programa.JPEG';


export const SelectPrograma = () => {
return (
    <>
    <div class = "bg-[#FFFFFF]">
        <div className = "grid grid-rows-8">
            <div className = "row-span-1 pl-5 pr-5 content-center md:justify-items-center shadow-xl">
                <div className = "flex w-full h-auto md:w-full md:h-auto rounded-md grid grid-rows-2 border border-colorPrimario justify-items-center bg-colorPrimario p-1">   
                        <p class = "font-[Montserrat] font-bold text-2xl text-white">Programa de Bienestar</p>
                        <p class = "font-[Montserrat] text-lg text-white" >Selecciona el programa de registro</p>
                </div>
            </div>
            <div className = {`row-span-7 content-center pl-5 pr-5 pt-1 pb-1`}>

                <div className = {`flex grid grid-cols-1 md:grid-cols-2 justify-items-center`}>

                
                            <Link to = '/validar/CURP' class="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gradient-to-r from-[#FFFFFF] via-[#E7DAC7] to-[#DCBCC3] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 border-3 border-r-colorSecundario border-l-colorSecundario border-b-colorPrimario border-t-colorPrimario shadow-xl" state={'1'}>
                                <img class="object-cover border-3 border-b-colorSecundario md:border-r-colorSecundario w-full rounded-t-lg h-96 md:h-50 md:w-48 md:rounded-none md:rounded-s-lg" src={primer_hogar} alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mi primer hogar</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem pariatur exercitationem consequuntur quod commodi. Itaque dolore omnis odio temporibus. Tenetur molestiae atque illum praesentium sed. Nostrum reiciendis exercitationem nisi excepturi!</p>
                                </div>
                            </Link>
                    

                    
                            <Link to = '/validar/CURP' class="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gradient-to-r from-[#FFFFFF] via-[#E7DAC7] to-[#DCBCC3] dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 border-3 border-r-colorSecundario border-l-colorSecundario border-b-colorPrimario border-t-colorPrimario shadow-xl" state={'2'}>
                                <img class="object-cover border-3 border-b-colorSecundario md:border-r-colorSecundario w-full rounded-t-lg h-96 md:h-50 md:w-48 md:rounded-none md:rounded-s-lg" src={vivienda_bienestar} alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vivienda para el Bienestar</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo similique dignissimos alias ducimus aperiam delectus architecto consequuntur, reprehenderit quae harum repellat fugit odio excepturi animi iusto adipisci rerum incidunt atque!</p>
                                </div>
                            </Link>

                
                </div>

            </div>
        </div>
    </div>
    </>
)
};