import { ReactElement } from "react";

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface Product {
  id: number;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}
