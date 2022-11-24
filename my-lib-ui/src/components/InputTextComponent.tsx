import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string, type: "password" | "email" | "text" | "number" };

const InputComponent: React.FC<Props> = (props) => {
  const { label, type } = props;
  return (
    <div className="my-lib-ui-form-field">
      <label className="my-lib-ui-label">{label}</label>
      <input type={type} {...props} className="my-lib-ui-input" />
    </div>
  );
};

export default InputComponent;
