export const getSlugString = (value: string) => {
  return value.toLowerCase().split(" ").join("_");
};
