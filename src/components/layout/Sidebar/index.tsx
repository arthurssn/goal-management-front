import { SeparatorLine, SidebarContainer } from "./styles";
import CategoriesList from "./CategoriesList";
import PriorityList from "./PriorityList";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <PriorityList />
      <SeparatorLine />
      <CategoriesList />
    </SidebarContainer>
  );
}
