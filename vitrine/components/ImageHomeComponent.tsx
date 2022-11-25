import React from "react";
import Image from "next/image";

const ImageHomeComponent: React.FC = () => {
  return (
    <section className="section-img-text">
        <div className="imgHome"></div>
        <div className="container-description">
            <div className="description">
                <span>▷ Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
                Notre expérience est à votre service pour répondre à toutes vos demandes</span>
            </div>
        </div>
        <div class="separator"></div>
    </section>
  );
};

export default ImageHomeComponent;