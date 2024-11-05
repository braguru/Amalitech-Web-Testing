import React from "react";
import {HeadlineProps} from "./Headline.types";

export const DynamicHeading:  React.FC<Partial<HeadlineProps>> = ({ level, children, ...props }) => {
  const HeadingTag = `h${level}`;

  return React.createElement(HeadingTag, props, children);
};