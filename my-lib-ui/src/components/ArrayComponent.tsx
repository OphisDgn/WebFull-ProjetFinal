import React from "react";
import { IoIosCheckmark, IoMdPaw } from "react-icons/io";
import ButtonComponent from "./ButtonComponent";

type Cars = {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
  model: string,
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

type ArrayProps =  { 
  usersItems?: User[],
  headers?: string[],
  validateMethod?: any,
  typeList: string,
  carsItems?: Cars[],
  onDeleted?: any
};


const ArrayComponent: React.FC<ArrayProps> = (Props) => {
  const { usersItems, headers, validateMethod, typeList, carsItems, onDeleted } = Props;

  return (
    <div>
      <table className="array-component" cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            {headers != null && headers.map((header, index) => (
              <th key={index} className={header == "Action" && typeList=="cars" ? "container-buttons-actions" : ""}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>

          {typeList=="users" && usersItems != null && usersItems.map(item => (
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
          {typeList=="cars" && carsItems != null && carsItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>{item.price} €</td>
              <td>{item.description}</td>
              <td className="container-buttons-actions">
                <div className="my-lib-ui-form-field-button">
                  <button type="button" className="button_submit" onClick={() => onDeleted(item.id)}>Supprimer</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrayComponent;
