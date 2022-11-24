import { type } from "os";
import React from "react";

const CheckboxComponent: React.FC = () => {
  return (
  <div>
    <input type="checkbox" name="j'atteste que je possède un permis de conduire valide" className="my-lib-ui-input" />
    <label>J'atteste que je possède un permis de conduire valide</label>
  </div>
  );
};


export default CheckboxComponent;