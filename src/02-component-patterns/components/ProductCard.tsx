import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import { ProductTitle, ProductImage, ProductButtons } from "./index";
import { ReactElement } from "react";

interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

const ProductCard = ({ children, product, className }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;

export default ProductCard;
