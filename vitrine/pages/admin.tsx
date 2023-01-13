import type { NextPage } from "next";

import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";
import AdminComponent from "../components/AdminComponent";
import { HeaderComponent, FooterComponent } from "my-lib-ui";


const Admin: NextPage = () => {
  return (
    <div className="container-global-login">
      <HeadComponent />
      <HeaderComponent url="/" btnText="Accueil"/>
      
      <main className="main-admin-container">
        <h3>GESTION BACKOFFICE</h3>
        <AdminComponent/>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Admin;
