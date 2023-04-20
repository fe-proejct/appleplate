import './App.css'
import { ReactNode } from 'react'
import Footer from './features/ui/Footer'
import Header from './features/ui/Header'
import {store} from './store/store';
import { Provider } from 'react-redux';

function App({
  children
}: {
  children: ReactNode
}) {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        {children}
        <Footer />
      </div >
      </Provider>
  )
}

export default App
