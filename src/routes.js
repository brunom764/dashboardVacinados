import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App.js'
import Sobre from './pages/sobre/index.js'

export default function Rotas() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </Router>
    )
  };