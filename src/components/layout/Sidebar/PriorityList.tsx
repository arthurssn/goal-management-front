import ExpandableList from "./ExpandableList";
import { IMenuItem } from "@/interfaces/IMenuItem";
import { getMenuPriority } from "@/services/MenuService";
import { useState, useEffect } from "react";

export default function PriorityList() {
  const [items, setItems] = useState<IMenuItem[]>([]);

  async function getItems() {
    const items = await getMenuPriority();
    setItems(items);
  }

  useEffect(() => {
    getItems();
  }, []);

  return <ExpandableList title="Priority" items={items} />;
}
