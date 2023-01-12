import React from "react";

type Props = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { 
  label: string, 
  name: string
};

const SelectComponent: React.FC<Props> = (props) => {
  const { label, name } = props;
  return (
    <div className="my-lib-ui-form-select-field">
      <label className="my-lib-ui-label">{label}</label>
      <select className="my-lib-ui-select" required name={name}>
        {props.children}
      </select>
    </div>
  );
};

export default SelectComponent;
