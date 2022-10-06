import { Label, Star, Input, Error } from "./UserInfoInput.styled.js";

export const UserInfoInput = ({
  type = "text",
  text = "",
  placeholder = "",
  required = false,
  errorText = "",
  showError = false,
  ...rest
}) => {
  return (
    <Label>
      {text} <Star>*</Star>
      <Input
        type={type}
        placeholder={placeholder}
        required={required}
        errorText={errorText}
        {...rest}
      />
      {errorText && showError && <Error>{errorText}</Error>}
    </Label>
  );
};
