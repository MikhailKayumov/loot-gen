import {Property} from "../types";
import {Rarities} from "../rarities";

const negativeProperties: Property[] = [
  {
    name: "Проклятое",
    effect: "-5 урона",
    value: -2,
    rarity: Rarities.Normal,
    category: {name: "Урон"}
  },
  {
    name: "Слабое",
    effect: "-10 урона",
    value: -3,
    rarity: Rarities.Rare,
    category: {name: "Урон"}
  },
  {
    name: "Медленное",
    effect: "-15% скорость атаки",
    value: -3,
    rarity: Rarities.Normal,
    category: {name: "Скорость"}
  },
  {
    name: "Ломкий",
    effect: "-3 брони",
    value: -1,
    rarity: Rarities.Normal,
    category: {name: "Защита"}
  },
  {
    name: "Изнурение",
    effect: "-10% максимального здоровья",
    value: -4,
    rarity: Rarities.Rare,
    category: {name: "Здоровье"}
  },
  {
    name: "Медлительность",
    effect: "-20% скорость передвижения",
    value: -2,
    rarity: Rarities.Normal,
    category: {name: "Скорость"}
  },
  {
    name: "Сквернота",
    effect: "Проклятие -5% максимального здоровья",
    value: -6,
    rarity: Rarities.Rare,
    category: {name: "Здоровье"}
  },
  {
    name: "Ослабленный",
    effect: "Игнорирование брони противников уменьшено",
    value: -3,
    rarity: Rarities.Normal,
    category: {name: "Урон"}
  },
  {
    name: "Бессилие",
    effect: "-10% урона против боссов",
    value: -2,
    rarity: Rarities.Normal,
    category: {name: "Урон"}
  },
  {
    name: "Потеря маны",
    effect: "-2 маны при каждой атаке",
    value: -1,
    rarity: Rarities.Normal,
    category: {name: "Мана"}
  },
  {
    name: "Ломкая броня",
    effect: "-7 брони",
    value: -4,
    rarity: Rarities.Normal,
    category: {name: "Защита"}
  },
  {
    name: "Недолговечность",
    effect: "Скорость износа оружия увеличена",
    value: -7,
    rarity: Rarities.Rare,
    category: {name: "Урон"}
  },
  {
    name: "Слабое зелье",
    effect: "Эффективность зелий уменьшена",
    value: -5,
    rarity: Rarities.Normal,
    category: {name: "Мана"}},
  {
    name: "Магическая слабость",
    effect: "-3 маны при каждой атаке",
    value: -2,
    rarity: Rarities.Normal,
    category: {name: "Мана"}},
  {
    name: "Ломкий щит",
    effect: "Сопротивление урону уменьшено",
    value: -1,
    rarity: Rarities.Normal,
    category: {name: "Защита"}},
  {
    name: "Нездоровье",
    effect: "Проклятие -5% максимального здоровья",
    value: -2,
    rarity: Rarities.Rare,
    category: {name: "Здоровье"}
  },
  {
    name: "Неуклонный",
    effect: "-10% уклонение от атак",
    value: -3,
    rarity: Rarities.Normal,
    category: {name: "Защита"}},
  {
    name: "Уязвимость",
    effect: "+10% урона от животных",
    value: -4,
    rarity: Rarities.Normal,
    category: {name: "Урон"}},
  {
    name: "Снижение восстановления",
    effect: "-5% восстановление здоровья в бою",
    value: -7,
    rarity: Rarities.Normal,
    category: {name: "Здоровье"}
  },
  {
    name: "Неудача",
    effect: "-15% вероятность попадания",
    value: -2,
    rarity: Rarities.Normal,
    category: {name: "Урон"}},
];

export default negativeProperties;
