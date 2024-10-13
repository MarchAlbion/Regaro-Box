import { Item } from "@/app/{types}/buildTypes";

export const filterItems = (items: Item[], filter: string) => {
  console.log(filter);
  let filtered = items;
  if (filter) {
    filtered = filtered.filter((item: Item) => {
      console.log(item.name.RU);
      return item.name.RU.toLowerCase().includes(filter.toLowerCase());
    });
  }
  return filtered;
};
