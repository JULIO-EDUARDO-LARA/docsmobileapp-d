import { Routes, Route} from 'react-router-dom'

import Index from '../pages/Index'
import Planificacion from '../pages/Planificacion'
import EnviromentDev from '../pages/EnviromentDev'
import Componentes from '../pages/Componentes'
import Enrutamiento from '../pages/Enrutamiento'
import ConexionApi from '../pages/ConexionApi'
import Pruebas from '../pages/Pruebas'
import Despliegue from '../pages/Despliegue'

function Rutas() {
  return (
    <Routes>
        <Route index element={<Index/>} />
        <Route path="planning" element={<Planificacion/>}/>
        <Route path="enviromentdev" element={<EnviromentDev/>}/>
        <Route path="components" element={<Componentes/>}/>
        <Route path="routing" element={<Enrutamiento/>}/>
        <Route path="connection" element={<ConexionApi/>}/>
        <Route path="testing" element={<Pruebas/>}/>
        <Route path="deployment" element={<Despliegue/>}/>
    </Routes>
  )
}

export default Rutas
