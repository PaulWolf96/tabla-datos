import { useState } from "react";

const Form = ({handleSearchMovie, handleOrderMovie, handleFilterMovie}) => {

  /* const inputs = {
    inputSearch: '',
    inputOrder: {
      orderName: '',
      orderYear: '' 
    },
    inputFilter: {
      orderGender: '',
      orderDirector: ''
    }
  }; */

  const [input, setInput] = useState('');

  return (
    <form>
        <fieldset>
          <legend>Buscar Películas</legend>
          <input type='text' value={input} placeholder='Buscar Película' onChange={(e) => setInput(e.target.value)} />
          <button type='submit' onClick={(e) => handleSearchMovie(e, input)}>Buscar</button>
        </fieldset>

        <fieldset>
          <legend>Ordenar Películas por:</legend>
          <select onChange={(e) => setInput(e.target.value)}>
            <option value='name'>Nombre</option>
            <option value='year'>Año</option>
          </select>
          <button type='submit' onClick={() => handleOrderMovie(input)}>Ordenar</button>
        </fieldset>

        <fieldset>
          <legend>Filtrar Películas por:</legend>
          <select onChange={(e) => setInput(e.target.value)}>
            <option value='gender'>Género</option>
            <option value='director'>Director</option>
          </select>
          <button type='submit' onClick={() => handleFilterMovie(input)}>Filtrar</button>
        </fieldset>
      </form>
  );
}

export default Form;