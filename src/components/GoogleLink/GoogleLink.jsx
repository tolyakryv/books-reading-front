import { LinkStyled } from "./GoogleLink.styled";

export const GoogleLink = ({ icon, text, link, ...rest }) => {
  return (
    <LinkStyled href={link} {...rest}>
      {icon}
      {text}
    </LinkStyled>
  );
};
