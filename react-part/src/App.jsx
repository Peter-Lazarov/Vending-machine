import './App.css'
import { ProductsProvider } from './products/ProductContext'
import Header from './core/Header'
import ProductsAll from './products/ProductsAll'
import Checkout from './checkout/Checkout'
import Payment from './payment/Payment'


function App() {

  return (
    <>
      <Header />
      <main id="content">
        <ProductsProvider>
          <ProductsAll />
          <Checkout />
          <Payment />
        </ProductsProvider>
      </main>
    </>
  )
}

export default App
