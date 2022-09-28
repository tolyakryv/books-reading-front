import { ButtonStyled } from "./IconButton.styled.js";

export const IconButton = ({ icon, text }) => {
  return (
    <ButtonStyled type="button">
      {icon}
      {text}
    </ButtonStyled>
  );
};
