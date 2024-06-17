import React, { useState } from 'react'
import codes from '../utils/countryCode.json'

const Form = ({ type }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('+91');
    const [isLoading, setIsLoading] = useState(false);

    const handleNameChange = (event) => {
        const value = event.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setName(value);
        }
    };

    const handlePhoneNumberChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setPhoneNumber(value);
        }
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setName('');
        setCountry('+91');
        setPhoneNumber('');
    }

    console.log(country);


    return (
        <div className='flex w-full items-center justify-center flex-col gap-10'>
            <h3 className='text-2xl font-medium'>{type}</h3>
            <form
                className='flex w-full flex-col gap-6 items-center'
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-2 w-full'>
                    <label
                        htmlFor="name"
                        className='text-lg'
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id='name'
                        value={name}
                        placeholder='Enter Your Name'
                        onChange={handleNameChange}
                        required
                        className='p-2 outline-none border-2 border-blue-500 rounded-lg focus:bg-blue-50'
                    />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label
                        htmlFor="countryCode"
                        className='text-lg'
                    >
                        Select Country Code
                    </label>
                    <select
                        name="countryCode"
                        id="countryCode"
                        className='p-2 outline-none border-2 border-blue-500 rounded-lg focus:bg-blue-50'
                        onChange={handleCountryChange}
                        value={country}
                    >
                        {codes.map((code) => (
                            <option key={code.name} value={code.dial_code}>{code.emoji} {code.name} {code.dial_code}</option>
                        ))}
                    </select>
                    <label
                        htmlFor="name"
                        className='text-lg'
                    >
                        Phone Number with Country Code
                    </label>
                    <input
                        type="text"
                        id='name'
                        value={phoneNumber}
                        placeholder='Enter Phone Number'
                        onChange={handlePhoneNumberChange}
                        required
                        className='p-2 outline-none border-2 border-blue-500 rounded-lg focus:bg-blue-50'
                    />
                </div>
                <button
                    className='p-2 rounded-lg font-medium text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 ease-in-out'
                    type='submit'
                >
                    Submit Details
                </button>
            </form>
        </div >
    )
}

export default Form