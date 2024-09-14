import './App.css'
import Header from './core/Header'
import ProductsAll from './products/ProductsAll'
import Checkout from './checkout/Checkout'
import { ProductsProvider } from './products/ProductContext'


function App() {

  return (
    <>
      <Header />
      <main id="content">
        <ProductsProvider>
          <ProductsAll />
          <Checkout />
        </ProductsProvider>
      </main>
    </>
  )
}

export default App
