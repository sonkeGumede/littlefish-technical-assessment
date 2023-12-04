export interface ProductProps {
    name: any;
    id: number;
    title: string;
    price:number;
    description: string;
    category: string;
    image: string;
    rating: RatingProps;
}

export interface RatingProps {
    rate: number;
    count: number;
}

export interface CartProps{
    
}