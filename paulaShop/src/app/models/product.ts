import { Seller } from './seller';

export class Product {
    id: string;
    title: string;
    seller: Seller;
    price: number;
    thumbnail: string;
    permalink: string
}