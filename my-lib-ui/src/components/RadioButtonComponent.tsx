import React from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement> &
  { label: string, itemId: string, name: string };
const RadioButtonComponent: React.FC<Props> = (props) => {
  const { label, itemId, name } = props;
  return (
    <div className="radioButton-container">
      <input type="radio" required itemID={itemId} className="radioButton-input" name={name}/>
      <label htmlFor={itemId}>{label}</label>
    </div>
  );
};
export default RadioButtonComponent;
