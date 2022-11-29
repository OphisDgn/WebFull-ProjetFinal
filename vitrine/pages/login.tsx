import type { NextPage } from "next";
import { useRouter } from "next/router";
import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";
import { HeaderComponent, FooterComponent } from 'my-lib-ui';

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div className="container-global-login">
      <HeadComponent />
      <HeaderComponent url="/login"/>
      <main >
        <a href="/"><h1 className="retour_link">Retour</h1></a>
        <FormComponent formType="login"/>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
