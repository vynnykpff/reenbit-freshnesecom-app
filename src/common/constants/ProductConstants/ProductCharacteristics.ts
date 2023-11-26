export const enum ProductCharacteristicsOptions {
  COLUMNS = 4,
  NEXT_ITEM = 1,
}

export type ProductCharacteristicsListProps = {
  rowIndex: number;
  productCharacteristicsKeys: string[];
  productCharacteristicsList: Record<string, string>;
};
