import React from 'react'
import Footer from '../components/Footer'
import { FaArrowAltCircleRight } from "react-icons/fa";

function Planificacion() {
  return (
    <>
        <section className="seccion-principal contenedor">
            <div>
                <h1 className="heading1"><span>1.0 </span>Planificacion</h1>        
                <p className='parrafo-1'>
                    A continuación mostramos el proceso de planificacion de Tickevent.
                </p>    
            </div>


            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                        1.1 Definir los requisitos funcionales y no funcionales
                    </h2>
                </div>
                <p className="">Se iniciará definiendo los requisitos funcionales de la aplicación movil de tickevent. Dado que los requisitos funcionales ya se encuentran definidos, podran ser descritos a continuación:</p>
                <div className="">
                    <h3 className="heading3">1.1.1 Autenticación de Usuarios:</h3>
                    <p className="">Los usuarios deben poder iniciar sesión utilizando su correo electrónico y contraseña.</p>
                </div>
                <div className="">
                    <h3 className="heading3">1.1.2. Validación de Boletas:</h3>
                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">La aplicación debe ser capaz de escanear códigos QR para validar la entrada y salida de los asistentes al evento.</p>               
                    </div>
                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Debe mostrar mensajes de validación según el estado de la boleta (entrada, salida, boleta falsa).</p>
                    </div>


                </div>
            
                    <img src="" alt="" />
            
            </div>


            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                        1.2 Diseniar las vistas
                    </h2>
                </div>
                <p className="">Se realizo el diseno de las vistas de la app de tickevent tomando como fundamento los colores corporativos y la descripcion detalladas de cada uno de los objetos que podrian estar presentes en las interacciones y el funcionamiento. A continuacion se muestra al dedillo una descripcion del flujo de navegacion y de sus elementos:</p>

                <div className="">
                    <h3 className="heading3">1.2.1 vista 1: login</h3>
                    <p className="">Permite el ingreso a la aplicación por medio del login. El contenido descriptivo de la vista sería el siguiente:</p>

                    <h4 className='heading4'>1.2.1.1 Campo 1:</h4>
                    <p className="">Recibe el correo de usuario.</p>

                    <h4 className='heading4'>1.2.1.2 Campo 2:</h4>
                    <p className="">Recibe la contraseña de usuario.</p>

                    <h4 className='heading4'>1.2.1.3 Botón 1:</h4>
                    <p className="">Envía petición de consulta a la base de datos de las credenciales de usuario ingresadas. Una vez las credenciales son validadas por el sistema, te redirige a la vista 2: Home</p>
                    <figure className='contenido-figure contenedor'>
                        <figcaption>Fig.1 - vista Login (Tickevent)</figcaption>
                        <div className='contenido-img utl-w-40'>
                            <img src="../../public/img/mockups/1.png" alt="" />
                        </div>
                    </figure>
                </div>

                <div className="">
                    <h3 className="heading3">1.2.2 vista 2: Home</h3>
                    <p className="">Es la vista inicial una vez el usuario ingresa al sistema, el cual tiene solo dos botones. El contenido descriptivo de la vista sería el siguiente:</p>

                    <h4 className='heading4'>1.2.2.1 Botón de imagen 1:</h4>
                    <p className="">validar entrada: este botón redireccionará a la vista 3: validar boleta.</p>

                    <h4 className='heading4'>1.2.2.2 Botón de imagen 2:</h4>    
                    <p className="">Puede tener un texto que indique “vender boleta”; este botón permite redireccionar a la sección de venta de boletas (vista 4: Procesar la venta de boletas)</p>


                    <figure className='contenido-figure contenedor'>
                        <figcaption>Fig.2 - Vista Home (Tickevent)</figcaption>
                        <div className='contenido-img utl-w-40'>
                            <img className='' src="../../public/img/mockups/2.png" alt="" />
                        </div>
                    </figure>
                </div>

                <div className="">
                    <h3 className="heading3">1.2.3 vista 3: validar boleta (ingreso o salida del asistente)</h3>
                    <p className="">Permite validar la boleta que es leída por QR en el momento de ingreso del asistente o salida momentánea del evento. El contenido descriptivo de la vista sería el siguiente:</p>

                    <h4 className='heading4'>1.2.3.1 Campo 1:</h4>
                    <p className="">Recibe el ingreso del id de la boleta leída (únicamente por lector de QR)</p>

                    <h4 className='heading4'>1.2.3.2 Sección 1: acciones del asistente</h4>    
                    <p className="">Tendrá dos radius botón: uno para cuando se procesa la entrada del usuario y otro para procesar una salida momentánea</p>

                    <h4 className='heading4'>1.2.3.3 Botón 1: validar</h4>    
                    <p className="">Sería el botón “validar “. Realizará la búsqueda del ID del Código de barras en la base de datos.</p>

                    <h4 className='heading4'>1.2.3.4 Espacio de visualización:</h4>    
                    <p className="">en la parte inferior aparecerán los datos de validación de la boleta escaneada con los siguientes estados:</p>

                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Boleta falsa: un aviso que podría decir: QR NO ENCONTRADO: Este ID nunca se procesó en las transacciones de TICKEVENT Acérquese a la taquilla para adquirir una entrada para el evento.</p>               
                    </div>

                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Boleta leída cuando asistente entra por primera vez: un aviso que podría decir: Entrada procesada: Felicitaciones Fecha: ?? Hora: ??</p>               
                    </div>

                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Boleta leída cuando asistente sale: un aviso que podría decir: Salida procesada: Regresa pronto.</p>               
                    </div>
                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Boleta leída cuando asistente entra nuevamente: un aviso que podría decir: Entrada procesada: Siga disfrutando del evento</p>               
                    </div>


                    <figure className='contenido-figure contenedor'>
                        <figcaption>Fig.3 - Vista Validar Boleta (Tickevent)</figcaption>
                        <div className='contenido-img utl-w-40'>
                            <img src="../../public/img/mockups/3.png" alt="" />
                        </div>
                    </figure>
                </div>

                <div className="">
                    <h3 className="heading3">1.2.4 vista 4: Procesar la venta de boletas</h3>
                    <p className="">Permite realizar la venta de una o más boletas a un cliente El contenido descriptivo de la vista sería el siguiente:</p>

                    <h4 className='heading4'>1.2.4.1 Campo desplegable 1:</h4>
                    <p className="">Campo desplegable para seleccionar el evento</p>

                    <h4 className='heading4'>1.2.4.2 Botón 1:</h4>    
                    <p className="">botón de incremento para seleccionar la cantidad de boletas que serán vendidas</p>

                    <h4 className='heading4'>1.2.4.3 Sección 1: datos del asistente</h4>    
                    <p className="">La sección está compuesta de datos de comprador: Los elementos de la sección serian:</p>

                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Campo 1: Nombres</p>               
                    </div>

                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Campo 2: Apellidos</p>               
                    </div>

                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Campo 3: E-mail</p>               
                    </div>
                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Campo 4: Cedula</p>               
                    </div>
                    <div className='contenedor-parrafo'>
                        <FaArrowAltCircleRight className='flecha'/>
                        <p className="">Campo 5: número de celular</p>               
                    </div>
                    <h4 className='heading4'>1.2.4.4 Botón 2:</h4>    
                    <p className="">Sería el botón “vender boleta”</p>

                    <figure className='contenido-figure contenedor'>
                        <figcaption>Fig.4 - Vista Procesar Venta (Tickevent)</figcaption>
                        <div className='contenido-img utl-w-40'>
                            <img src="../../public/img/mockups/4.png" alt="" />
                        </div>
                    </figure>
                </div>
            </div>
        </section> 
        <Footer/>
    </>



    
  )
}

export default Planificacion
