import React from 'react';

let score = 100;
let nom="GMX";
let prenom="Axel";
let age=37;
let permisDeConduire=false;

function Player() {
    
    return (
    <div className='person'>
        {score > 500 ? <h1>Vainqueur: {score}</h1> : <h1>Perdant: {score}</h1>}

        <h1>{nom} {prenom}</h1>

        {/* { age >= 18 ? <h1>Majeur</h1> : <h1>Mineur</h1>} */}

        <h1> {age >= 18 ? `Majeur`:`Mineur`}</h1>

        { permisDeConduire === true && age >= 18 ? <h1>Peut conduire</h1> : <h1>Ne peut pas conduire</h1>}

    </div>
    );
}

export default Player;