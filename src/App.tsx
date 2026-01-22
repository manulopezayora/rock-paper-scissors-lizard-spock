import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Classic } from './pages/Classic'
import { LizardSpock } from './pages/LizardSpock'

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Classic />} />
        <Route path="/bonus" element={<LizardSpock />} />
      </Routes>
    </div>
  )
}

export default App
