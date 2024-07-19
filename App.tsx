
import { useState } from 'react';
import './App.css';
import { HangImage } from './components/HangImage';
import { letters } from './helpers/letters';

function App() {

  const [ attempts] = useState(5);


  return (
    
      <div className="App">
          
          {/* imagenes */}
          <HangImage imageNumber={ attempts } />

          {/* palabra oculta */}
           <h3>_ _ _ _ _ _ _ _ _ _</h3>
      
          {/* contador de intentos */}
           <h3>intentos 0</h3>
      
          {/* botones de letras */}
            {
              letters.map( (letter) => (
                <button key={ letter }>{ letter }
                </button>
              ))
              
            }

      
      </div>
  );
};

export default App;
