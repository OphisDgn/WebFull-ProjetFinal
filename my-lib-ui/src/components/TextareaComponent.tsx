import React from "react";

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { 
    label: string,
    name: string 
};

const TextareaComponent: React.FC<Props> = (props) => {
  const { label, name } = props;
  return (
    <div className="my-lib-ui-form-field">
      <label className="my-lib-ui-label">{label}</label>
      <textarea className="my-lib-ui-textarea" name={name} required></textarea>
    </div>
  );
};

export default TextareaComponent;
