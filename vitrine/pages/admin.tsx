import type { NextPage } from "next";

import FormComponent from "../components/FormComponent";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HeadComponent from "../components/HeadComponent";
import CarsAdminComponent from "../components/CarsAdminComponent";
import UserAdminComponent from "../components/UserAdminComponent";
import { HeaderComponent, FooterComponent } from "my-lib-ui";

import 'bootstrap/dist/css/bootstrap.min.css';

const Admin: NextPage = () => {
  return (
    <div className="container-global-login">
      <HeadComponent />
      <HeaderComponent url="/" btnText="Retour accueil"/>
      
      <main className="main-admin-container">
        <h3>GESTION BACKOFFICE</h3>
        <Tabs
          defaultActiveKey="users"
          transition={false}
          id="admin-list"
          className="mb-3"
        >
          <Tab eventKey="users" title="Liste des utilisateurs inscrits">
            <UserAdminComponent />
          </Tab>
          <Tab eventKey="cars" title="Liste des véhicules">
            <CarsAdminComponent/>
          </Tab>
        </Tabs>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Admin;
