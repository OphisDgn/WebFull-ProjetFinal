import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label: string, type: "password" | "email" | "text" | "number" };

const RadioButtonComponent: React.FC<any> = (props) => {
  const { label, type } = props;
  console.log("i'm here 22");
  return (
    <div className="my-lib-ui-form-field">
      <label className="my-lib-ui-label">{label}</label>
      <input type={type} {...props} className="my-lib-ui-input" />
    </div>
  );
};

export default RadioButtonComponent;
