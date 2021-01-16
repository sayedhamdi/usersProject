Houni talkaw el code mtaa el form :





########################################"
import React from "react";
import "./styles.css";

export default function App() {
  const [values, setValues] = React.useState({});
  function handleValuesChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <div className="App">
      Input nom
      <br />
      <input 
      type="text"
      name="nom"
      value={values.nom}
      onChange={handleValuesChange} />
      <h1>Name: {values.nom}</h1>
      Input prenom
      <br />
      <input
        type="password"
        value={values.prenom}
        name="prenom"
        onChange={handleValuesChange}
      />
      
      <h1>Name: {values.prenom}</h1>
      Input prenom
      <h1>Age {values.age}</h1>
      <input
        type="text"
        value={values.age}
        name="age"
        onChange={handleValuesChange}
      />
      
      
    </div>
  );
}

