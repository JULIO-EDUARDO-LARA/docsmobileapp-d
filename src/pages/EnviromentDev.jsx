import React from 'react'
import Footer from '../components/Footer'


function EnviromentDev() {
  return (
    <>
        <section className="seccion-principal contenedor">
            <div>
                <h1 className="heading1"><span>2.0 </span>Configurando entorno de desarrollo</h1>        
                <p className='parrafo-1'>
                El entorno de desarrollo de la app movil de tickevent sera trabajada en Expo-CLI dado que, despues de realizar algunas pruebas, fue bastante sencilla su configuracion. Otra de las bondades encontradas consiste en que permite durante el desarrollo desplegar los cambios sin instalar porgramas pesados como Android Estudio.
                </p>    
            </div>

            <figure className='contenido-figure contenedor'>
                <figcaption>Fig.5 - Expo-CLI Entorno de Desarrollo</figcaption>
                    <div className='contenido-img utl-w-60'>
                        <img src="../../public/img/expo-CLI.png" alt="" />
                    </div>
            </figure>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                       2.1 Instalar Expo-CLI
                    </h2>
                </div>
                <p className="">
                    Tan sencillo como abrir una terminal y , una vez se define en que parte alojaremos el proyecto, ejecutaremos alguno de los siguientes comandos:
                </p>

                <p className='comandos'>
                    npx create-expo-app rate-repository-app
                </p>
                <p className='comandos'>
                    npm install -g expo-cli
                </p>


            
                <p className="utl-mt-5">
                    Una vez realizada la instalación se iniciará el desarrollo en visual studio code y sera desplegado el entorno visual por medio del escaneo de un código QR.
                </p>
                <figure className='contenido-figure contenedor'>
                <figcaption>Fig.6 - Código QR (Expo - CLI)</figcaption>
                    <div className='contenido-img utl-w-60'>
                        <img src="../../public/img/expo-CLI2.png" alt="" />
                    </div>
                </figure>            
            </div>
        </section> 
        <Footer/>
    </>
  )
}

export default EnviromentDev
