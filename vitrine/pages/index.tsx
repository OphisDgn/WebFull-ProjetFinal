import { InputTextComponent } from "my-lib-ui";
import type { NextPage } from "next";

import FooterComponent from "../components/FooterComponent";
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
      </main>
      <FooterComponent />
    </div>
  );
};

export default Home;
