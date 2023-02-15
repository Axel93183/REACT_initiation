import './App.css';

import Voiture from "./exo1/Voiture.jsx";
import Maison from "./exo2/Maison.jsx";
import Person from "./exo3/Person.jsx";
import Player from './exo4/Player';

function App() {
  return (
    <>
      <div className="App">
        <Voiture/>
        <Maison/>
        <Person/>
        <Player/>
    
      </div>
     
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <div className="App">
//         <Personne/>
//         <Personne/>
//       </div>
//       <div>

//       </div>
//     </>
//   );
// }
