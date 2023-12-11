export const removeItemByCondition = <T>(array: T[], condition: (item: T) => boolean) => {
  return array.filter(item => !condition(item));
};
