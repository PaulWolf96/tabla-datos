import './App.css';
import { dataMovies } from './dataMovies';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [movies, setMovies] = useState(dataMovies);
  


  const searchMovie = (e, valueInput) => {
    e.preventDefault();
    const filteredMovies = movies.filter(movie => movie.name === valueInput);
    if(filteredMovies.length > 0) {
      console.log(filteredMovies);
      setMovies(filteredMovies);
    } else {
      alert('La Película no se encontró');
    }
  }

  const orderMovie = (valueInput) => {
    
  }

  const filterMovie = (valueInput) => {

  }

  return (
    <div className="App">
      <h1>Películas</h1>
      <Form 
        handleSearchMovie={searchMovie}
        handleOrderMovie={orderMovie}
        handleFilterMovie={filterMovie}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Género</th>
            <th>Director</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {
            movies.map(m =>
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.gender}</td>
                <td>{m.director}</td>
                <td>{m.year}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
