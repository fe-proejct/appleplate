import './App.css'
import { ReactNode } from 'react'
import Footer from './features/ui/Footer'
import Header from './features/ui/Header'

function App({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="App">
      <Header />
      {children}
      <Footer />
    </div >
  )
}

export default App
