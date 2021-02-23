import React, {useEffect, useState} from 'react';

const App = () => {

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    
  }, [])

  return(
    <div className="App">
      <form className='search-form'>
        <input type='text' className='search-bar'/>
        <button type='submit' className='search-button'>Search</button>
      </form>
    </div>
  )
}

export default App;
