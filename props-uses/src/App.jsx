import './App.css'
import Container from './components/container/Container'
import Product from './components/product/Product'

function App() {

  const product = "Elbise"
  const price = 2200

  return (
    <div>
      <Container>
        <Product productName={product} productPrice={price} />
      </Container>
    </div>
  )
}

export default App
