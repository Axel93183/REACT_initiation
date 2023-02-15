import Chambre from "./Chambre";
import Cuisine from "./Cuisine";
import Salon from "./Salon";
function Maison() {
    return (
        <div className="maison">
            <h1>Bienvenue chez moi, ma maison se comporte de:</h1>
            <ul>
                <Chambre/>
                <Cuisine/>
                <Salon/>
            </ul>
        </div>
    );
}

export default Maison;