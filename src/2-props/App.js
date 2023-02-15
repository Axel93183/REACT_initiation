// import React from "react";
// import Profile from './Profile/Profile';
// import Animal from './exo1/Animal';
// import Profile from './exo2/Profile.jsx';
import Machine from "./exo3/Machine";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      {/* <div>
            <Profile/>
            <Profile nom='GMX' prenom= 'Axel'/>
            <Profile nom='Potter' prenom= 'Harry'/>
            <Profile nom='Doe' prenom= 'John'/>
            </div> */}
{/* 
      <div>
        <Animal animal="Tigre" />
        <Animal animal="Loup" />
        <Animal animal="Lion" />
      </div>

      <Profile
        nom="John"
        prenom="Doe"
        age={34}
        naissance={{ jour: 26, mois: 12, annee: 1988 }}
        nationalite="Britanique"
        hasCar={true}
      /> */}

      
        <h1> 💲💲🎰🎰🎰Machine à sous! 🎰🎰🎰💲💲</h1>

        <Machine s1="🍒" s2="🍒" s3="🍒" />
        <Machine s1="🍇" s2="🍒" s3="🍓" />
        <Machine s1="🍒" s2="🍒" s3="🍒" />
        <Machine s1="🍇" s2="🍇" s3="🍇" />
        <Machine s1="🍓" s2="🍓" s3="🍓" />
        <Machine s1="🍇" s2="🍓" s3="🍒" />
      
    </div>
  );
}

export default App;
