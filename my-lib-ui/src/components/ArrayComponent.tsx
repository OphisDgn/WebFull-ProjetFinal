import React from "react";
import { IoIosCheckmark, IoMdPaw } from "react-icons/io";


type ArrayProps =  { 
  items?: User[],
  headers?: string[]
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
  const { items, headers } = Props;

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
              <td>Actions :smiley:</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArrayComponent;
