import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Contact from '../Pages/Contact'
import DetailsProducts from '../Pages/DetailsProducts'
import CartPage from '../Pages/CartPage'

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products/:id' element={<DetailsProducts />} />
                <Route path='/cartPage' element={<CartPage />} />
            </Routes>
        </>
    )
}

export default Routing