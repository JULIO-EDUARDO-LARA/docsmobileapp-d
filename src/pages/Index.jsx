import React from 'react'
import Footer from '../components/Footer'

function Introduccion() {
  return (
    <>
        <section className="seccion-principal contenedor">
          
            <div>
                <h1 className="heading1"><span> </span>Introducción y alcance tickevent Mobile app</h1>        
                <p className='parrafo-1'>
                En la era digital actual, la eficiencia y la organización son clave para el éxito de cualquier evento. Nuestra aplicación móvil de gestión de eventos será desarrollada con la última tecnología React, estará diseñada para simplificar y automatizar el proceso de manejo de entradas, desde la autenticación de usuarios hasta la venta y validación de boletas. Con una interfaz intuitiva y fácil de usar, esta aplicación tendrá una solución integral que permite a los organizadores de eventos y al personal de ventas gestionar eficazmente las tareas críticas con solo unas pocas herramientas.
                </p>    
            </div>

            <div>
                <h1 className="heading1 utl-mt-5"><span></span>Alcance</h1>        
                <p className='parrafo-1'>
                La aplicación constara de cuatro vistas principales que cubren todo el ciclo de vida de una boleta. Desde el momento en que un usuario se autentica en el sistema, pasando por la selección y compra de boletas, hasta la validación de la entrada en el evento, nuestra aplicación garantiza un proceso fluido y sin contratiempos. Además, con la integración de lectores de QR, la aplicación asegura que cada transacción sea segura y verificable, proporcionando tranquilidad tanto a los organizadores como a los asistentes.
                </p>    
            </div>

            <div>
                <h1 className="heading1 utl-mt-5"><span></span>Apreciaciones finales</h1>        
                <p className='parrafo-1'>
                Con esta aplicación, estamos redefiniendo la manera en que los eventos son gestionados, ofreciendo una plataforma robusta que no solo mejora la experiencia del usuario, sino que también optimiza las operaciones de venta y control de accesos. Bienvenidos a la próxima generación de gestión de eventos.
                </p>    
            </div>
            <figure className='contenido-figure contenedor'>
              <figcaption>Fig.0 - Mascota oficial (Tickevent)</figcaption>
                <div className='contenido-img utl-w-60'>
                  <img src="../../public/img/pet/pet-a.png" alt="" />
                </div>
            </figure>
            
        </section> 
        <Footer/>

    </>
  )
}
export default Introduccion
