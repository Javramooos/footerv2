import { useState } from 'react';
import './App.css';
import { Footer } from './componentes/Footer.jsx';
import './fontawesomeIcons.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <p> TEXTO DE PRUEBA PARA REMOVER</p>
      </body>
  
      <Footer />
    </>
  );
}

export default App;
