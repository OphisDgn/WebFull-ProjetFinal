import React, { useState } from "react";

import axios from "axios";
import { ArrayComponent } from "my-lib-ui";
import { type } from "os";

const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
  let token = localStorage.getItem('token');

};

const UserAdminComponent: React.FC = () => {
  const hd = ["Marque", "Prix", "Actions"];
  const [item, setItem] = useState<[]>([]);
  const [loading, setLoading] = useState<number>(1);

   const requestList = (token: any) => {
    axios.get('http://localhost:8000/cars', {
     headers: 
     {
       'Authorization': `Bearer ${token}`
     }
    })
    .then((response) => {
         console.log(response.data);
         setItem(response.data.cars);
         setLoading(0)
   })
   .catch((error) => { 
     console.log(error);  
   })
  }

  if (typeof window !== 'undefined' && loading == 1) {
    requestList(localStorage.getItem('token'))
  } 


  return (
    <section className="panel-admin-container">
      {loading==0 && (
        <ArrayComponent carsItems={item} headers={hd} validateMethod={onSubmitRegister} typeList={"cars"}/>
      )}
      {loading==1 && (
        <div className="form_register_figma_centered">
          <div className="loading-icon"></div>
        </div>
      )}
    </section>
  );
};

export default UserAdminComponent;