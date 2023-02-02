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
                    <a href="/legal">Mention légales</a>
                </li>
            </ul>
            <div className="footer-copyright">
                <p>©Copyright 2023 RIDE. Tous droits reservés.</p>
            </div>
        </div>
    </footer>
  );
};

export default FooterComponent;