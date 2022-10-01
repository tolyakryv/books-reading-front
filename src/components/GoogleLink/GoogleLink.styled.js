import styled from "styled-components";

const duration = "250ms";
const cubic = "cubic-bezier(0.4, 0, 0.2, 1)";

export const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  column-gap: 16px;

  width: 100%;
  height: 40px;
  max-width: 150px;

  padding: 11px 14px;
  margin: auto;

  margin-bottom: 28px;

  font-weight: 700;
  font-size: 16px;
  line-height: 2.38;
  color: #707375;

  text-decoration: none;
  border: none;
  background-color: #f5f7fa;
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);

  &:hover,
  &:focus {
    text-decoration: none;
    color: #707375;
    background-color: #edeff2;
  }

  transition: background-color ${duration} ${cubic};
`;
