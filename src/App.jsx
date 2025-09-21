import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="conteudo">
        <AppRoutes></AppRoutes>
      </main>
      <Footer />
    </div>
  )
}

export default App
