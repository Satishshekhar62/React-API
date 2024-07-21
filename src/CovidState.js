import React, { useState, useEffect } from 'react';

function CovidStates() {
    const [stateData, setStateData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/states')
            .then(response => response.json())
            .then(data => {
                setStateData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    return (
        <div>
            <h1>COVID-19 Data for US States</h1>
            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {stateData.map(state => (
                        <tr key={state.state}>
                            <td>{state.state}</td>
                            <td>{state.cases.toLocaleString()}</td>
                            <td>{state.deaths.toLocaleString()}</td>
                            <td>{state.recovered ? state.recovered.toLocaleString() : 'N/A'}</td>
                            <td>{state.active.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CovidStates;
