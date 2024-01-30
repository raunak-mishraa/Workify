import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
    <Header/>
      <main>
      <Outlet/>
      </main>
    <Footer/>
    </>
  )
}

export default App
