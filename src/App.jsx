import {useState , Fragment} from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import Examples from './components/Examples.jsx';

function App() {

  

  return (
    <>
      <Header/>
      <main>
        <CoreConcept/>
        <h2>Time to get started!</h2>
        <Examples/>
       
      </main>
    </>
  );
}

export default App;
