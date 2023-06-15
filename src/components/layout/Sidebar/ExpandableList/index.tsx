import { useState } from "react";
import { IMenuItem } from "@/interfaces/IMenuItem";
import ItemList from "./ItemList";
import { HeaderContainer, Content, List } from "./styles";
import chevronDown from "@/assets/chevron_down.svg";
interface ExpandableListProps {
  title: string;
  items: IMenuItem[];
}

export default function ExpandableList({ items, title }: ExpandableListProps) {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <HeaderContainer onClick={toggleExpanded} expanded={expanded}>
        {title}
        <img src={chevronDown} />
      </HeaderContainer>
      {expanded && (
        <Content>
          <List expanded={expanded}>
            {items.map((item) => (
              <ItemList menuItem={item} />
            ))}
          </List>
        </Content>
      )}
    </>
  );
}
