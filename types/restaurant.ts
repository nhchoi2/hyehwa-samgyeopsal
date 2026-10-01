export interface Restaurant {
  name: string;
  englishName: string;
  phone: string;
  address: string;
  businessHours: string;
  closedDays: string;
  parking: string;
  introduction: string;
  story: string;
  philosophy: string;
  space: string;
  ingredients: string;
  features: { title: string; description: string }[];
  coordinates: { latitude: number; longitude: number } | null;
}

export interface RestaurantImage {
  src: string;
  alt: string;
}
