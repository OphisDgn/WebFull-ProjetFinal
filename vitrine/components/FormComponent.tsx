
import { InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent } from "my-lib-ui";
import React from "react";

type FormComponentProps = {
  //onSubmit: (value: string) => void;
  formType: "register" | "login";
} 

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { formType } = props;
    return (
      <section className="main_form"> 

        <div className="form_register">
          <h1 className="form_register_title">Inscription</h1>
          <label className="form_register_label_radio_title">Je suis :</label>
          <div className="radio_register_position">
            <RadioButtonComponent label="une entreprise" />
              {/* <RadioButtonComponent label="une entreprise" /> */}
              {/* <RadioButtonComponent label="un particulier" /> */}
          </div>
          <div className="form_register_input_position">
             <InputTextComponent label="Nom" type="text"/>
            <InputTextComponent label="Prénom" type="text"/>
            <InputTextComponent label="E-mail" type="email"/>
            <InputTextComponent label="Numéro de téléphone" type="number"/>
            {/* <SelectComponent label="Nationalité" />  */}
          </div>
          {/* <CheckboxComponent/> */}
          {/* <ButtonComponent type={'submit'} label="Demander mon inscription"/> */}
        </div>

      </section>
    );
};
  
export default FormComponent;