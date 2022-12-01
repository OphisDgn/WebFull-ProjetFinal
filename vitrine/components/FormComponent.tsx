import { InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent } from "my-lib-ui";
import React, { useState } from "react";
import MessageComponent from "./MessageComponent";

type FormComponentProps = {
  formType: "register" | "login";
} 

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { formType } = props;
  const [register, setRegister] = useState<number>(0);

  const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegister(1);
  };

  return (
    <section className={formType == "register" ? "main_form main_register" : "main_form main_login"}>
      {formType == "register" && register==0 && (
        <div className="form_register">
          <form onSubmit={(e) => onSubmitRegister(e)}>
            <h1 className="form_title">Inscription</h1>

            <div className="form_register_figma_row">
              <div className="">
                <label className="form_register_label_radio_title">Je suis :</label>
                <div className="radio_register_position">
                  <RadioButtonComponent label="une entreprise" itemId="entreprise" name="whois"/>
                  <RadioButtonComponent label="un particulier" itemId="particulier" name="whois"/>
                </div>
              </div>
            </div>

            <div className="form_register_row_position">
              <InputTextComponent label="Nom" type="text"/>
              <InputTextComponent label="Prénom" type="text"/>  
            </div>
            <div className="form_register_row_position">
              <InputTextComponent label="E-mail" type="email"/>
              <InputTextComponent label="Numéro de téléphone" type="number"/>
            </div>

            <div className="form_register_figma_row">
              <div className="form_register_input_position">
                <SelectComponent label="Nationalité">
                  <option>Veuillez selectionner une nationalité</option>
                  <option>Français</option>
                  <option>Anglais</option>
                  <option>Espagnol</option>
                  <option>Italien</option>
                  <option>Suisse</option>
                  <option>Allemand</option>
                </SelectComponent>
              </div>
            </div>
            <CheckboxComponent/>

            <div className="form_register_figma_row-button">
              <ButtonComponent type={'submit'} label="Demander mon inscription"/>
            </div>
          </form>
        </div>
        )
      }
      {formType == "register" && register==1 && (
        <MessageComponent />
      )}
      {formType == "login" && (
          <div className="form_login">
            <h1 className="form_title">Connexion</h1>
            <div className="form_login_figma_row">
              <InputTextComponent label="Identifiant" type="text"/>
              <InputTextComponent label="Mot de passe" type="password"/>
              <ButtonComponent type={'submit'} label="Connexion"/>
            </div>

          </div>
        )
      }
    </section>
  );
};
  
export default FormComponent;