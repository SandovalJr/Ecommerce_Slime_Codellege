export interface departmentsInterface {
  id: number;
  department: string;
}

export interface brandInterface {
  id: number;
  brand: string;
  img: string;
}

export interface productsInterface {
  id: number;
  brand: number;
  department: number;
  product: string;
  colors: Array<string>;
  sizes: Array<string>;
  img: string;
  description: Array<string>;
  price: number;
  msi: boolean;
}
