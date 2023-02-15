
function CounterSansState(props) {

   

    const styleButton = {
        border: '1px solid blue',
        backgroundColor: 'darkblue',
        color: "white",
        fontSize: "1.3rem",
        borderRadius: "15px",
        outline: "none",
        padding: "10px",
        cursor: "pointer"
    
    };
   
    
    let compteur = 0;
    const onClickIncrementer = () =>{
        
        compteur += 1;

        console.log(compteur);
        console.log('bouton Incrémenter cliqué +1')
    }
    const onClickDecrementer = () =>{
       
        compteur -= 1;
        
        console.log(compteur);
        console.log('bouton Décrémenter cliqué -1')
        }


   return (
        <div className="">
            {/* //attibut propriété special prédéfini de button: style={} / onClick{} */}
            <button onClick={onClickIncrementer} style={styleButton}>Incrémenter</button>
            <h1>{compteur}</h1>
            <button onClick={onClickDecrementer} style={styleButton}>Décrémenter</button>
        </div>
    );

}

export default CounterSansState;