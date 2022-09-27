import { ButtonStyled } from "./Button.styled.js";

export const Button = ({
  text = "Click me",
  type = "button",
  width = "100%",
  height = "60px",
  color, //'accent', 'grey' or default
  textSize = "medium", //'medium' (14px, default) or 'big' (16px)
  shadow = true,
  ...rest
}) => {
  return (
    <ButtonStyled
      type={type}
      width={width}
      height={height}
      color={color}
      textSize={textSize}
      shadow={shadow}
      {...rest}
    >
      {text}
    </ButtonStyled>
  );
};
