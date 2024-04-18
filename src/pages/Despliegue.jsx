import React from 'react'
import Footer from '../components/Footer'
import { FaArrowAltCircleRight } from "react-icons/fa";

function Despliegue() {
  return (
    <>
        <section className="seccion-principal contenedor">
            <div>
                <h1 className="heading1"><span>1.0 </span>DESPLIEGUE</h1>        
                <p className='parrafo-1'>
                    La descripción del despliegue de la aplicación para convertirla en un ejecutable .apk, sera un conjunto de pasos los cuales mostraremos a ocntinuación de una forma generica:
                </p>    
            </div>


            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      Paso 1: Generar la Build de Producción:
                    </h2>
                </div>
                
                <div className='contenedor-parrafo'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                      Abre una terminal en el directorio raíz de tu proyecto React Native.
                    </p>               
                </div>

                <div className='contenedor-parrafo'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                      Ejecuta el siguiente comando para generar la build de producción:
                    </p>               
                </div>

                <p className='comandos'>
                  npx react-native run-android --variant=release
                </p>
            </div>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                      Paso 2: Generar la Firma del APK:
                    </h2>
                </div>
                
                <div className='contenedor-parrafo'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                      En la misma terminal, navega al directorio android dentro de tu proyecto:
                    </p>               
                </div>

                <p className='comandos'>
                  cd android
                </p>

                <div className='contenedor-parrafo utl-mt-5'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                      Ejecuta el siguiente comando para generar una firma (puedes usar tu propio keystore o generar uno nuevo):
                    </p>               
                </div>

                <p className='comandos'>
                  ./gradlew signingReport
                </p>

                <p className='utl-mt-5'>
                Este comando mostrará la información necesaria para generar la firma, como el alias y la contraseña.
                </p>

                <div className='contenedor-parrafo utl-mt-5'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                    Crea o edita el archivo gradle.properties en el directorio android/ de tu proyecto y agrega las siguientes líneas con la información de tu firma:
                    </p>               
                </div>

                <p className='comandos'>
                MYAPP_RELEASE_STORE_FILE=nombre-del-keystore.keystore
                MYAPP_RELEASE_KEY_ALIAS=nombre-del-alias
                MYAPP_RELEASE_STORE_PASSWORD=contraseña-del-keystore
                MYAPP_RELEASE_KEY_PASSWORD=contraseña-del-alias
                </p>

            </div>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                    Paso 3: Generar el APK Firmado:
                    </h2>
                </div>
                
                <div className='contenedor-parrafo'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                      Regresa a la raíz de tu proyecto y ejecuta el siguiente comando para generar el APK firmado:
                    </p>               
                </div>

                <p className='comandos'>
                npx react-native run-android --variant=release
                </p>

                <p className='utl-mt-5'>
                Este comando compilará tu aplicación y generará el archivo APK firmado en el directorio android/app/build/outputs/apk/release/.
                </p>

                <div className='contenedor-parrafo utl-mt-5'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                    Encuentra el archivo APK generado (app-release.apk) en el directorio mencionado y guárdalo en un lugar seguro.
                    </p>               
                </div>

            </div>

            <div className="wrap1">
                <div className="">
                    <h2 className="heading2">           
                    Paso 4: Prueba y Distribución del APK:

                    </h2>
                </div>
                
                <div className='contenedor-parrafo'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                    Instala el archivo APK en un dispositivo Android para probarlo antes de distribuirlo.
                    </p>               
                </div>
                
                <div className='contenedor-parrafo'>
                  <FaArrowAltCircleRight className='flecha'/>
                    <p className="">
                    Si estás listo para distribuirlo, puedes compartir el archivo APK o subirlo a la tienda de aplicaciones de Google Play Store.
                    </p>               
                </div>
                <p className='utl-mt-5'>
                ¡Listo! Ahora tienes tu aplicación en React Native transformada en un archivo ejecutable .APK que puedes distribuir e instalar en dispositivos Android. Recuerda seguir las mejores prácticas de desarrollo y seguridad al generar y distribuir tu aplicación.
                </p>

            </div>
        </section> 
        <Footer/>
    </>
  )
}

export default Despliegue
