import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Product from './components/Product'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Footers from './components/Footers'

function App() {

  return (
    <>
       <Navbar />
       <Home />
       <Services />
       <About />
       <Product />
       <Blog/>
       <Newsletter/>
       <Footers/>

    </>
  )
}

export default App
