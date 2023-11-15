import React, { useState } from 'react';
import "./TP2.css";
export default function TP2() {
  const initialData = [
    { nom: 'ayman', age: 19, ville: 'casablanca' },
    { nom: 'mehdi', age: 22, ville: 'casablanca' },
    { nom: 'amine', age: 21, ville: 'casablanca' }

  ];

  const [values, setValues] = useState({ message: initialData });
  const [values2, setValues2] = useState({ nom: '', age: '', ville: '' });

  const function_dajouter = () => {
    setValues({ message: [...values.message, values2] });
    setValues2({ nom: '', age: '', ville: '' });
  };

    function newLocal(index) {
        const newValues = [...values.message];
        newValues.splice(index, 1);
        setValues({ message: newValues });
    }
  
  return (
    <div>
      <h2>Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Age</th>
            <th>Ville</th>
          </tr>
        </thead>
        <tbody>
          {values.message.map((value, index) => (
            <tr key={index}>
              <td>{value.nom}</td>
              <td>{value.age}</td>
              <td>{value.ville}</td>
              <button onClick={() => newLocal(index)}>Supprimer</button>

            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <input type="text" value={values2.nom} onChange={(e) => setValues2({ ...values2, nom: e.target.value })} /><br />
        <input type="text" value={values2.age} onChange={(e) => setValues2({ ...values2, age: e.target.value })} /><br />
        <input type="text" value={values2.ville} onChange={(e) => setValues2({ ...values2, ville: e.target.value })} /><br />
        <button onClick={function_dajouter}>Ajouter</button>
      </div>
    </div>
  );
}
