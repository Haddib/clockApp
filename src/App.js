import React, {useState, useEffect} from 'react';
import Clock from './components/clock/clock';
import './App.css';

function App() {

  /*const [hours, setHours] =  useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() =>{
      setInterval(() => {
          setHours(new Date().getHours());
          setMinutes(new Date().getMinutes());
      },
          60000
      );
  });*/

  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;
