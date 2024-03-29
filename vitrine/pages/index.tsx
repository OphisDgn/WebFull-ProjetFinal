
import type { NextPage } from "next";

import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";
import ImageHomeComponent from "../components/ImageHomeComponent";
import { HeaderComponent, FooterComponent } from "my-lib-ui";


const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent url="/login" btnText="Connexion"/>
      
      <main>
        <ImageHomeComponent/>
        <FormComponent formType="register"/>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Home;
