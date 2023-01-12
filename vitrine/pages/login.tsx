import type { NextPage } from "next";
import { useRouter } from "next/router";
import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HeaderComponent, FooterComponent } from 'my-lib-ui';
import axios from 'axios';


const Login: NextPage = () => {
  const router = useRouter();
  axios.get('http://localhost:8000/api/')
  .then((response) => {
    console.log(response)
  })

  return (
    <div className="container-global-login">
      <HeadComponent />
      <HeaderComponent url="/login"/>
      <main >
        <div className="login_return-container">
          <a href="/"><h1 className="retour_link"><IoIosArrowRoundBack /> Retour</h1></a>
        </div>
        
        <FormComponent formType="login"/>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
