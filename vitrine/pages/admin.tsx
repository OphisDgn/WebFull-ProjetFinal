import type { NextPage } from "next";

import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";
import ArrayAdminComponent from "../components/ArrayAdminComponent";
import { HeaderComponent, FooterComponent } from "my-lib-ui";


const Admin: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent url="/" btnText="Accueil"/>
      
      <main>
        <h3>GESTION BACKOFFICE</h3>
        <ArrayAdminComponent/>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Admin;
