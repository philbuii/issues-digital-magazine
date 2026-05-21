import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const RootLayout = () => (
  <>
  <Navbar />
    <div className='min-h-full flex flex-col'>
      <main className='flex-1'>
      <Outlet />
    </main>
    </div>
    <Footer />
    <TanStackRouterDevtools />
  </>
)

export const Route = createRootRoute({ component: RootLayout })