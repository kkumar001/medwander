import React from 'react'
import Navbar from '../components/Navbar'
import BasicModal from '../components/BasicModal'

const Home = () => {
    return (
        <main className='w-full h-[100vh]'>
            <Navbar />
            <div className='w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-blue-100 p-2 gap-6'>
                <h3 className='text-2xl font-medium'>CLICK ON THE BUTTON TO OPEN THE FORM</h3>
                <div className='flex gap-10'>
                    <BasicModal text='Form A' />
                    <BasicModal text='Form B' />
                </div>
            </div>
        </main>
    )
}

export default Home