import React from "react";

type HeaderComponentProps = {
  url: string,
  btnText: string
}

const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const { url, btnText } = props;

  return (
    <header>
      <div className="container-header">
        <div className="container-logo-name">
          <div className="container-logo">
            <img src="/images/Logo.png"/>
          </div>
          <div className="container-name">
            <span>RIDE</span>
          </div>
        </div>
        <div className="container-connexion">
          <a href={url} className="btn-connexion">{btnText}</a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;