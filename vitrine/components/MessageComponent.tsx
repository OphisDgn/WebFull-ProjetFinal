import React from "react";

const MessageComponent: React.FC = () => {
  return (
    <section className="section-message-confirmation">
      <div className="msg-container-message">
        <span>
          Votre demande d’inscription a bien été prise en compte. 
          Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.
        </span>
      </div>
      <div className="msg-container-download">
        <img src="/images/AppStore.png" alt="App store"/>
        <img src="/images/GooglePlay.png" alt="Google play"/>
      </div>
    </section>
  );
};

export default MessageComponent;