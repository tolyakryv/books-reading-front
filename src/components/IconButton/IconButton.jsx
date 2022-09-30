import { ButtonStyled } from "./IconButton.styled.js";

export const IconButton = ({ icon, text, ...rest }) => {
  return (
    <ButtonStyled type="button" {...rest}>
      {icon}
      {text}
    </ButtonStyled>
  );
};
