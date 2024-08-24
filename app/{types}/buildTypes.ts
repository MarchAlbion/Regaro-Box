export interface Slot {
    item: string;
    _id: string;
    active_skill?: number;
    active_passive?: number;
  }
  
  export interface BuildType {
    _id: string;
    title: string;
    description: string;
    category: string;
    bootsSlot: Slot;
    capeSlot: Slot;
    chestSlot: Slot;
    headSlot: Slot;
    mainHandSlot: Slot;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }