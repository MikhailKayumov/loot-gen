export enum Rarities {
  Normal = 'Обычное',
  Rare = 'Редкое',
  Legendary = 'Легендарное'
}

export const RarityWeight: Record<Rarities, number> = {
  [Rarities.Normal]: 1,
  [Rarities.Rare]: 1 << 1,
  [Rarities.Legendary]: 1 << 2,
}
