import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css'

const App = () => {
    const [querry, setQuerry] = useState('');
    const [weather, setWeather] = useState('');

    const search = async (e) => {
        if (e.key === 'Enter') {
            const data = await fetchWeather(querry)

            setWeather(data);
            setQuerry('');
        }
    }


    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="search..."
                value={querry}
                onChange={(e) => setQuerry(e.target.value)}
                onKeyPress={search} />
            {weather.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>

                </div>

            )}

        </div>
    );
}

export default App;