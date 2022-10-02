import styled from "styled-components";

export const ListTitle = styled.p`
  margin-bottom: 14px;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;

  color: #242a37;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;
