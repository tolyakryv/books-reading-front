import { FeaturesListItem } from "../FeaturesListItem/FeaturesListItem";
import { List, ListTitle } from "./FeaturesList.styled";

export const FeaturesList = ({ title, features, className }) => (
  <>
    <ListTitle>{title}</ListTitle>
    <List className={className}>
      {features.map((feature, index) => (
        <FeaturesListItem key={index} text={feature} />
      ))}
    </List>
  </>
);
