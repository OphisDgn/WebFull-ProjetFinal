import React, { useState } from "react";

import axios from "axios";
import { ArrayComponent } from "my-lib-ui";
import { type } from "os";

const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {

};

const UserAdminComponent: React.FC = () => {
  const hd = ["Marque", "Modèle", "Actions"];
  const [item, setItem] = useState<[]>([]);
  const [loading, setLoading] = useState<number>(1);


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

export default UserAdminComponent;