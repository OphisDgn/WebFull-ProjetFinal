import Head from "next/head";

const HeadComponent: React.FC = () => {
  return (
    <Head>
      <title>RIDE</title>
      <meta name="description" content="Location de voiture de luxe" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
