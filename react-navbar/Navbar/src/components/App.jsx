import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import LoginSignUp from './pages/LoginSignUp'
import Navbar from '../components/Navbar/Navbar'
import Carousel from './img-carousel/carousel'

import './App.css'

function App() {
      return (
                  <div className="container">
                        <Router>
                              <Navbar />
                                    <Routes>
                                          <Route path="/" exact element={<Home />} />
                                          <Route path="/about" element={<About/>} />
                                          <Route path="/contact" element={<Contact/>} />
                                          <Route path="/blog" element={<Blog/>} /> 
                                          <Route path="/login" element={<LoginSignUp/>} />
                                    </Routes>
                              
                        </Router>     
                        {/* <Carousel /> */}
                  </div>
      )
}

export default App;
