import styled from "styled-components";

export const ButtonStyled = styled.a`
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

  border: none;
  background-color: var(--color-background);
  box-shadow: 0px 2px 2px rgba(9, 30, 63, 0.15);

  &:hover,
  &:focus {
    background-color: #edeff2;
  }

  transition: background-color var(--duration) var(--cubic);
`;
