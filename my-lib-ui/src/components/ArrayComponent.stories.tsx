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

ArrayComponentView.args = {
    
}
