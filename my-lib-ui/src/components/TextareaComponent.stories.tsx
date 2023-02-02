import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextareaComponent from "./TextareaComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/TextareaComponent",
  component: TextareaComponent,
} as ComponentMeta<typeof TextareaComponent>;

export const TextareaComponentView: ComponentStory<
  typeof TextareaComponentView
> = (args) => <TextareaComponent {...args} />;

TextareaComponentView.args = {
    placeholder: "Description",
    label: "Description de la tuture",
    name: "description"
};
