import React from 'react';

// function Animal(props) {
    
//     return (
//         <div className='animal'>
//             <p> {props.animal == 'Lion' ? 'Roi de la jungle' : props.animal}</p>
//         </div>
//     );
// }

function Animal({animal}) {
    console.log(animal);
    return (
        <div className='animal'>
            <h2>Nom de l'animal: {animal === 'Lion' ? 'Roi de la jungle' : animal}</h2>
            <p></p>
        </div>
    );
}

export default Animal;