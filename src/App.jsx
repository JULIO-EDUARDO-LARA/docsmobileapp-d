import {BrowserRouter} from 'react-router-dom'
import Rutas from './components/Rutas'
import Nav from './components/Nav'


function App() {
  return (
    <div className=''>
        <BrowserRouter>
        <div className=''>
            <Nav/>
            <Rutas/>          
        </div>

        </BrowserRouter>
    </div>
  )
}

export default App