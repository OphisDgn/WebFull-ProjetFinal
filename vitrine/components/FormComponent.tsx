import { InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent } from "my-lib-ui";
import React, { useState } from "react";
import MessageComponent from "./MessageComponent";
import axios from 'axios';

type FormComponentProps = {
  formType: "register" | "login";
  loading: 0 | 1;
} 

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { formType } = props;
  const [register, setRegister] = useState<number>(0);
  const [loading, setLoading] = useState<number>(0);

  const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formInputs = document.querySelectorAll('input');
    let formSelect = document.querySelector('select'); 
    if (!formSelect) return;
    const userData: Object = {
      email: formInputs[4].value,
      phone: formInputs[5].value,
      nationality: formSelect.value,
      lastname: formInputs[2].value,
      firstname: formInputs[3].value,
    }
    console.log(userData)
    if(userData) {
      setLoading(1)
      axios.post('http://localhost:8000/api/inscription', userData)
      .then((onfulfilled) => {
        console.log(onfulfilled.data);
        setRegister(1);
      })
      .catch((onrejected) => {
        setRegister(0);
        console.log(onrejected.response.data)
      });
      
    }
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
              <InputTextComponent label="Nom" type="text" name="nom"/>
              <InputTextComponent label="Prénom" type="text" name="prenom "/>  
            </div>
            <div className="form_register_row_position">
              <InputTextComponent label="E-mail" type="email" name="email" />
              <InputTextComponent label="Numéro de téléphone" type="number" name="telephone" />
            </div>

            <div className="form_register_figma_row">
              <div className="form_register_input_position">
                <SelectComponent label="Nationalité" name="nationalitee">
                  <option>Veuillez selectionner une nationalité</option>
                  <option value="Français">Français</option>
                  <option value="Anglais">Anglais</option>
                  <option value="Espagnol">Espagnol</option>
                  <option value="Italien">Italien</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Allemand">Allemand</option>
                </SelectComponent>
              </div>
            </div>
            <CheckboxComponent/>
            {loading==0 && (
            <div className="form_register_figma_row-button">
              <ButtonComponent type={'submit'} label="Demander mon inscription"/>
            </div>
            )}
            {loading==1 && (
            <div className="form_register_figma_centered">
              <div className="loading-icon"></div>
            </div>
            )}
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
              <InputTextComponent label="Identifiant" type="text" name="username"/>
              <InputTextComponent label="Mot de passe" type="password" name="password"/>
              <ButtonComponent type={'submit'} label="Connexion"/>
            </div>

          </div>
        )
      }
    </section>
  );
};
  
export default FormComponent;