import React from 'react';
import { Link } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet, Image,PDFViewer } from '@react-pdf/renderer';

import Colibri from '../../images/colibri.png';
import Colibri2 from '../../images/logo-colibri.png';
import Escudo from '../../images/escudo-edomex.png';
// import Bienestar from '../../images/bi';
// import linea from '../../images/linea.png';
// import barras from '../../images/barras.png';

export const FumPdf = () => {

  const datos = [
        { id: 1, periodo: '2023', programa: 'Programa A', vertiente: 'Maria 1', estatus: 'Activo' },
        { id: 2, periodo: '2022', programa: 'Programa B', vertiente: 'Maria 2', estatus: 'Inactivo' },
        { id: 3, periodo: '2021', programa: 'Programa C', vertiente: 'Maria 3', estatus: 'Pendiente' },
    ];


    const formulario = [
        { 
            Nombre: 'Maria', 
            Ape_Ma: 'lópez', 
            Ape_Pa: 'Díaz', 
            CURP: ' ROOI011220MQRSSNA1', 
            estatus: 'Activo',
            fechaNacimiento: '01/01/1990',
            entidadNacimiento: 'Estado  de México',
            edad: '35',
            sexo: 'Mujer',
            estadoCivil: 'Soltera',
            telefonoFijo: '555-1234',
            telefonoCelular: '555-5678',
            correo: 'maria@example.com',
            calle: 'Galena 123',
            numExterior: '123',
            numInterior: 'A',
            colonia: 'Col. verde',
            localidad: 'Toluca',
            municipio: 'Toluca',
            entidadFederativa: 'México',
            codigoPostal: '12345',
            entreCalles: 'Calle A y Calle B',
            otraReferencia: 'Cerca de la plaza central',
            zona: 'Zona Urbana',
            empleoFormal: 'Sí',
            ingresosMensuales: '$1,000 - $1,500',
            seguroSocial: 'Sí, Servicios Médicos',
            programaSocial: 'Sí, Prospera',
            cuartosVivienda: 'Tres',
            personasCasa: 'Cinco',
            materialParedes: 'Cemento',
            materialPisos: 'Cemento',
            materialTecho: 'Lámina',
            serviciosVivienda: 'Luz, Agua, Drenaje',
            gradoEstudios: 'Licenciatura',
            estudiando: 'No',
            comeUnaVezDia: 'No',
            jefaFamilia: 'Sí',
            esIndigena: 'No',
            esAfromexicana: 'No',
            enfermedadCronica: 'Sí',
            discapacidadPermanente: 'No',
            cuidaDiscapacidad: 'Sí',
            victimaDelito: 'No',
            esRepatriada: 'No'
        }
    ];
    
    // Accede al primer objeto del array
const persona = formulario[0];

    // Estilos para el documento PDF
    
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        marginTop: 4.5,   // Margen superior de 2.5
        marginBottom: 2.5, // Margen inferior de 2.5
        // backgroundColor: '#E4E4E4',
    },
    titleContainer: {
        backgroundColor: '#8a2036',
        padding: 10,
        borderRadius: 8,
        marginVertical: 10,
        alignItems: 'center', // Centrar horizontalmente
      },
      title: {
        color: '#fff', // Texto en blanco para mejor contraste
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    tableHeader: {
        backgroundColor: '#E4E4E4',
        color: 'rgb(118, 118, 118)',
        padding: '10px',
        fontSize: 12,
        fontWeight: 300,
    },
    tableContainer: {
        borderWidth: 1,           // Ancho del borde para toda la tabla
        borderColor: '#000',      // Color del borde
        borderRadius: 4,          // Bordes redondeados (opcional)
        overflow: 'hidden',       // Para que los bordes redondeados se apliquen correctamente
        padding: 5,               // Espacio interno (opcional)
        margin: 10,               // Margen alrededor de la tabla (opcional)
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,         // Separación entre filas
        borderBottomWidth: 1,     // Línea divisoria entre filas
        borderColor: '#000',      // Mismo color que el contorno de la tabla
        paddingVertical: 5,
      },
      formColumn: {
        flex: 1,
        paddingHorizontal: 5,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      cell: {
        fontSize: 12,
        flex: 1,
        textAlign: 'center',
      },
      logos: {
        width: "100px",
        height: "50px"

    },
    header: {
        position: 'fixed', // Se mantiene en todas las páginas
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
      },
      footer: {
        position: 'fixed', // Se mantiene en todas las páginas
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
      },
     
      headerImagesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      headerTextContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
      },
    
      
      textWithBorder: {
        borderWidth: 1,          // Grosor del borde
        borderColor: '#000000',  // Color del borde (puedes cambiarlo según tu preferencia)
        padding: 5,              // Espaciado interno para que el texto no toque el borde
        borderRadius: 5,         // Bordes redondeados, si lo deseas
      },
     


});

    const PDFDocument = () => (
        <Document>
           <Page size="A4" style={{ padding: "40px" }}>
 {/* Header Fijo */}
 <View style={styles.header} fixed>
        <View style={styles.headerImagesContainer}>
          <Image
            src={Escudo}
            alt="Logo"
            style={{ width: 100, height: 50 }}
          />
          <Image
            src={Colibri2}
            alt="Logo"
            style={{ width: 100, height: 50 }}
          />
          {/* <Image
            src={Bienestar}
            alt="Logo"
            style={{ width: 80, height: 40 }}
          /> */}

{/* <Image
    src={barras}
    alt="Logo"
    style={{ width: 80, height: 40 }}
  /> */}
        </View>
        
      </View>

      <View style={styles.row}>
  <Text style={styles.cell}>Fecha de la solicitud:  2025/02/20</Text>
  <Text style={styles.cell}>Folio:   MB2311231059056</Text>
</View>
<Text style={{ textAlign: 'center' }}>
  Programa Social Mujeres con Bienestar
</Text>



        

            <View style={styles.titleContainer}>
  <Text style={styles.title}>Datos de la Solicitante</Text>
</View>


<View style={styles.tableContainer}>
  {/* Primera fila: Nombre, Apellido Paterno, Apellido Materno */}
  <View style={styles.tableRow}>

    <View style={styles.formColumn}>
      <Text style={{ fontSize: 10 }}>Nombre(s):</Text>
      <Text style={{ fontSize: 10 }}>{'\n'}{persona.Nombre}</Text>
    </View>
    <View style={styles.formColumn}>
      <Text style={{ fontSize: 10 }}>Apellido Paterno:</Text>
      <Text style={{ fontSize: 10 }}>{'\n'}{persona.Ape_Pa}</Text>
    </View>
    <View style={styles.formColumn}>
      <Text style={{ fontSize: 10 }}>Apellido Materno:</Text>
      <Text style={{ fontSize: 10 }}>{'\n'}{persona.Ape_Ma}</Text>
    </View>
    
  </View>

  <View style={styles.tableRow}>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Fecha Nacimiento:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
      {'\n'}{persona.fechaNacimiento}
    </Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Entidad Nacimiento:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
      {'\n'}{persona.entidadNacimiento}
    </Text>
  </View>
</View>




<View style={styles.tableRow}>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}> sexo:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.sexo}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Edad:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.edad} Años</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Estado Civil:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.estadoCivil}</Text>
  </View>
  
</View>


  
  <View style={styles.tableRow}>

  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}> Teléfono Fijo:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.telefonoFijo}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Teléfono Celular:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.telefonoCelular}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Correo Electrónico:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.correo}</Text>
  </View>
</View>

</View>



 {/* Saltos de línea para separar el header del contenido */}
 <Text>{'\n'}{'\n'}</Text>


<View style={styles.titleContainer}>
  <Text style={styles.title}>Referencia Domiciliaria</Text>
</View>



<View style={styles.tableContainer}>
  <View style={styles.tableRow}>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Calle:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.calle}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Número Exterior:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.numExterior}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Número Interior:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.numInterior}</Text>
  </View>
  </View>

  <View style={styles.tableRow}>

  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Colonia:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.colonia}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Localidad:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.localidad}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Municipio:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.municipio}</Text>
  </View>
  </View>

  <View style={styles.tableRow}>

  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Entidad Federativa:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.entidadFederativa}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Código Postal:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.codigoPostal}</Text>
  </View>
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Entre Calle:</Text>
    <Text style={[styles.textWithBorder, { fontSize: 10 }]}>
        {'\n'}{persona.entreCalles}</Text>
  </View>
  </View>

  <View style={styles.tableRow}>
    
  <View style={styles.formColumn}>
    <Text style={{ fontSize: 10 }}>Otra Referencia:</Text>
    <Text style={{ fontSize: 10 }}>{'\n'}{persona.otraReferencia}</Text>
  </View>
  
    </View>
  
</View>

 {/* Saltos de línea para separar el header del contenido */}
 <Text>{'\n'}{'\n'}</Text>


{/* Condiciones Socioeconómicas */}
<View style={styles.titleContainer}>
  <Text style={styles.title}>Identificación de Tipos  de Carencias  de la Mujer</Text>
</View>

<View style={styles.tableContainer}>

<View style={styles.tableRow}>
<Text style={{ fontSize: 10,flex: 0.6 }}>3.1 El hogar se encuentra en:</Text>
<Text style={{ fontSize: 10,flex: 0.3}}>{persona.zona}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.2 ¿Cuenta con empleo formal?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.empleoFormal}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.3 ¿A cuánto ascienden los ingresos mensuales del hogar?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.ingresosMensuales}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.4 ¿Cuentas con seguro social?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.seguroSocial}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.5 ¿Es beneficiaria de algún programa social?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.programaSocial}</Text>
  </View>
</View>


{/* Características de la Vivienda */}


<View style={styles.tableContainer}>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.8 ¿Cuántos cuartos tiene su vivienda?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.cuartosVivienda}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.9 Número de personas que viven en su casa:</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.personasCasa}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>Material de paredes:</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.materialParedes}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>Material de pisos:</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.materialPisos}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>Material del techo:</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.materialTecho}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>Servicios en la vivienda:</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.serviciosVivienda}</Text>
  </View>
</View>

{/* Educación */}

<View style={styles.tableContainer}>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.12 ¿Cuál es su grado de estudios?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.gradoEstudios}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.13 ¿Actualmente se encuentra estudiando?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.estudiando}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>3.14 En los últimos tres meses, ¿solo comió una vez al día o dejó de comer?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.comeUnaVezDia}</Text>
  </View>
</View>


 {/* Saltos de línea para separar el header del contenido */}
 <Text>{'\n'}{'\n'}</Text>


{/* Circunstancias Adicionales */}
<View style={styles.titleContainer}>
  <Text style={styles.title}>Caracteristicas  Adicionales  de la Solicitante</Text>
</View>

<View style={styles.tableContainer}>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 12 }}>4.1 ¿Se encuentra en alguna de las siguientes circunstancias?</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>A) ¿Es jefa de Familia?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.jefaFamilia}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>B) ¿Se reconoce como indígena?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.esIndigena}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>C) ¿Se reconoce como afromexicana?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.esAfromexicana}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>D) ¿Tiene alguna enfermedad crónico degenerativa?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.enfermedadCronica}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>E) ¿Tiene alguna discapacidad permanente?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.discapacidadPermanente}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>F) ¿Cuida a personas con alguna discapacidad?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.cuidaDiscapacidad}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>G) ¿Ha sido víctima u ofendida de algún delito?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.victimaDelito}</Text>
  </View>
  <View style={styles.tableRow}>
    <Text style={{ fontSize: 10, flex: 0.5 }}>H) ¿Es repatriada?</Text>
    <Text style={{ fontSize: 10, flex: 0.3 }}>{persona.esRepatriada}</Text>
  </View>
</View>



 {/* Saltos de línea para separar el header del contenido */}
 <Text>{'\n'}{'\n'}</Text>

 <View style={styles.tableContainer}>
  <Text style={{ fontSize: 8, textAlign: 'justify' }}>
    Por este medio, yo "______{persona.Nombre}______" solicito mi registro al PROGRAMA DE DESARROLLO SOCIAL MUJERES CON BIENESTAR 2023 con la finalidad de
    ser beneficiario del mismo y mejorar mi bienestar; manifiesto que toda la información aquí contenida es verídica, fehacientemente y apegada a la realidad
    y consiento que se integre el expediente que me identifique como beneficiario y verifique la acreditación de los requisitos que establecen en las mismas.
    Bajo protesta de decir verdad manifiesto que la información proporcionada es verídica, Autorizo que el personal responsable de operar el programa pueda verificar los datos asentados en esta solicitud y en caso de encontrarse falsedad en los mismos, podrá ser motivo de que el apoyo se cancele aun cuando
    ya se haya asignado. Al firmar la presente solicitud manifestó conocer los derechos y obligaciones asociados al Programa y me comprometo a cumplir las responsabilidades que se deriven de la asignación del apoyo.
    AUTORIZACION DE USO DE DATOS PERSONALES.
    Los datos personales recabados serán protegidos, incorporados y tratados en la Base de Datos de este programa de Desarrollo social, información de que si o no podría transmitirse con fundamento dispuesto en los artículos 1,2,18,19 y 97 de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de México y Municipios; 2 fracción, 21, 22, 23 y 24 fracción XIV de la Ley de Transparencia y Acceso a la Información Publica del Estado de México y Municipios, con las finalidades señaladas en los citados artículos y previa justificación de la misma, además otras transmisiones previstas en la ley. El interesado podrá ejecutar los derechos de acceso, rectificación, cancelación y oposición sobre sus datos personales en posesión de los sujetos obligados correspondientes. Por lo que usted podrá consultar el aviso de privacidad en la siguiente dirección electrónica https://mujeresconbienestar.gob.mx/avisodeprivacidad/

    "ESTE PROGRAMA ES PUBLICO, AJENO A CUALQUIER PARTIDO POLÍTICO. QUEDA PROHIBIDO SU USO PARA FINES DISTINTOS AL DESARROLLO SOCIAL, QUIEN HAGA USO INDEBIDO DE LOS RECURSOS DE ESTE PROGRAMA DEBERA SER DENUNCIADO Y SANCIONADO ANTE LAS AUTORIDADES CONFORME A LA LEY EN LA MATERIA".{'\n'}{'\n'}{'\n'}
  </Text>
</View>


{/* Saltos de línea para separar el header del contenido */}
<Text>{'\n'}{'\n'}</Text>

               
                <View style={styles.section}>
        {/* Primera fila: Firmas en la misma línea */}
        <View style={styles.row}>
            
        <Text style={[styles.cell, { borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#000' }]}>
            Solicitante: {'\n'}{'\n'}-</Text>
          
          <Text style={[styles.cell, { borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#000' }]}>
  Aplicador:{'\n'}{'\n'}-
</Text>

        </View>
        
      </View>







       {/* Saltos de línea para separar el header del contenido */}
       <Text>{'\n'}{'\n'}</Text>

       {/* <Image
          src={linea}
          alt="Logo"
          style={{ width: 500, height: 50 }}
        /> */}
<View style={{ alignItems: 'center' }}>
  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    <Image
      src={Escudo}
      alt="Logo"
      style={{ width: 100, height: 50 }}
    />
    <Image
      src={Colibri2}
      alt="Logo"
      style={{ width: 100, height: 50 }}
    />
    {/* <Image
      src={Bienestar}
      alt="Logo"
      style={{ width: 80, height: 40 }}
    /> */}
  </View>
  <Text style={{ marginTop: 5 }}>Programa Social Mujeres con Bienestar</Text>
</View>


 {/* Saltos de línea para separar el header del contenido */}
 <Text>{'\n'}{'\n'}</Text>

                <View style={styles.row}>
                <Text style={[styles.cell, { borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#000' }]}>
            Nombre : {'\n'}{persona.Nombre} {persona.Ape_Pa} {persona.Ape_Ma}</Text>

            <Text style={[styles.cell, { borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#000' }]}>
            Firma :{'\n'}{'\n'} ______________________</Text>

        </View>
        {/* Segunda fila: Fecha y Disctamen */}
        <View style={styles.row}>
        <Text style={[styles.cell, { borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#000' }]}>
            Fecha de la solicitud:{'\n'}{'\n'} 2025/02/20</Text>

            <Text style={[styles.cell, { borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#000' }]}>
            Folio:{'\n'}{'\n'} MB2311231059056</Text>
        </View>


        <View style={{ alignItems: 'flex-end' }}>
  {/* <Image
    src={barras}
    alt="Logo"
    style={{ width: 80, height: 40 }}
  /> */}
</View>


 {/* Contenido de la página */}
 <View style={styles.content}>
        {/* Aquí va el contenido de tu documento */}
      </View>

      {/* Footer Fijo */}
      <View style={styles.footer} fixed>
        {/* <Image
          src={linea}
          alt="Logo"
          style={{ width: 500, height: 50 }}
        /> */}
      </View>

                
            </Page>
        </Document>
    );
    






    return (

       <div>
  <nav className="bg-white shadow-xl">
    <div className="container mx-auto px-4 py-3 flex justify-center">
      <div className="flex flex-col items-center p-2">
        <div className="flex items-center">
          <img src={Escudo} alt="Logo" width={100} height={50} className="mr-4" />
          <img src={Colibri2} alt="Logo" width={100} height={50} className="mr-4" />
          {/* <img src={Bienestar} alt="Logo" width={100} height={50} className="mr-4" /> */}
        </div>
        <div className="mt-2 text-center">
          Programa Social Mujeres con Bienestar
        </div>
      </div>
    </div>
  </nav>

  
         

            {/* Visor del documento PDF */}
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-4">Información del Registro</h2>
                <PDFViewer width="100%" height="500">
                    <PDFDocument />
                </PDFViewer>
            </div>
        </div>
    );
};


export default FumPdf;