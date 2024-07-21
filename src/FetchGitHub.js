import React, { useState } from 'react';

function FetchGitHub() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState([]);

    function getData() {
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
                setUserData(data);
                console.log(data); // Log the fetched data instead of userData state
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    return (
        <div>
            <label>Enter GitHub Username:</label>
            <input
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <button onClick={getData}>Fetch Repos</button>

            <div>
                <h2>Repositories:</h2>
                {userData.length > 0 ? (
                    <ul>
                        {userData.map(repo => (
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                ) : (
                    <p>No repositories found</p>
                )}
            </div>
        </div>
    );
}

export default FetchGitHub;
