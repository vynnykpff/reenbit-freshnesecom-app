export type ProductUserData = {
  name: string;
  image: string;
  id: string;
};

export type ProductReview = {
  createdDate: string;
  content: string;
  rating: number;
  userData: ProductUserData;
  id: string;
};
