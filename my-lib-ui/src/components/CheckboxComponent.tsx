import { type } from "os";
import React from "react";

const CheckboxComponent: React.FC = () => {
  return (
  <div className="checkboxButton-container">
    <input type="checkbox" name="agreePermis" className="my-lib-ui-input checkboxButton-input" required/>
    <label>J'atteste que je possède un permis de conduire valide.</label>
  </div>
  );
};


export default CheckboxComponent;