import { FC, ReactNode } from "react";
import { StyledButton } from "./Button.styled";

interface ButtonProps {
  text: string | ReactNode;
}

export const Button: FC<ButtonProps> = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};
