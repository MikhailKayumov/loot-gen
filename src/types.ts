import {Rarities} from "./rarities";

interface Category {
  name: string;
}

export interface Property {
  name: string;
  effect: string;
  value: number;
  rarity: Rarities;
  category: Category;
}

export interface Item {
  name: string;
  primaryStat: string;
  primaryStatValue: number;
}

export interface GeneratedItem extends Item {
  properties: Property[];
  rarity: Rarities;
  cost: number;
}
