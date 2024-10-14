import { Item } from "@/app/{types}/buildTypes";

export const filterItems = (items: Item[], filter: string) => {
  let filtered = items;
  if (filter) {
    filtered = filtered.filter((item: Item) => {
      return item.name.RU.toLowerCase().includes(filter.toLowerCase());
    });
  }
  return filtered;
};
