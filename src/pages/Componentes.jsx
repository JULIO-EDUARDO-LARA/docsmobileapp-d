import React from 'react'
import Footer from '../components/Footer'



function Componentes() {
  return (
    <>
        <section className="seccion-principal contenedor">
            <div>
                <h1 className="heading1"><span>3.0 </span>Desarrollo de Componentes TICKEVENT APP MOBILE</h1>        
                <p className='parrafo-1'>
                    A continuación se realizará la descripción de los posibles componentes y hooks que tendrá la aplicación. Estos serán clasificados de acuerdo con cada vista que ya fué descrita en la opción de menú "Planificación."
                </p>    
            </div>

            <div className="wrap1">
 
                    <img src="" alt="" />
            
            </div>

            <div className="wrap1">


                <div className="">
                    <h3 className="heading3">3.1 vista 1: login</h3>


                    <h4 className='heading4'>3.1.1 componentes: </h4>
                    <p className=""> <span className='resalte'>LoginView: </span> 
                      contendrá los campos de correo y contraseña, el botón de inicio de sesión y la lógica de autenticación.
                    </p>

                    <h4 className='heading4'>3.1.2 hooks:</h4>
                    <p className=""> <span className='resalte'>UseState: </span> 
                      permitirá la gestión de los estados de los campos de entrada.
                    </p>
                    <p className=""> <span className='resalte'>UseEffect: </span> 
                    permitirá realizar la petición de consulta a la base de datos al cargar la pantalla.
                    </p>

                </div>

                <div className="">
                    <h3 className="heading3">3.2 vista 2: Home</h3>

                    <h4 className='heading4'>3.2.1 componentes:</h4>
                    <p className=""> <span className='resalte'>HomeView: </span> 
                      contendrá los botones para validar entrada y vender boletas.
                    </p>

                    <h4 className='heading4'>3.2.2 hooks:</h4>
                    <p className=""> <span className='resalte'>N.A: </span> 
                      por el momento, No se prevee su uso.
                    </p>

                </div>

                <div className="">
                    <h3 className="heading3">
                      3.3 vista 3: validar boleta (ingreso o salida del asistente)
                    </h3>

                    <h4 className='heading4'>3.3.1 componentes:</h4>
                    <p className=""> <span className='resalte'>ValidateTicketView: </span> 
                      contiene los campos de ingreso de ID de boleta y los botones de validar entrada y salida.
                    </p>

                    <h4 className='heading4'>3.3.2 hooks:</h4>
                    <p className=""> <span className='resalte'>UseState: </span> 
                      permitirá gestionar los estados de los campos de entrada.
                    </p>
                    <p className=""> <span className='resalte'>UseEffect: </span> 
                      permitirá realizar la búsqueda en la base de datos al validar la boleta.
                    </p>
                </div>

                <div className="">
                    <h3 className="heading3">3.4 vista 4: Procesar la venta de boletas</h3>

                    <h4 className='heading4'>3.4.1 componentes:</h4>
                    <p className=""> <span className='resalte'>SellTicketsView: </span> 
                      contendrá los campos de selección de evento, cantidad de boletas y datos del comprador, junto con el botón de vender boleta.
                    </p>

                    <h4 className='heading4'>3.4.2 hooks:</h4>
                    <p className=""> <span className='resalte'>UseState: </span> 
                      permitirá gestionar los estados de los campos de entrada y la cantidad de boletas.
                    </p>
                    <p className=""> <span className='resalte'>UseEffect: </span> 
                      permitirá manejar la lógica de venta de boletas y la comunicación con la base de datos.
                    </p>
                </div>
            </div>
        </section> 
        <Footer/>
    </>
  )
}

export default Componentes
