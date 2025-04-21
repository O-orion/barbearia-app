import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes'
import GlobalStyles from './styles/GlobalStyles'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
