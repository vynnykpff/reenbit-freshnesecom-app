type AttributeParams = {
  tagName: keyof Document;
  attributeName: string;
};

export const removeDataAttribute = ({ tagName, attributeName }: AttributeParams): void => {
  (document[tagName] as Element).removeAttribute(attributeName);
};

export const setDataAttribute = ({ tagName, attributeName }: AttributeParams, value: string): void => {
  (document[tagName] as Element).setAttribute(attributeName, value);
};
