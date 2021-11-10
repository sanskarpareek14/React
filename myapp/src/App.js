import { useState, useEffect } from 'react'
import Calculator from './Components/Calculator';

import Navbar from './Layouts/Navbar'
import Info from './Components/Info';
import Timer from './Components/Timer';
import Tap from './Components/Tap'



const App = () => {
  // const currentComp = 'Calculator'
  const [currentComp, setCurrentComp] = useState('Info')

  // if(currentComp === 'Calculator') return <Calculator/>
  // else if(currectComp === 'Timer') return <Timer/>
  // else if(currectComp === 'Tap') return <Tap/>
  // else return <Info/>
  return (
    <div className="App">
      <Navbar setCurrentComp={setCurrentComp} />
      {
        currentComp === 'Calculator' ? <Calculator /> :
          currentComp === 'Tap' ? <Tap /> :
            currentComp === 'Timer' ? <Timer /> :
              <Info />
      }
      {/* <Info />
      <Timer />
      <Calculator />
      <Tap /> */}
    </div >
  );
}



export default App;
