import React from "react";


type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { 
  label: string,
  type: string
};

const ButtonComponent: React.FC<Props> = (props) => {
  const { label, type } = props;


  return (
    <div className="my-lib-ui-form-field">
      <button type={type}>{label}</button>
    </div>
  );
};

export default ButtonComponent;
