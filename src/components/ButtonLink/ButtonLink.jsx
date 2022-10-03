import { LinkStyled } from "./ButtonLink.styled.js";

export const ButtonLink = ({
  text = "Click me",
  width = "100%",
  height = "60px",
  color, //'accent', 'grey' or default
  textSize = "medium", //'medium' (14px, default) or 'big' (16px)
  shadow = true,
  ...rest
}) => {
  return (
    <LinkStyled
      width={width}
      height={height}
      color={color}
      textsize={textSize}
      shadow={shadow ? "true" : "false"}
      {...rest}
    >
      {text}
    </LinkStyled>
  );
};
