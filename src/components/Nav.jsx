import React , {useState} from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  const [selectedOption, setSelectedOption] = useState('Introduccion');
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <header className="header">
      <div className="contenedor contenido-header">
        <nav className='navegacion-principal'>
          <ul>
            <li className={selectedOption === 'Introduccion' ? 'active liLink' : ''}>
              <Link  to="/" onClick={() => handleOptionClick('Introduccion')}>
                Introduccion
              </Link>
            </li>
            <li className={selectedOption === 'Planificacion' ? 'active liLink' : 'liLink'}>
              <Link to="/planning" onClick={() => handleOptionClick('Planificacion')}>
              Planificacion
              </Link>
            </li>
            <li className={selectedOption === 'Entorno' ? 'active liLink' : 'liLink'}>
              <Link to="/enviromentdev" onClick={() => handleOptionClick('Entorno')}>
              Entorno
              </Link>
            </li>
            <li className={selectedOption === 'Componentes' ? 'active liLink' : 'liLink'}>
              <Link to="/components" onClick={() => handleOptionClick('Componentes')}>
              Componentes
              </Link>
            </li>
            <li className={selectedOption === 'Enrutamiento' ? 'active liLink' : 'liLink'}>
              <Link to="/routing" onClick={() => handleOptionClick('Enrutamiento')}>
              Enrutamiento
              </Link>
            </li>
            <li className={selectedOption === 'Conexion API' ? 'active liLink' : 'liLink'}>
              <Link to="/connection" onClick={() => handleOptionClick('Conexion API')}>
              Conexion API
              </Link>
            </li>
            <li className={selectedOption === 'Pruebas' ? 'active liLink' : 'liLink'}>
              <Link to="/testing" onClick={() => handleOptionClick('Pruebas')}>
              Pruebas
              </Link>
            </li>
            <li className={selectedOption === 'Despliegue' ? 'active liLink' : 'liLink'}>
              <Link to="/deployment" onClick={() => handleOptionClick('Despliegue')}>
              Despliegue
              </Link>
            </li>
            {/* Repite esto para cada opción */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav
