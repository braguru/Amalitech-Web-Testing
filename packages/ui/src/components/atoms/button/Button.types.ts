import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor: string;
  size?: "sm" | "md" | "lg";

}