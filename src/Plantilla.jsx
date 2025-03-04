import { Navigate, Route, Routes } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"
import { LandingRouter } from "./router/LandingRouter"
import { useCheckAuth } from "./hooks";
import { ValidarRoutes } from "./validar/routes";

export const Plantilla = () => {

  const status = useCheckAuth();
  const compareValue = status.localeCompare("authenticated");
  // console.log(compareValue, 'Soy el comapre');
  return (
    <>
      <Routes>
        
        
        <Route path="inicio" element={ <LandingRouter />} />
        

        { compareValue === 0 ? 
        <Route path="/*" element={ <AppRouter /> } />          
        :
        <Route path="/*" element={ <Navigate to="/inicio" /> } />                  
        }

        {/* RUTA PARA EL VALIDADOR DE MUJERES - CURP - RUTA DIRECTA  */}
        {/* <Route path="validar/*" element={ <VaidarPage /> } /> */}
        
        {/* RUTA PARA EL VALIDADOR DE MUJERES - CURP - RUTA ALTERMATOVA SIM RETORNO  */}
        <Route path="validar/*" element={<ValidarRoutes/> } />
        

        {/* RUTA PARA EL INICIO DE <SESION></SESION> */}
        <Route path="main/*" element={ <AppRouter /> } />


      </Routes>
    </>
      // <AppRouter  />
  )
}
