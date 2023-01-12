import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderComponent from "./HeaderComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/HeaderComponent",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

export const HeaderComponentView: ComponentStory<typeof HeaderComponent> = (args) => <HeaderComponent {...args}/>;


HeaderComponentView.args = {
  url: "#" 
}