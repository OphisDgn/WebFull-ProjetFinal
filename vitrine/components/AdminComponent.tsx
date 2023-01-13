import React from "react";
import { ArrayComponent } from "my-lib-ui";

const AdminComponent: React.FC = () => {
  const hd = ["Statut", "NOM Prenom", "Coordonnées", "Nationalité", "Action"];
  const it = [
    {
      "id": 1,
      "lastname": "LOOO",
      "firstname": "Koooo",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": false
    },
    {
      "id": 2,
      "lastname": "LOOO",
      "firstname": "SSSSA",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": false
    },
    {
      "id": 3,
      "lastname": "LKKKKKKK",
      "firstname": "JUUUUUU",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": true
    },
    {
      "id": 4,
      "lastname": "LOOO",
      "firstname": "DFDFF",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": false
    }
  ];

  return (
    <section className="panel-admin-container">
        <ArrayComponent items={it} headers={hd}/>
    </section>
  );
};

export default AdminComponent;