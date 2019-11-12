import React, {useState, useEffect} from 'react';
import VerticalClockBar from './containers/verticalClockBar/verticalClockBar';
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
      <VerticalClockBar />
    </div>
  );
}

export default App;
