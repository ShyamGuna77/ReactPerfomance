import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigRender from './components/Counter/ConfigRender.jsx';

function App() {
  log('<App /> rendered');

  
  const [chosenCount, setChosenCount] = useState(0);
   function handleSetCount(number){
    setChosenCount(number);
    // setChosenCount(prevChosenCount => prevChosenCount + number);
   }
  
  return (
    <>
      <Header />
      <main>
        <ConfigRender onSet = {handleSetCount}/>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
