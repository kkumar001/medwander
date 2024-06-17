import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='w-full h-16 flex justify-between items-center px-10 gap-2'>
            <Link to='/' className='flex items-center justify-center'>
                <img src={logo} alt="logo" className='h-12' />
            </Link>
            <h3 className='font-medium'>Looking for Best Medical Treatments and Surgeries in India?</h3>
            <button className='p-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out'>
                Get A Free Quote
            </button>
        </nav>
    )
}

export default Navbar