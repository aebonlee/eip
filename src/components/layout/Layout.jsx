import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
