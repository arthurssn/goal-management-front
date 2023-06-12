import { IMenuItem } from "@/interfaces/IMenuItem";
import { Content, ItemListContainer, List } from "../styles";
import SubItemList from "../SubItemList";
import { useState } from "react";
import chevronDown from "@/assets/chevron_down.svg";

export default function ItemList(menuItem: IMenuItem) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <>
      <ItemListContainer onClick={toggleExpanded} expanded={expanded}>
        <img src={menuItem.icon} />
        <p>{menuItem.label}</p>
        {menuItem.subitems ? <img src={chevronDown} /> : ""}
      </ItemListContainer>
      {expanded && (
        <Content>
          <List expanded={expanded}>
            {menuItem.subitems?.map((subitem, index) => (
              <SubItemList
                key={index}
                label={subitem.label}
                color={subitem.color}
                path={subitem.path}
              />
            ))}
          </List>
        </Content>
      )}
    </>
  );
}
