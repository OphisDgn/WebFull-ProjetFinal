import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FooterComponent from "./FooterComponent";

import "../index.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/FooterComponent",
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>;

export const FooterComponentView: ComponentStory<typeof FooterComponent> = () => <FooterComponent />;
