import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import Main from './assets/components/Main'

import Projects from './assets/components/projects'
import About from './assets/components/about'
import Contact from './assets/components/contact'
import Footer from './assets/components/footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <Main />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
