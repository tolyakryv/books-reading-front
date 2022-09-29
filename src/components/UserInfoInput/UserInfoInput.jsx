import { Label, Star, Input } from "./UserInfoInput.styled.js";

export const UserInfoInput = ({
  type = "text",
  text = "",
  placeholder = "",
  required = false,
  ...rest
}) => {
  return (
    <Label>
      {text} <Star>*</Star>
      <Input
        type={type}
        placeholder={placeholder}
        required={required}
        {...rest}
      />
    </Label>
  );
};
