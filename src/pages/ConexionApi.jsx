import React from 'react'
import Footer from '../components/Footer'


function ConexionApi() {
  return (
    <>
        <section className="seccion-principal contenedor">
            <div>
                <h1 className="heading1"><span>1.0 </span>CONEXIÓN CON LA API</h1>        
                <p className='parrafo-1'>
                  La API a la cual nos conectaremos será una desarrollada por el equipo de integrantes de tickevent. Se creará un archivo de conexión a la base de datos por medio del framework Laravel para establecer la conexión con una base de datos MySQL Existente.
                </p>    
            </div>
            <div className='utl-mt-5'>
                <h1 className="heading1"><span>1.0 </span>Realizar solicitudes HTTP:</h1>        
                <p className='parrafo-1'>
                Las solicitudes http serán realizadas sin ningún tipo de librería, utilizaremos únicamente los hooks de useEffect y async await para realizar las peticiones de consulta. No obstante, si se complica el consumo de esta API, utilizaremos como alternativa la libreria de AXIOS.
                </p>    
            </div>
        </section> 
        <Footer className="utl-mt-auto"/>
    </>
  )
}

export default ConexionApi
