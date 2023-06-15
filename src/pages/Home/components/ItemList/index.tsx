import AppCheckbox from "@/components/forms/AppCheckbox";
import { ItemContent, ItemListContainer, Separator } from "./styles";
import chevron from "./chevron.svg";
export default function ItemList() {
  return (
    <ItemListContainer>
      <ItemContent>
        <span>
          <AppCheckbox /> Status: PendinStudy english for 45 minutes
        </span>
        <span>Status: Pending</span>
        <span>Professional</span>
        <span>
          <img src={chevron} />
        </span>
      </ItemContent>
      <Separator />
    </ItemListContainer>
  );
}
