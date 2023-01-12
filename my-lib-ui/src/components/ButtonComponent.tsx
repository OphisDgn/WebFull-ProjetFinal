import React from "react";

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { 
  label: string,
  type?: "button" | "submit" | "reset",
  linkTo?: string
};

const ButtonComponent: React.FC<Props> = (props) => {
  const { label, type, linkTo } = props;

  return (
    <div className="my-lib-ui-form-field-button">
      {
        (linkTo != null && linkTo != "") ? 
        (<a className="button_submit button_linkto" href={linkTo}>{label}</a>) 
        : 
        (<button className="button_submit" type={type}>{label}</button>)
      }
    </div>
  );
};

export default ButtonComponent;
