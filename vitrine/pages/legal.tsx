import type { NextPage } from "next";
import FormComponent from "../components/FormComponent";
import HeadComponent from "../components/HeadComponent";
import { HeaderComponent, FooterComponent } from "my-lib-ui";


const Legal: NextPage = () => {
  return (
    <div>
      <HeadComponent />
      <HeaderComponent url="/login" btnText="Connexion"/>
      
      <main className="legal-mention-container">
      <h1>Mention Légales</h1>
    <h3>Identité</h3>
    <br />
    <p>    
      Nom du site web : RIDE<br />
      Adresse du site : https://ride.org
    </p>
    <br />
    <p>
      Propriétaire : RIDE INC.<br />
      Responsable de publication : Corentin  Macé | corentin.mace@ynov.com
    </p>
    <br />

    <h3>Conditions d’utilisation</h3>
    <br />
    <p>    
      L’utilisation du présent site implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ci-après. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment.
      Informations
      <br />
      <br />
      Les informations et documents du site sont présentés à titre indicatif, sans de caractère exhaustif, et ne peuvent engager la responsabilité du propriétaire du site.
      <br />
      <br />
      Le propriétaire du site ne peut être tenu responsable des dommages directs et indirects consécutifs à l’accès au site.
      Interactivité
      <br />
      <br />
      Les utilisateurs du site peuvent y déposer du contenu, apparaissant sur le site dans des espaces dédiés (notamment via les commentaires). Le contenu déposé reste sous la responsabilité de leurs auteurs, qui en assument pleinement l’entière responsabilité juridique.
      <br />
      <br />
      Le propriétaire du site se réserve néanmoins le droit de retirer sans préavis et sans justification tout contenu déposé par les utilisateurs qui ne satisferait pas à la charte déontologique du site ou à la législation en vigueur.
      Propriété intellectuelle
      <br />
      <br />
      Sauf mention contraire, tous les éléments accessibles sur le site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) restent la propriété exclusive de leurs auteurs, en ce qui concerne les droits de propriété intellectuelle ou les droits d’usage. 1
      <br />
      <br />
      Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l’auteur.23
      <br />
      <br />
      Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient est considérée comme constitutive d’une contrefaçon et passible de poursuites. 4
      <br />
      <br />
      Les marques et logos reproduits sur le site sont déposés par les sociétés qui en sont propriétaires.
      Liens
      <br />
      <br />
      Liens sortants
      Le propriétaire du site décline toute responsabilité et n’est pas engagé par le référencement via des liens hypertextes, de ressources tierces présentes sur le réseau Internet, tant en ce qui concerne leur contenu que leur pertinence.
      <br />
      <br />
      Liens entrants
      Le propriétaire du site autorise les liens hypertextes vers l’une des pages de ce site, à condition que ceux-ci ouvrent une nouvelle fenêtre et soient présentés de manière non équivoque afin d’éviter :      <br />
          tout risque de confusion entre le site citant et le propriétaire du site
          ainsi que toute présentation tendancieuse, ou contraire aux lois en vigueur.
      <br />
      <br />
      Le propriétaire du site se réserve le droit de demander la suppression d’un lien s’il estime que le site source ne respecte pas les règles ainsi définies.
      Confidentialité
      <br />
      <br />
      Tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une preuve d’identité. 5678
      <br />
      <br />
      Le site ne recueille pas d’informations personnelles, et n’est pas assujetti à déclaration à la CNIL. 9 (Remplacé par les disposition de la RGPD)
      <br />
      <br />
          Politique de confidentialité : se référer à la page Politique de Confidentialité
          Politique de cookies : se référer à la page Politique des Cookies
      <br />
      <br />
    </p>
    <br />

    <h3>Crédits</h3>
    <br />
    <p>    
      Articles L111-1 et suivants du Code de la Propriété Intellectuelle du 1er juillet 1992 ↩    <br />
      Article 41 de la loi du 11 mars 1957 ↩    <br />
      Article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995 ↩    <br />
      Articles L.335-2 et suivants du Code de Propriété Intellectuelle ↩    <br />
      Loi n° 78-87 du 6 janvier 1978, modifiée par la loi n° 2004-801 du 6 août 2004, relative à l’informatique, aux fichiers et aux libertés ↩    <br />
      Articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés ↩    <br />
      Loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données ↩    <br />
      Loi n° 2004-801 du 6 août 2004 ↩    <br />
      Article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique ↩    <br />
    </p>
      </main>

      <FooterComponent />
    </div>
  );
};

export default Legal;
