import { Blockquote, Cite } from "./Quote.styled.js";

export const Quote = ({ text, author }) => {
  return (
    <>
      <Blockquote>{text}</Blockquote>
      <Cite>{author}</Cite>
    </>
  );
};
