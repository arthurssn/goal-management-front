import ExpandableList from "@/components/ExpandableList";
import { IMenuItem } from "@/interfaces/IMenuItem";
import { getMenuCategories } from "@/services/MenuService";
import { useState, useEffect } from "react";

export default function CategoriesList() {
  const [items, setItems] = useState<IMenuItem[]>([]);

  async function getItems() {
    const items = await getMenuCategories();
    setItems(items);
  }

  useEffect(() => {
    getItems();
  }, []);

  return <ExpandableList title="Categories" items={items} />;
}
