export interface Product {
  _id: string;
  name: string;
  price: number;
  images: ProductImage[];
  feedbacksCount: number;
  rating: number;
  subCategory: string;
}

export interface ProductImage {
  url: string;
  source: string;
}
