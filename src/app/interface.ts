
export interface Product {
    id: string;
    title: string;
    brand: string;
    discountPrice: number;
    price: number;
    quantity: number;
    image: string;
    category?: string;
  }
  

export interface Category {
    heading: string;
    image: string;
  }