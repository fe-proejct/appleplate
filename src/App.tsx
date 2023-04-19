import './App.css'
import { ReactNode } from 'react'

function App({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="App">
      <header> 헤더 </header>
      {children}
      <footer> 푸터 </footer>
    </div >
  )
}

export default App
