export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  oldPrice: number | null;
  imageUrl: string | undefined | null;
};
