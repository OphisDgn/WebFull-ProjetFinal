import React from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement> &
  { label: string };
const RadioButtonComponent: React.FC<Props> = (props) => {
  const {label} = props;
  return (
    <div>
      <input type="radio" required/>
      <label>{label}</label>
    </div>
  );
};
export default RadioButtonComponent;
