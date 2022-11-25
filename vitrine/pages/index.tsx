
import type { NextPage } from "next";

import FooterComponent from "../components/FooterComponent";
import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";
import ImageHomeComponent from "../components/ImageHomeComponent";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      
      <main>
        <ImageHomeComponent/>
        <FormComponent formType="register"/>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
