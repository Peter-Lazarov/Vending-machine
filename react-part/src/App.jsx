import './App.css'
import { ProductsProvider } from './products/ProductContext'
import Header from './core/Header'
import ProductsAll from './products/ProductsAll'
import Checkout from './checkout/Checkout'
import Payment from './payment/Payment'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <main id="content">
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<>
              <ProductsAll />
              <Checkout />
            </>} />
            <Route path="/payment" element={
              <Payment />
            } />
          </Routes>
        </ProductsProvider>
      </main>
    </>
  )
}

export default App
