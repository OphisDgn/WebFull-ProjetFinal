import React from "react";
import { ButtonComponent } from "my-lib-ui";

const ArrayAdminComponent: React.FC = () => {
  return (
    <section className="panel-admin-container">
        <ButtonComponent label="Vérifier" type="button" linkTo="/login"/>
    </section>
  );
};

export default ArrayAdminComponent;