import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes'
import GlobalStyles from './styles/GlobalStyles'
import NavBar from './components/layout/NavBar'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
