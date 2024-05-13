// desging daily x ideas for desing
import './App.css';
import data from './data'
import React, { useState } from 'react';
import List from './List';

function App() {

  return (
    <main>
      <section className="container">

<h3>0 birthday today</h3> 
<List />
<button onClick={()=> console.log('you clicked me')}>
  Clear all
</button>

      </section>
    </main>
  );
}

export default App;
