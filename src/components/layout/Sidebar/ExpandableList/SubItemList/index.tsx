import { ISubmenuItem } from "@/interfaces/IMenuItem";
import { SubItemListContainer } from "./styles";

export default function SubItemList(menuItem: ISubmenuItem) {
  return (
    <SubItemListContainer color={menuItem.color}>
      {menuItem.label}
    </SubItemListContainer>
  );
}
