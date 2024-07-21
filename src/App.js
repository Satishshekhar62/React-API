import logo from './logo.svg';
import './App.css';
import Form from './Form';
import FetchGitHub from './FetchGitHub';
import CovidStates from './CovidState';
import NasaApod from './Nasa';
import MovieData from './FetchMovieData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Fetch GitHub Reposotories</h1>
        {/* <FetchGitHub /> */}
        {/* <CovidStates /> */}
        {/* <NasaApod/> */}
        <MovieData />
      </header>
    </div>
  );
}

export default App;
