import React, { useState } from "react";
import CheckBoxx from './Components/CheckBoxx';
import Counter from './Components/Counter';
import Inputt from './Components/Inputt';
import Radio from './Components/Radio';
import Select from './Components/Select';




function App() {

  return (
    
    <div className="App">
      <CheckBoxx/> 
      <Counter />
      < Inputt />
      < Radio/> 
      <Select/>
    </div>
  );
}

export default App;
