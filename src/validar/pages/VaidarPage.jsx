import React, { useEffect, useState } from 'react'
import { Header } from '../../router/components/Header';
import Swal from 'sweetalert2'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { cleaningEditData, getEditData, setFolio, storeData, setId, setCURP } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import { REACT_APP_SITE_KEY, urlBase } from '../../api';
import ReCAPTCHA from 'react-google-recaptcha';
import LogoGlobal from '../../images/logo-bienestar-juntos-sin-lineas.png';
import Mujeres from '../../images/mujeres-banner.jpg'

export const VaidarPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpen = () => setOpen();
  const handleOpen1 = () => setOpen1();
  const [curp, setCurp] = useState();

  const [open, setOpen] = useState(false);    // Modal 1: Datos Personales
  const [open1, setOpen1] = useState(false);   // Modal 2: Seguimiento

  const [isValidLength, setIsValidLength] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { data } = useSelector(state => state.edit);
  const { register, handleSubmit, reset } = useForm();
  const [captchaToken, setCaptchaToken] = useState('');
  const token = 1;
  const [ENTI, setENTI] = useState([]);
  const [Beneficiaria, setBeneficiaria] = useState([]);
  const [Formulario, setFormulario] = useState([]);

  const [cat, setCat] = useState({});
  const [cat2, setCat2] = useState({});
  const { isSaving, status } = useSelector(state => state.validacion);

const close = () => {
  setOpen(false);
};
const close1 = () => {
  setOpen1(false);
};

  const handleCURPChange = (e) => {
    const value = e.target.value.toUpperCase();
    setCurp(value);
    setIsValidLength(value.length === 18);
  };

  const handleCaptchaChange = async (token) => {
    if (!token) {
      Swal.fire({
        backdrop: 'static',
        title: 'Captcha Invalido',
        text: 'Vuelva a verificar de nuevo el Captcha',
        icon: 'warning',
        showConfirmButton: true,
        confirmButtonText: 'Entendido'
      }).then((result) => {
        if (result.isConfirmed) {
          setShowCaptcha(false);
          setIsVerifying(true);
        }
      });
      return;
    }
  
    setCaptchaToken(token);
    setShowCaptcha(false);
    setIsVerifying(true);
  
    try {
      const response = await axios.post(`${urlBase}/auth/beneficiario`, {
        curp: curp
      });
  
      // Actualizar el estado con la estructura correcta
      setBeneficiaria({
        ...response.data,
        primer_apellido: response.data.apellidoMaterno,
        segundo_apellido: response.data.apellidoPaterno,
        nombre: response.data.nombre
      });
  
      setIsVerifying(false);
  
      if (response.data.message === 'servicio activo') {
        console.log("ENTRA EN CONSULTA EN RENAPO");
        setOpen(true);
        setCaptchaToken('');
      }
      else if (response.data.message === '1') {
        console.log("CURP EXISTENTE ");
        console.log("DATOS DEL REGISTRO EXISTENTE", response.data);
        
        Swal.fire({
          icon: 'info',
          title: 'Aviso',
          width: '40%',
          borderRadius: '60px',
          html: `
            <div style="text-align:center;">
              <p>
              <b>Beneficiaria</b>, tu proceso de registro a <b>sido marcado como concluido</b>, para consultar el estatus en la que se encuentra tu registro, da clic en el boton de <b>"Consultar"</b>
            </p>  
          </div>
          `,
          showConfirmButton: true,
          confirmButtonText: 'Consultar',
          confirmButtonColor: '#0000ff',
          backdrop: 'static',
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            setOpen1(true);
          }
        });
      }
      else if (response.data.message === 'CURP desactualizada') {
        Swal.fire({
          title: 'Aviso',
          icon: 'warning',
          html: `
            <div style="text-align:center;">
            <p>Tu <b>CURP</b> esta desactualizada,verifica en la siguiente liga tu informacion correspondientea.</p>  
            <p> 
            <u>
                <a href="https://www.gob.mx/curp/" autofocus>
                  <b>Consulta tu CURP</b>
                </a>
                </u>
              </p>
            </div>
          `,
          showConfirmButton: true,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: 'green',
          backdrop: 'static',
          allowOutsideClick: false,
        });
      }
    } catch (error) {
      console.error("Error al procesar la verificación:", error);
      setIsVerifying(false);
      setShowCaptcha(true);
    }
  };

  const onSubmit = async (data) => {
    if (!isValidLength) {
      Swal.fire({
        backdrop: 'static',
        allowOutsideClick: false,
        title: 'Error al verificar',
        text: 'La CURP debe tener exactamente 18 caracteres',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#8a2036'
      });
      return;
    }

    setShowCaptcha(true);
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const response = await axios.get(`${urlBase}/catalogos`, { headers: { 'token': token } });
        const entidad_federativa = response.data.entidades;
        setENTI(entidad_federativa);
        setCat(response.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchAndSetData();
  }, [token]);

  const onSubmit2 = async (data) => {
    setOpen(false);
    Swal.fire({
      width: '40%',
      title: 'Confirmación de Datos Personales',
      html: `
        <div style="text-align:center;">
          <p>CURP: <b>${data.curp}</b></p>
          <p>Fecha de Nacimiento: <b>${data.fecha_nacimiento}</b></p>
          <p>Género: <b>${data.sexo == 'H' ? 'HOMBRE' : 'MUJER'}</b></p>
          <p>Entidad de Nacimiento: <b>${ENTI.find(item => item.entidafed_abrev === data.cve_entidad_nacimiento)?.entidadfed_desc || data.cveEntidadNacimmiento || 'Sin especificar'}</b></p>
          <p>Apellido Materno: <b>${data.apellido_materno}</b></p>
          <p>Apellido Paterno: <b>${data.apellido_paterno}</b></p>
          <p>Nombre(s): <b>${data.nombres}</b></p>
        </div>
      `,
      icon: 'info',
      iconColor: '#BC955B',
      showConfirmButton: true,
      confirmButtonColor: '#BC955B',
      confirmButtonText: 'Confirmar',
      showCancelButton: true,
      cancelButtonColor: '#8a2036',
      cancelButtonText: 'Regresar',
      backdrop: 'static',
      allowOutsideClick: false,

    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("Mantenemos datos:", data);
        const response = await axios.post(`${urlBase}/getFolio`, { data });
        setFormulario(response.data);
        console.log("Respuesta", response.data);
        console.log("Mensaje", response.data.message);
        console.log("Folio", response.data.dataResponse);
        console.log("CURP OBTENIDA", curp);
        // Guardar el folio en el estado global
        dispatch(setFolio(response.data.dataResponse));
        dispatch(setCURP(curp));  
        Swal.fire({
          title: 'Datos Confirmados',
          html: `
          <div style="text-align:center;">
            <p>CURP: <b>${data.curp}</b></p>
          </div>
        `,
          icon: 'success',
          showConfirmButton: true,
          confirmButtonColor: 'green',
          confirmButtonText: 'Comenzar',
          backdrop: 'static',
          allowOutsideClick: false,

        }).then((result) => {
          if (result.isConfirmed) {
            navigate('../Formulario');
          }
        })
      } else {
        Swal.fire({
          backdrop: 'static',
          title: 'Operacion interrumpida',
          text: 'Verifica si tus datos personales son correctos.',
          icon: 'warning',
          showConfirmButton: true,
          confirmButtonColor: '#8a2036',
          confirmButtonText: 'Entendido',
          backdrop: 'static',
          allowOutsideClick: false,

        }).then((result) => {
          if (result.isConfirmed) {
            setOpen(true);
          }
        })
      }
    });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';

    // Maneja diferentes formatos de entrada
    let dateObj;
    if (typeof dateStr === 'string') {
      // Si viene como string en formato DD/MM/YYYY
      const [day, month, year] = dateStr.split('/').map(Number);
      dateObj = new Date(year, month - 1, day); // Meses en JS son 0-based

      // Si la fecha es inválida después del parsing
      if (isNaN(dateObj.getTime())) {
        return ''; // o puedes lanzar un error aquí según necesites
      }
    } else {
      // Si ya es un objeto Date
      dateObj = dateStr;
    }

    // Formatea la fecha al estilo YYYY-MM-DD
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <main className="bg-gradient-to-r from-red-900 from-50%  to-colorPrimario to-100% backdrop-invert backdrop-opacity-20" >
        <div
        >
          <div className="grid grid-cols-12 ">

            <div className="hidden md:block col-span-6 h-svh" aria-hidden="true">
              <img className="object-cover object-center w-full h-full bg-opacity-55" src={Mujeres} alt="Authentication" />
            </div>

            <div className="md:col-span-6 col-span-12">
              <div className="min-h-screen h-full flex flex-col after:flex-1">

                {/* <Header /> */}
                <div className="flex-1 mt-6 p-10">
                  <div className='flex items-center justify-center'>
                    <img className="" src={LogoGlobal} width="600" height="900" alt="Authentication decoration" />
                  </div>
                </div>

                <div className="mx-20 py-20 mb-9 p-8 shadow-2xl rounded-xl bg-white/10 backdrop-invert backdrop-opacity-20">
                  <h1 className="text-3xl font-bold mb-5 text-center text-white w-full">Bienvenida</h1>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 mb-6 w-full group p-2">
                      <input
                        type="text"
                        className={`text-center block w-full text-sm text-black-900 border-black-300 appearance-none dark:text-black dark:border-black-600
              ${!isValidLength ? 'border-red-500' : 'border-gray-300'}
              focus:outline-none focus:ring-0 focus:border-blue-600 rounded-lg`}
                        placeholder='Digita los 18 caracteres de tu CURP'
                        {...register('curp')}
                        maxLength={18}
                        // pattern='(/^[A-Z][AEIOUX][A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[HM][A-Z]{5}[0-9A-F][0-9]$/)'
                        onChange={handleCURPChange}
                      />
                    </div>

                    <div className="flex items-center justify-center mt-16">
                      {showCaptcha && (
                        <ReCAPTCHA
                          sitekey={REACT_APP_SITE_KEY}
                          onChange={handleCaptchaChange}
                        />
                      )}

                      {isVerifying && (
                        <Button
                          className="mt-4 bg-colorPrimario hover:bg-colorSecundario animate-pulse"
                          disabled
                          loading={true}
                        >
                          Verificando
                        </Button>
                      )}

                      {!showCaptcha && !isVerifying && (
                        <Button
                          disabled={!isValidLength}
                          type="submit"
                          className={`bg-colorSecundario text-white hover:bg-colorPrimario border border-colorSecundario hover:border-colorSecundario w-2/4 rounded-lg p-2
                ${!isValidLength ? 'opacity-50 cursor-not-allowed' : 'border-colorPrimario hover:bg-colorPrimario'}`}
                        >
                          Verificar
                        </Button>
                      )}
                    </div>
                  </form>
                </div>

                <div className='flex justify-center p-12 rounded-xl shadow-xl'>
                  <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-8 text-center">
                    <Typography color="white" className="flex justify-center">
                      &copy; 2025 Derechos Reservados <br></br>
                      Dirección General de Desarrollo Institucional y Tecnologias de la Información
                    </Typography>
                  </footer>

                </div>

              </div>


            </div>


          </div>

        </div>

      </main>


      <Dialog
        className=""
        size="lg"
        open={open}
        style={{ margin: 'auto' }}
        // handler={() => setOpen(!open)}
        handler={() => { }}
        onClickOutside={() => { }}
        onEscapeKeyDown={() => { }}
      >
        <DialogHeader className="justify-between bg-colorPrimario text-white">
          Datos personales
          <Button
            // variant="ghost"
            onClick={close}
            className="bg-colorSecundario text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.647 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </Button>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit2)}>
          {(Beneficiaria &&
            <DialogBody className="overflow-y-scroll">
              {/* <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"> */}
              {/* <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm"> */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-6 w-full group">
                  <label className="block mb-1 text-sm text-slate-600 mt-4">CURP</label>
                  <div className="col-sm-8">
                    <input
                      // disabled
                      type='text'
                      className="w-full bg-slate-200 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100"
                      placeholder='CURP'
                      {...register("curp")}
                    />
                  </div>
                </div>
                <div className="mb-6 w-full group">
                  <label className="block mb-1 text-sm text-slate-600 mt-4">fecha de Nacimiento</label>
                  <div className="col-sm-8">
                    <input
                      // disabled
                      type="date"
                      className="w-full bg-slate-200 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100"
                      placeholder='xx/xx/xxxx'
                      value={formatDate(Beneficiaria.fechaNacimientoAxu)}
                      {...register("fecha_nacimiento")}

                    />

                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">


                <div className="mb-6 w-full group">
                  <label className="block mb-1 text-sm text-slate-600 mt-4">Genero</label>

                  <div className="relative flex w-full flex-col rounded-xl bg-slate-200 shadow-gray-300">
                    <nav className="flex w-full flex-row gap-1 p-2">

                      <div role="button" className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                        <label htmlFor="react-horizontal" className="flex w-full cursor-pointer items-center px-3 py-2">
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer" htmlFor="react-horizontal">
                              <input
                                // disabled
                                name="framework-horizontal"
                                type="radio"
                                className="h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 bg-white transition-all"
                                value="H"
                                id="react-horizontal"
                                {...register("sexo")}
                                checked={Beneficiaria?.sexo === "H"}
                              />
                              <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 rounded-lg-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="react-horizontal">Hombre</label>
                          </div>
                        </label>
                      </div>

                      <div role="button" className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100">
                        <label htmlFor="vue-horizontal" className="flex w-full cursor-pointer items-center px-3 py-2">
                          <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer" htmlFor="vue-horizontal">
                              <input
                                // disabled
                                name="framework-horizontal"
                                type="radio"
                                className="h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 bg-white transition-all"
                                value="M"
                                id="vue-horizontal"
                                {...register("sexo")}
                                checked={Beneficiaria?.sexo === "M"}
                              />
                              <span className="absolute bg-white w-3 h-3 rounded-full opacity-0 rounded-lg-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                            </label>
                            <label className="ml-2 text-slate-600 cursor-pointer text-sm" htmlFor="vue-horizontal">Mujer</label>
                          </div>
                        </label>
                      </div>

                    </nav>
                  </div>
                </div>

                <div className="mb-6 w-full group">
                  <label className="block mb-1 text-sm text-slate-600 mt-4">Entidad de Nacimiento</label>
                  <div className="col-sm-8">
                    {Array.isArray(ENTI) && ENTI.length > 0 ? (
                      <select
                        // disabled
                        className={`w-full bg-slate-200 text-center placeholder:text-slate-400 text-black text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100 peer`}
                        value={Beneficiaria.cveEntidadNacimmiento}
                        {...register("cve_entidad_nacimiento")}
                      >
                        <option value=''>Seleccione su entidad de naciemiento</option>
                        {ENTI.map((option) => (
                          <option key={option.entidadfedid} value={option.entidafed_abrev}>
                            {option.entidadfed_desc}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p className='text-center'>No hay entidades disponibles</p>
                    )}
                  </div>
                </div>

              </div>

              <input
                // disabled
                type='hidden'
                className="w-full bg-slate-200 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100"
                placeholder='Apellido Paterno'
                value={Beneficiaria.nacionalidad}
                {...register("cve_nacionalidad")}
              />
              <input
                // disabled
                type='hidden'
                className="w-full bg-slate-200 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100"
                placeholder='Apellido Paterno'
                value={Beneficiaria.estadoCurp}
                {...register("estadoCurp")}
              />

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-6 w-full group">
                  <label className="block mb-1 text-sm text-slate-600 mt-4">Apellido Paterno</label>
                  <div className="col-sm-8">
                    <input
                      // disabled  
                      type='text'
                      className="w-full bg-slate-200 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100"
                      placeholder='Apellido Paterno'
                      value={Beneficiaria.apellidoPaterno}
                      {...register("apellido_paterno")}
                    />
                  </div>
                </div>
                <div className="mb-6 w-full group">
                  <label className="block mb-1 text-sm text-slate-600 mt-4">Apellido Materno</label>
                  <div className="col-sm-8">
                    <input
                      // disabled
                      type='text'
                      className="w-full bg-slate-200 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100"
                      placeholder='Apellido Materno'
                      value={Beneficiaria.apellidoMaterno}
                      {...register("apellido_materno")}
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-1 md:gap-6">
                <div className="mb-6 w-full group">
                  <label className="block mb-1 text-sm text-slate-600 mt-4">Nombre(s)</label>
                  <div className="col-sm-8">
                    <input
                      // disabled
                      type='text'
                      className="w-full bg-slate-200 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-lg shadow-gray-300 ring-4 ring-transparent focus:ring-slate-100"
                      placeholder='Nombre(s)'
                      value={Beneficiaria.nombre}
                      {...register("nombres")}
                    />
                  </div>
                </div>
              </div>

              {/* </div> */}
              {/*  </div> */}



            </DialogBody>
          )}

          <DialogFooter className="sticky bottom-0 bg-background border-t justify-center bg-slate-200">
            <Button
              disabled={isSaving}
              type="submit"
              className={`text-white bg-colorPrimario hover:text-white hover:bg-colorSecundario text-center w-2/6 rounded-lg p-2
                ${!isSaving ? 'border-colorPrimario hover:bg-colorPrimario' : 'border-gray-400 hover:bg-gray-400'}`}
            >
              Comenzar
            </Button>
          </DialogFooter>


        </form>
      </Dialog>

      <Dialog
        className=""
        size="lg"
        open={open1}
        style={{ margin: 'auto' }}
        handler={() => { }}
        onClickOutside={() => { }}
        onEscapeKeyDown={() => { }}
      >
        <DialogHeader className="justify-between bg-colorPrimario text-white">
          Seguimiento del Registro
          <Button
            onClick={close1}
            className="bg-colorSecundario text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.647 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
          </Button>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll">
          <div>
            <nav className="bg-white shadow-xl">
              <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center w-full p-2">
                  {/* <img src={Colibri} alt="Logo" width={30} height={30} className="mr-4" /> logos */}
                </div>
              </div>
            </nav>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-xs text-nowrap text-center">Periodo</th>
                  <th className="py-2 px-4 text-xs text-nowrap text-center">Programa</th>
                  <th className="py-2 px-4 text-xs text-nowrap text-center">Nombre</th>
                  <th className="py-2 px-4 text-xs text-nowrap text-center">Estatus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 border-b hover:bg-slate-200">
                  {/* <td className="py-2 px-4 text-center">
                                <Link to="../Fum-Pdf" target="_blank" title="Ver PDF">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zM4 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                        <path d="M4.603 12.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.6 11.6 0 0 0-1.997.406 11.3 11.3 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.8.8 0 0 1-.58.029" />
                                    </svg>
                                </Link>
                            </td> */}
                  {/* <td className="py-2 px-4 text-center">{index + 1}</td> */}
                  <td className="py-2 px-4 text-center">2025</td>
                  <td className="py-2 px-4 text-center">MUJERES CON BIENESTAR</td>
                  <td className="py-2 px-4 text-center">{Beneficiaria.primer_apellido} {Beneficiaria.segundo_apellido} {Beneficiaria.nombre}</td>
                  <td className="py-2 px-4 text-center">
                    {Beneficiaria.estado_registro === 1 ? 'ACEPTA' :
                      Beneficiaria.estado_registro === 2 ? 'NO ACEPATADO' :
                        Beneficiaria.estado_registro === 3 ? 'EN PROCESO' : 'Registro Incompleto'}
                  </td>
                </tr>

              </tbody>
            </table>


          </div>
        </DialogBody>

      </Dialog>



    </>

  )
};