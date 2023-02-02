import React, { useState, useEffect } from "react";

import axios from "axios";
import { ArrayComponent } from "my-lib-ui";
import { type } from "os";


const UserAdminComponent: React.FC = () => {
  const hd = ["Statut", "NOM Prenom", "Coordonnées", "Nationalité", "Action"];
  const [item, setItem] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tokenUser, setTokenUser] = useState(null)


  const requestList = () => {
    axios.get('http://localhost:8000/api/backoffice', {
     headers: 
     {
       'Authorization': `Bearer ${tokenUser}`
     }
    })
    .then((response) => {
      console.log(response.data)
      setItem(response.data.future_users);
      setLoading(false)
   })
   .catch((error) => { 
     console.log(error)
   })
  };

  const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault()
    let form = e.currentTarget
    if(!form) return;
    let userID = form["userID"].value
  
    axios.post('http://localhost:8000/api/inscription/valide-user/' + userID , "",  {
      headers: {
        'Authorization': `Bearer ${tokenUser}`
      }})
    .then((onfulfilled) => {
      requestList();
    })
    .catch((onrejected) => {
      console.log(onrejected)
    })
  };

  useEffect(() => {
    setTokenUser(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    if(tokenUser){
      requestList()
    }
  }, [tokenUser]);

  return (
    <section className="panel-admin-container">
      {!loading && (
        <ArrayComponent usersItems={item} headers={hd} validateMethod={onSubmitRegister} typeList={"users"} />
      )}
      {loading && (
        <div className="form_register_figma_centered">
          <div className="loading-icon"></div>
        </div>
      )}
    </section>
  );
};

export default UserAdminComponent;