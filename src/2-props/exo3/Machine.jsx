import React from 'react';

function Machine({s1, s2, s3}) {
    return (
        <div className='machine'>
            <h1>{s1} - {s2} - {s3}</h1>
            <h1>{s1 === s2 && s3 === s1 ? 'gagnant! :) ':'perdant :( '}</h1>
        </div>
    );
}

export default Machine;