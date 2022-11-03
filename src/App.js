import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Country from './views/Country'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/country/:name"
        element={<Country />}
      />
    </Routes>
  )
}

export default App
