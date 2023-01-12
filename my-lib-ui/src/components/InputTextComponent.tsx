import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string, type: "password" | "email" | "text" | "number", name: string };

const InputComponent: React.FC<Props> = (props) => {
  const { label, type, name } = props;
  return (
    <div className="my-lib-ui-form-field">
      <label className="my-lib-ui-label">{label}</label>
      <input type={type} {...props} className="my-lib-ui-input" name={name} required/>
    </div>
  );
};

export default InputComponent;
