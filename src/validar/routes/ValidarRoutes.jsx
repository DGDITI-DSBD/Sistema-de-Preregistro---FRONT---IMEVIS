import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { MujerForm, VaidarPage, SelectPrograma ,FumPdf } from '../pages'; // Asegúrate de importar FumPdf
import { LoginPage } from '../../auth';

export const ValidarRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='Programas' element={<SelectPrograma />} /> 
                <Route path='CURP' element={<VaidarPage />} />
                <Route path='Formulario' element={<MujerForm />} />
                <Route path='Iniciar-Sesion' element={<LoginPage />} />
                <Route path='Fum-Pdf' element={<FumPdf />} /> {/* Nueva ruta */}
                <Route path='/*' element={<Navigate to="Programas" />} />
            </Routes>
        </div>
    )
};
