import React from 'react'
import Footer from '../components/Footer'



function Pruebas() {
  return (
    <>
        <section className="seccion-principal contenedor">
            <div>
                <h1 className="heading1"><span>1.0 </span>Pruebas del Backend:</h1>        
            </div>
            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      Pruebas Unitarias:
                    </h2>
                </div>
                <p className="">
                  Un buen objetivo seria realizar pruebas a nivel de funciones o métodos del backend de la aplicacion de tickevent para asegurar que cada componente funcione correctamente individualmente.
                  Sin embargo el equipo de tickevent no tiene experiencia en la realización de este tipo de pruebas, no obstante, se realizará una consulta con el fin de llevarlas a cabo.
                </p>
            </div>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      Pruebas de Integración:
                    </h2>
                </div>
                <p className="">
                  Se probarán las interacciones entre diferentes componentes del backend para verificar que se integren adecuadamente. Lo realizaremos por medio de llamadas simuladas a la API, acceso a base de datos, y otros servicios externos para comprobar la integración.
                </p>
            </div>
            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      Pruebas de Rendimiento:
                  </h2>
                </div>
                <p className="">
                  estas pruebas de rendimiento seran opcionales, las cuales conssiten en evaluar el rendimiento del backend bajo diferentes cargas de trabajo para identificar cuellos de botella o problemas de escalabilidad.
                </p>
            </div>
        </section> 
        <Footer/>
    </>
  )
}

export default Pruebas
