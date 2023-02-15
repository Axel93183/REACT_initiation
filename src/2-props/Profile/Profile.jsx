import React from 'react';

function Profile(props) {
    return (
        <div className='profile'>
            <p>Nom: {props.nom}</p>
            <p>Prénom: {props.prenom}</p>
        </div>
    );
}

export default Profile;