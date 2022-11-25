import React from "react";
import Image from "next/image";

const HeaderComponent: React.FC = () => {
  return (
    <header>
      <div className="container-header">
        <div className="container-logo-name">
          <div className="container-logo">
            <Image src="/favicon.ico" alt="logo" width="50" height="50"/>
          </div>
          <div className="container-name">
            <span>RIDE</span>
          </div>
        </div>
        <div className="container-connexion">
          <button className="btn-connexion">Connexion</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;