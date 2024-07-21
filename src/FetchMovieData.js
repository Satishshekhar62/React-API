import React, { useState } from 'react';

function MovieData() {
    const [movie, setMovie] = useState('');
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const apiKey = '4b64ee43';  // Replace with your OMDb API key

    function fetchMovie() {
        setLoading(true);
        setError(null);
        fetch(`http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    setMovieData(data);
                } else {
                    setError(data.Error);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data');
                setLoading(false);
            });
    }

    return (
        <div>
            <h1>Movies Data</h1>
            <input 
                type="text"
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                placeholder="Enter Movie Name"
            />
            <br />
            <br />
            <button onClick={fetchMovie}>Fetch Movie Data</button>

            {loading && <p>Loading data...</p>}
            {error && <p>Error: {error}</p>}
            {movieData && (
                <div>
                    <h2>{movieData.Title}</h2>
                    <p><strong>Year:</strong> {movieData.Year}</p>
                    <p><strong>Genre:</strong> {movieData.Genre}</p>
                    <p><strong>Director:</strong> {movieData.Director}</p>
                    <p><strong>Plot:</strong> {movieData.Plot}</p>
                    <img src={movieData.Poster} alt={movieData.Title} />
                </div>
            )}
        </div>
    );
}

export default MovieData;
