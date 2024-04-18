import React from 'react'
import {Link} from 'react-router-dom'

const LayoutNav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Introduccion</Link></li>
        <li><Link to="/planning">Planificacion</Link></li>
        <li><Link to="/enviromentdev">COnfiguracion Entorno Desarrollo</Link></li>
        <li><Link to="/components">Definicion de componentes</Link></li>
        <li><Link to="/routing">Enrutamiento</Link></li>
        <li><Link to="/connection">Conexion con API</Link></li>
        <li><Link to="/testing">Pruebas</Link></li>
        <li><Link to="/deployment">Despliegue</Link></li>
      </ul>
    </nav>
  )
}

export default LayoutNav

