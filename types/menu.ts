export interface MenuItem {
  id: string;
  category: string;
  name: string;
  price: string;
  description: string;
  image: string;
  featured: boolean;
}

export interface LunchItem extends MenuItem {
  kind: 'main' | 'set' | 'extra';
}
