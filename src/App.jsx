import { Outlet } from 'react-router-dom'
import Header from './component/shared/header/Header'
import Footer from './component/shared/footer/Footer'

function App() {

  return (
    <div>
      <Header />
      <div className='w-4/5 mx-auto my-5'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
