import React, { useState } from 'react'
import cl from './Form.module.css'

export const Form = () => {
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeGender = (e) => {
        setGender(e.target.value);
    }

    return (
        <div className={cl.form}>
            <input
                className={cl.input}
                type="text"
                placeholder='Country'
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={cl.input}
                type="text"
                placeholder='City'
                value={city}
                onChange={onChangeCity}
            />
            <select className={cl.select} value={gender} onChange={onChangeGender}>
                <option selected disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
        </div>
    )
}
