import { InputTextComponent } from "my-lib-ui";
import type { NextPage } from "next";

import FooterComponent from "../components/FooterComponent";
import HeadComponent from "../components/HeadComponent";
import HeaderComponent from "../components/HeaderComponent";

const Home: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent />
      <InputTextComponent label="Email" placeholder="Votre email" />
      <main></main>
      <FooterComponent />
    </div>
  );
};

export default Home;
