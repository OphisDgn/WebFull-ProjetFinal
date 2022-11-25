import React from "react";

const FooterComponent: React.FC = () => {
  return (
    <footer>
        <div className="footer-container-global">
            <ul className="footer-liste">
                <li>
                    <span>Contact</span>
                </li>
                <li>
                    <span>Conditions générales de vente</span>
                </li>
            </ul>
            <div className="footer-copyright">
                <p>©Copyright 2022 RIDE. Tous droits reservés.</p>
            </div>
        </div>
    </footer>
  );
};

export default FooterComponent;