import { ListItem } from "./FeaturesListItem.styled";
import { ReactComponent as Arrow } from "../../img/pointer.svg";

export const FeaturesListItem = ({ text }) => (
  <ListItem>
    <Arrow />
    {text}
  </ListItem>
);
