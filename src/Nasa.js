import React, { useState } from 'react';

function NasaApod() {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiKey = 'F9H5Y4hK04xvFiCS2YLQMs2IvKu7xgyN1RzSj9zN';  // Replace with your NASA API key

    function fetchApodData() {
        setLoading(true);
        setError(null);
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                setApodData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }

    return (
        <div>
            <h1>Astronomy Picture of the Day</h1>
            <button onClick={fetchApodData}>Show Picture</button>
            {loading && <p>Loading data...</p>}
            {error && <p>Error loading data: {error.message}</p>}
            {apodData && (
                <div>
                    <h2>{apodData.title}</h2>
                    <p>{apodData.date}</p>
                    <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%' }} />
                    <p>{apodData.explanation}</p>
                </div>
            )}
        </div>
    );
}

export default NasaApod;
