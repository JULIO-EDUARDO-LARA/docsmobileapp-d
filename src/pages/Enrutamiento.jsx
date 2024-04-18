import React from 'react'
import Footer from '../components/Footer'


function Enrutamiento() {
  return (
    <>
        <section className="seccion-principal contenedor">
            <div>
                <h1 className="heading1"><span>4.0 </span>Configurando ENRUTAMIENTO</h1>        
                <p className='parrafo-1'>
                El enrutamiento será gestionado utilizando bibliotecas como React Navigation. Esta biblioteca nos permitirá configurar y gestionar las diferentes vistas de tickevent de manera fácil y eficiente. En nuestro caso, sera necesario configurar el enrutamiento para las cuatro vistas mencionadas el los componentes: <span className='resalte'>LoginView, </span><span className='resalte'>HomeView, </span><span className='resalte'>ValidateTicketView </span>y<span className='resalte'> SellTicketsView.</span>
                </p>    
            </div>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      4.1 Instalación de React Navigation:
                    </h2>
                </div>
                <p className="">
                  Se instalará React Navigation en el entorno de desarrollo. por medio de los comandos de npm.
                </p>

                <p className='comandos'>
                npm install @react-navigation/native @react-navigation/stack
                </p>

                <p className="utl-mt-5">
                    Una vez realizada la instalacion se iniciara el desarrollo en visual studio code y sera desplegado el entorno visual por medio del escaneo de un codigo qr.
                </p>
            
            </div>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      4.2 Configuración de Navegación:
                    </h2>
                </div>
                <p className="">
                  Despues de la instalación, se configurará la navegacion en el archivo principal, importando los archivos necesarios para crear un stack Navigator que contenga las cuatro vistas.
                </p>
                <p className="utl-mt-5">
                  a continuación se muestra una demostracion por medio de un snipet general:
                </p>

                <figure className='contenido-figure contenedor'>
                <figcaption>Fig.7 - Snipet Enrutamiento (Tickevent)</figcaption>
                    <div className='contenido-img utl-w-60'>
                        <img src="../../public/img/navigate.png" alt="" />
                    </div>
                </figure>            
            </div>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      4.3 Configuraciones Adicionales:
                    </h2>
                </div>
                <p className="">
                  Dependiendo de las necesidades que se presenten durante el proceso de desarrollo de tickevent mobile app, es posible que se agreguen funcionalidades adicionales a la navegación, como pestañas, cajónes laterales, etc.
                </p>
                <p className="utl-mt-5">
                  Con estos pasos genericos, podremos configurar correctamente el enrutamiento de tickevent mobile app y permitir que los usuarios naveguen de manera fluida entre las diferentes vistas según las acciones que realicen, como iniciar sesión, validar boletas o procesar ventas de boletas.
                </p>
            </div>
        </section> 
        <Footer/>
    </>
  )
}

export default Enrutamiento
