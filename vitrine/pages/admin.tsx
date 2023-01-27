import type { NextPage } from "next";

import FormComponent from "../components/FormComponent";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HeadComponent from "../components/HeadComponent";
import UserAdminComponent from "../components/UserAdminComponent";
import { HeaderComponent, FooterComponent } from "my-lib-ui";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarsAdminComponent from "../components/CarsAdminComponent";

const Admin: NextPage = () => {
  return (
    <div className="container-global-login">
      <HeadComponent />
      <HeaderComponent url="/" btnText="Accueil"/>
      
      <main className="main-admin-container">
       <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Liste des utilisateur inscrits">
        <UserAdminComponent />
      </Tab>
      <Tab eventKey="profile" title="Liste des véhicules">
        <CarsAdminComponent/>
      </Tab>
    </Tabs>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Admin;
