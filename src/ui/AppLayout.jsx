import Header from './Header.jsx'
import CartOverview from '../features/cart/CartOverview.jsx'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader.jsx'

function AppLayout() {
  const navigate = useNavigation()
  const isLoading = navigate.state === 'loading'

  return (
    <div className=" grid-rows-[auto_1fr_auto] grid h-screen ">
      {isLoading && <Loader />}

      <Header />


      <div className='overflow-scroll'>

        <main className=' max-w-3xl mx-auto'>
          {/*<p>this is the h1 of application Layout</p>*/}
          {/*<p>{isLoading}</p>*/}
          <Outlet />
        </main>

      </div>

      <CartOverview />
    </div>
  )
}

export default AppLayout
