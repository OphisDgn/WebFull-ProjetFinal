import { HeaderComponent, FooterComponent } from "my-lib-ui";
import type { NextPage } from "next";

import HeadComponent from "../components/HeadComponent";
import ImageHomeComponent from "../components/ImageHomeComponent";
import FormComponent from "../components/FormComponent";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent url="/login"/>
      
      <main>
        <ImageHomeComponent/>
        <FormComponent formType="register"/>
      </main>

      
      <FooterComponent />
    </div>
  );
};

export default Home;
