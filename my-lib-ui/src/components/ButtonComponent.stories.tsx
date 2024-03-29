import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonComponent from "./ButtonComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/ButtonComponent",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

export const ButtonComponentView: ComponentStory<typeof ButtonComponent> = (
  args
) => <ButtonComponent {...args}/>;

ButtonComponentView.args = {
  label: "Demander mon inscription",
  type: "submit"
}
