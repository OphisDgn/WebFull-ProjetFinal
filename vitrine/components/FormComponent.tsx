
import { InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent } from "my-lib-ui";
import React from "react";
import { type } from 'os';

type FormComponentProps = {
  //onSubmit: (value: string) => void;
  formType: "register" | "login";
} 

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { formType } = props;
    return (
      <section className="main_form"> 
      {
        formType =="register" && (
        <div className="form_register">
          <h1 className="form_title">Inscription</h1>
          <label className="form_register_label_radio_title">Je suis :</label>
          <div className="radio_register_position">
            <RadioButtonComponent label="une entreprise" />
            <RadioButtonComponent label="un particulier" />
          </div>
          <div className="form_register_input_position">
            <div className="form_register_row_position">
              <InputTextComponent label="Nom" type="text"/>
              <InputTextComponent label="Prénom" type="text"/>  
            </div>
            <div className="form_register_row_position">
              <InputTextComponent label="E-mail" type="email"/>
              <InputTextComponent label="Numéro de téléphone" type="number"/>
            </div>
            
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
          <CheckboxComponent/>
          <ButtonComponent type={'submit'} label="Demander mon inscription"/>
        </div>
        )
        }
        {
          formType == "login" && (
            <div className="form_login">
              <h1 className="form_title">Connexion</h1>
              <div>
                <InputTextComponent label="identifiant" type="text"/>
                <InputTextComponent label="password" type="password"/>
                <ButtonComponent type={'submit'} label="Connexion"/>
              </div>

            </div>
          )
        }
      </section>
    );
};
  
export default FormComponent;