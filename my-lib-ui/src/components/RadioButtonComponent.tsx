import React from "react";
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement> &
  { label: string, itemId: string };
const RadioButtonComponent: React.FC<Props> = (props) => {
  const { label, itemId } = props;
  return (
    <div className="radioButton-container">
      <input type="radio" required itemID={itemId} className="radioButton-input"/>
      <label htmlFor={itemId}>{label}</label>
    </div>
  );
};
export default RadioButtonComponent;
