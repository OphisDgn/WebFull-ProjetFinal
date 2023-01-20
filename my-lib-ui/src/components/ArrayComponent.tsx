import React from "react";
import { IoIosCheckmark, IoMdPaw } from "react-icons/io";
import ButtonComponent from "./ButtonComponent";

type ArrayProps =  { 
  items?: User[],
  headers?: string[]
  validateMethod?: any
};

type User = {
  id: number,
  lastname: string,
  firstname: string,
  email: string,
  phone: string,
  nationality: string,
  isValided: boolean
};

const ArrayComponent: React.FC<ArrayProps> = (Props) => {
  const { items, headers, validateMethod } = Props;

  return (
    <div>
      <table className="array-component" cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            {headers != null && headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items != null && items.map(item => (
            <tr key={item.id}>
              <td>{item.isValided ? (<span itemID="isCheck"><IoIosCheckmark/> Validé</span>) : (<span itemID="isNotCheck"><IoMdPaw/> En attente</span>)}</td>
              <td>{item.lastname} {item.firstname}</td>
              <td>
                {item.email} <br/>
                {item.phone}
              </td>
              <td>{item.nationality}</td>
              <td>
                <form onSubmit={(e) => validateMethod(e)}>
                  <input type="hidden" name="userID" value={item.id} />
                  {item.isValided && (
                  <ButtonComponent type={'submit'} customClass="edit-button" label="Editer"/>
                  )}
                  {!item.isValided && (
                  <ButtonComponent type={'submit'} label="Valider"/>
                  )}
                </form>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrayComponent;
