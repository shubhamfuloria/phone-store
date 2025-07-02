export type ProductDetail =  {
  id: number,
  name : string,
  brand : string, 
  category: string,
  colors: string[],
  price: number,
  image: string,
  batteryLife: number,
  screenSize: number,
  reviews: number,
  rating: number,
  ram: number[],
  camera: number
};


export enum Theme {LIGHT, DARK};
