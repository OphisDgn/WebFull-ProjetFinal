import React, { useState } from "react";

import axios from "axios";
import { ArrayComponent } from "my-lib-ui";
import { type } from "os";

const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  let form = e.currentTarget
  if(!form) return;
  let userID = form["userID"].value
  let token = localStorage.getItem('token')

  axios.post('http://localhost:8000/api/inscription/valide-user/' + userID , "",  {
    headers: {
      'Authorization': `Bearer ${token}`
    }})
  .then((onfulfilled) => {
    console.log(onfulfilled.data)
    // window.location.reload()
  })
  .catch((onrejected) => {
    console.log(onrejected)
  })
};

const AdminComponent: React.FC = () => {
  const hd = ["Statut", "NOM Prenom", "Coordonnées", "Nationalité", "Action"];
  const [item, setItem] = useState<[]>([]);
  const [loading, setLoading] = useState<number>(1);


  const requestList = (token: any) => {
    axios.get('http://localhost:8000/api/backoffice', {
     headers: 
     {
       'Authorization': `Bearer ${token}`
     }
    })
    .then((response) => {
         console.log(response.data)
         setItem(response.data.future_users);
         setLoading(0)
   })
   .catch((error) => { 
     console.log(error)
   })
  }

  if (typeof window !== 'undefined') {
    requestList(localStorage.getItem('token'))
  } 

  return (
    <section className="panel-admin-container">
      {loading==0 && (
        <ArrayComponent items={item} headers={hd} validateMethod={onSubmitRegister} />
      )}
      {loading==1 && (
        <div className="form_register_figma_centered">
          <div className="loading-icon"></div>
        </div>
      )}
    </section>
  );
};

export default AdminComponent;