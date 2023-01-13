import React, { useState } from "react";

import axios from "axios";
import { ArrayComponent } from "my-lib-ui";

const AdminComponent: React.FC = () => {
  const hd = ["Statut", "NOM Prenom", "Coordonnées", "Nationalité", "Action"];
  const [item, setItem] = useState<[]>([]);

 
  const token =  typeof window !== 'undefined' ?  localStorage.getItem('token') :null;

 axios.get('http://localhost:8000/api/future-users', 
 {
     headers: {
                'Authorization': `Bearer ${token}`
              }
 }
 ).then((response) => {
      setItem(response.data);

      
    });
  return (
    <section className="panel-admin-container">
        <ArrayComponent items={item} headers={hd}/>
    </section>
  );
};

export default AdminComponent;