// desging daily x ideas for desing
import './App.css';
import data from './data'
import React, { useState } from 'react';
import List from './List';

function App() {
const [people,setPeople] = useState(data)
  return (
    <main>
      <section className="container">

<h3>{people.length}0 birthday today</h3> 
<List people={people}/>
<button onClick={()=> setPeople([])}>
  Clear all
</button>

      </section>
    </main>
  );
}

export default App;
