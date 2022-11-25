import type { NextPage } from "next";
import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";

const Login: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <HeadComponent />
      <main>
        <FormComponent formType="login"/>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;
