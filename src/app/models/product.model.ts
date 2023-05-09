export interface IProduct {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
}

export interface ICartItem {
  quality: number;
  product: IProduct;
}
