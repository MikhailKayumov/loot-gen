import {Property} from "../types";
import {Rarities} from "../rarities";

const positiveProperties: Property[] = [
  {
    name: "Могучий",
    effect: "+10 урона",
    value: 6,
    rarity: Rarities.Rare,
    category: {name: "Урон"}
  },
  {
    name: "Огненный",
    effect: "Огненный урон",
    value: 6,
    rarity: Rarities.Rare,
    category: {name: "Урон"}
  },
  {
    name: "Скорострельный",
    effect: "+20% скорость атаки",
    value: 2,
    rarity: Rarities.Normal,
    category: {name: "Скорость"}
  },
  {
    name: "Защитный",
    effect: "+5 брони",
    value: 2,
    rarity: Rarities.Normal,
    category: {name: "Защита"}
  },
  {
    name: "Светящийся",
    effect: "+15% вероятность нанести критический урон",
    value: 4,
    rarity: Rarities.Rare,
    category: {name: "Урон"}
  },
  {
    name: "Быстрозарядный",
    effect: "+25% скорость перезарядки",
    value: 5,
    rarity: Rarities.Rare,
    category: {name: "Скорость"}
  },
  {
    name: "Лечащий",
    effect: "+5 единиц здоровья при убийстве",
    value: 3,
    rarity: Rarities.Normal,
    category: {name: "Здоровье"}
  },
  {
    name: "Усиливающий",
    effect: "+10% урона против боссов",
    value: 7,
    rarity: Rarities.Rare,
    category: {name: "Урон"}
  },
  {
    name: "Сокрушительный",
    effect: "Игнорирование брони противников",
    value: 8,
    rarity: Rarities.Legendary,
    category: {name: "Урон"}
  },
  {
    name: "Скороход",
    effect: "+30% скорость передвижения",
    value: 1,
    rarity: Rarities.Normal,
    category: {name: "Скорость"}
  },
  {
    name: "Зарядка",
    effect: "+2 единицы маны при убийстве",
    value: 3,
    rarity: Rarities.Normal,
    category: {name: "Мана"}
  },
  {
    name: "Устойчивый",
    effect: "+8 брони",
    value: 2,
    rarity: Rarities.Normal,
    category: {name: "Защита"}
  },
  {
    name: "Упорный",
    effect: "Сопротивление отравлению",
    value: 4,
    rarity: Rarities.Rare,
    category: {name: "Защита"}
  },
  {
    name: "Ловкач",
    effect: "+10% уклонение от атак",
    value: 6,
    rarity: Rarities.Rare,
    category: {name: "Защита"}
  },
  {
    name: "Повелитель животных",
    effect: "+20% урона по животным",
    value: 4,
    rarity: Rarities.Rare,
    category: {name: "Урон"}
  },
  {
    name: "Восстановление",
    effect: "+5% восстановление здоровья в бою",
    value: 2,
    rarity: Rarities.Normal,
    category: {name: "Здоровье"}
  },
  {
    name: "Меткость",
    effect: "+15% вероятность попадания",
    value: 1,
    rarity: Rarities.Normal,
    category: {name: "Урон"}
  },
  {
    name: "Зельевар",
    effect: "+10% эффективность зелий",
    value: 2,
    rarity: Rarities.Normal,
    category: {name: "Мана"}
  },
  {
    name: "Магический",
    effect: "+5 маны при каждой атаке",
    value: 7,
    rarity: Rarities.Legendary,
    category: {name: "Мана"}
  },
  {
    name: "Долголетие",
    effect: "+5% максимального здоровья",
    value: 9,
    rarity: Rarities.Legendary,
    category: {name: "Здоровье"}
  }
];

export default positiveProperties;
