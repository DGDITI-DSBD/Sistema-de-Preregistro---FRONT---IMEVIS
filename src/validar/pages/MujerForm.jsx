import React, { useState } from 'react'
import StateBar from './StateBar';
import { DatosPersonales } from './DatosPersonales';
import { DatosDomic } from './DatosDomic';
import { FormPreguntas } from './FormPreguntas';
import { Concentrado_mujeres } from './Concentrado_mujeres';
import { useSelector } from 'react-redux';
import { LoadingPage } from '../../ui/components';


export const MujerForm = () => {
    const [activeTab, setActiveTab] = useState('paso1');
    const [canGoBack, setCanGoBack] = useState(true);

    const handleStepComplete = () => {
        setActiveTab('paso2');
        setCanGoBack(false);
    };

    return (
        <>

            <div>
                <div className='grid grid-cols-1 p-5 '>

                    <div>
                        <StateBar />
                    </div>

                </div>

                <div className='p-2'>
                    {/* DESACTIVAR CUANDO TERMINE DE VALIDAR LOS DATOS  */}
                    <div className='mb-10 px-14'>
                        <DatosPersonales />
                    </div>


                    <div className="relative p-10">

                        <ul className="relative flex flex-wrap  list-none rounded-md bg-gray-200 " data-tabs="tabs" role="list">
                            <li className={`z-30 flex-auto text-center ${!canGoBack ? 'pointer-events-none opacity-50' : ''}`}>
                                <a
                                    className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-md cursor-pointer 
${activeTab === 'paso1' ? 'bg-colorPrimario text-white' : ' text-black'}`}
                                    onClick={() => canGoBack && setActiveTab('paso1')}
                                    data-tab-target=""
                                    role="tab"
                                    aria-selected={activeTab === 'paso1'}
                                    aria-controls="paso1"
                                    disabled={!canGoBack}
                                >
                                    Paso 1
                                </a>
                            </li>

                            <li className="z-30 flex-auto text-center">
                                <a
                                    className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer 
${activeTab === 'paso2' ? 'bg-colorPrimario text-white' : ' text-black'}`}
                                    onClick={() => setActiveTab('paso2')}
                                    data-tab-target=""
                                    role="tab"
                                    aria-selected={activeTab === 'paso2'}
                                    aria-controls="paso2"
                                >
                                    Paso 2
                                </a>
                            </li>
                        </ul>

                        <div data-tab-content="" className="p-5">
                            <div id="paso1" role="tabpanel">
                                <div className={`text-slate-400 text-center font-light ${activeTab === 'paso1' ? '' : 'hidden opacity-0'}`}>
                                    <DatosDomic onStepComplete={handleStepComplete} />
                                </div>
                            </div>
                            <div id="paso2" role="tabpanel">
                                <div className={`text-slate-400 font-light ${activeTab === 'paso2' ? '' : 'hidden opacity-0'}`}>
                                    <FormPreguntas />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        {/* <Concentrado_mujeres /> */}
                    </div>

                </div>
            </div>


        </>
    )
};

