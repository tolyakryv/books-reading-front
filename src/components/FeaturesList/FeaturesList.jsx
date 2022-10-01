import { FeaturesListItem } from "../FeaturesListItem/FeaturesListItem";
import { List, ListTitle } from "./FeaturesList.styled";

export const FeaturesList = ({ title, features }) => (
  <>
    <ListTitle>{title}</ListTitle>
    <List>
      {features.map((feature, index) => (
        <FeaturesListItem key={index} text={feature} />
      ))}
    </List>
  </>
);
