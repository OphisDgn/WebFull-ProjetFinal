import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArrayComponent from "./ArrayComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/ArrayComponent",
  component: ArrayComponent,
} as ComponentMeta<typeof ArrayComponent>;

export const ArrayComponentView: ComponentStory<typeof ArrayComponent> = (
  args
) => <ArrayComponent {...args}/>;

const hd = ["Statut", "NOM Prenom", "Coordonnées", "Nationalité", "Action"];
  const it = [
    {
      "id": 1,
      "lastname": "LOOO",
      "firstname": "Koooo",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": false
    },
    {
      "id": 2,
      "lastname": "LOOO",
      "firstname": "SSSSA",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": false
    },
    {
      "id": 3,
      "lastname": "LKKKKKKK",
      "firstname": "JUUUUUU",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": true
    },
    {
      "id": 4,
      "lastname": "LOOO",
      "firstname": "DFDFF",
      "email": "loo.koo@dd.ff",
      "phone": "16513",
      "nationality": "Française",
      "isValided": false
    }
  ];


ArrayComponentView.args = {
    usersItems: it,
    headers: hd,
    typeList: "users"
}
