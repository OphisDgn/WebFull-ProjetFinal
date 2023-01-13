import { InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent } from "my-lib-ui";
import React, { useState } from "react";
import MessageComponent from "./MessageComponent";
import axios from 'axios';

type FormComponentProps = {
  formType: "register" | "login";
  loading: 0 | 1;
  showError: 0 | 1;
  errorMsg: string;
} 

const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { formType } = props;
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [register, setRegister] = useState<number>(0);
  const [loading, setLoading] = useState<number>(0);
  const [showError, setShowError] = useState<number>(0);

  const errorHandler = (error: any) => {
    setShowError(1)
    setErrorMsg(error)
    setTimeout(() => {
      setShowError(0)
    }, 5000);
  }

  const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errorCodes = [401, 403, 404, 500, 502, 503, 504]
    let formInputs = document.querySelectorAll('input');
    if(!formInputs) return;
    
    if(formType == "register") {
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
          console.log(onrejected.response.data);
        });
        
      }
    } else if (formType == "login") {
      let token = ''
      setLoading(1)
      let formInputs = document.querySelectorAll('input');
      const userData: Object = {
        username: formInputs[0].value,
        password: formInputs[1].value,
      }
      axios.post('http://localhost:8000/api/.user/login_check', userData)
      .then((onfulfilled) => {
        console.log(onfulfilled.data.token);
        if(errorCodes.includes(onfulfilled.data.code)) {
          setLoading(0)
          errorHandler(onfulfilled.data.message)
        } else {
          token = onfulfilled.data.token;
          axios.get('http://localhost:8000/api/.user/user', {
              headers: {
                'Authorization': `Bearer ${onfulfilled.data.token}`
              }
          })
          .then((onfulfilled) => {
            console.log(onfulfilled.data);
            if(errorCodes.includes(onfulfilled.data.code)) {
              setLoading(0)
              errorHandler(onfulfilled.data.message)
            } else {
              setLoading(0)
              if(onfulfilled.data.roles[0].includes("ROLE_ADMIN")) {
                window.location.href = '/admin';
                // STOCKER LE TOKEN DANS LE LOCALSTORE :
                localStorage.setItem('token', token);

              } else {
                errorHandler("Vous ne pouvez pas vous connecter avec ce compte : NOT ADMIN")
                setTimeout(() => {
                  window.location.href = '/';
                }, 2000);
              }
            }
          })
          .catch((onrejected) => {
            console.log(onrejected.response.data);
          })
        }
      })
      .catch((onrejected) => {
        setLoading(0)
        errorHandler(onrejected.response.message)
        console.log(onrejected.response.data);
      })
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
            <form onSubmit={(e) => onSubmitRegister(e)}>
              <h1 className="form_title">Connexion</h1>
              <div className="form_login_figma_row">
                <InputTextComponent label="Identifiant" type="text" name="username"/>
                <InputTextComponent label="Mot de passe" type="password" name="password"/>
                {showError==1 && (
                  <p className="form_login_error">{ errorMsg }</p>
                )}
                {loading==0 && (
                  <ButtonComponent type={'submit'} label="Connexion"/>
                )}
                {loading==1 && (
                <div className="form_register_figma_centered">
                  <div className="loading-icon"></div>
                </div>
                )}

              </div>
            </form>

          </div>
        )
      }
    </section>
  );
};
  
export default FormComponent;