// Класс для генерации предметов
import items from "./items";
import negativeProperties from "./properties/negative";
import positiveProperties from "./properties/positive";
import {GeneratedItem, Item, Property} from "./types";
import {Rarities, RarityWeight} from "./rarities";

export default class ItemGenerator {
  // Генерация случайного предмета с учетом характеристик и свойств
  public generateRandomItem(playerLevel: number): GeneratedItem {
    const {name, primaryStat, primaryStatValue} = this.getRandomItem(items);
    const properties: Property[] = this.generateRandomProperties(playerLevel);

    return {
      name: this.generateItemName(name, properties),
      primaryStat,
      primaryStatValue: Math.round(primaryStatValue + (primaryStatValue * 0.15 * (playerLevel - 1))),
      properties,
      rarity: this.calculateRarity(properties),
      cost: this.calculateItemCost(properties)
    };
  }

  // Получение случайного предмета из таблицы
  private getRandomItem(items: Item[]): Item {
    return items[Math.floor(Math.random() * items.length)];
  }

  // Генерация случайных свойств для предмета
  private generateRandomProperties(playerLevel: number): Property[] {
    const numProperties = Math.floor(Math.random() * 4) + 1;
    if (numProperties < 2) {
      return [this.getRandomProperty(positiveProperties)]
    }

    const propertiesMap: Map<Property["name"], Property> = new Map();
    let totalValue = 0;

    while (totalValue < Math.min(playerLevel, 5)) {
      totalValue = 0;
      propertiesMap.clear();

      for (let i = 0; i < numProperties; i++) {
        const propertyTable = Math.random() <= 0.65 ? positiveProperties : negativeProperties;
        const randomProperty = this.getRandomProperty(propertyTable);
        propertiesMap.set(randomProperty.name, randomProperty);
        totalValue += randomProperty.value;
      }
    }

    return Array.from(propertiesMap.values());
  }

  // Получение случайного свойства из таблицы
  private getRandomProperty(properties: Property[]): Property {
    return properties[Math.floor(Math.random() * properties.length)];
  }

  // Определение редкости предмета по свойствам
  private calculateRarity(properties: Property[]): Rarities {
    if (!properties.length) {
      return Rarities.Normal;
    }

    return properties.reduce((acc, prop) => {
      if (RarityWeight[acc] < RarityWeight[prop.rarity]) return prop.rarity;
      return acc;
    }, Rarities.Normal);
  }

  // Создание имени предмета
  private generateItemName(itemName: string, properties: Property[]): string {
    if (!properties.length) return itemName

    const highestValueProperty: Property = properties.reduce((acc, prop) => {
      if (Math.abs(prop.value) > Math.abs(acc.value)) {
        return prop;
      }

      return acc;
    }, properties[0]);

    return `${itemName} "${highestValueProperty.name}"`;
  }

  // Определение стоимости предмета в золотых монетах
  private calculateItemCost(properties: Property[]): number {
    const totalValue = properties.reduce((acc, prop) => acc + prop.value, 0);
    return Math.abs(totalValue) * 3; // Предположим, что 1 мощность = 3 монет
  }
}
