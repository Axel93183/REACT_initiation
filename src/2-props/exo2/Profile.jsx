import React from 'react';

function Profile({nom, prenom, age, naissance :{jour, mois, annee }, nationalite, hasCar}) {
    return (
        <div className='profile'>
            <h1>Nom: {nom}</h1>
            <h1>Prénom: {prenom}</h1>
            <h1>Age: {age}</h1>
            <h2>Naissance: {jour}/{mois}/{annee}</h2>
            <p>Nationalité: {nationalite}</p>
            <h2>Véhicule: {hasCar === true ? '🚗' : 'Sans véhicule'}</h2> 
        </div>
    );
}

export default Profile;