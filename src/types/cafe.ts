export type DietaryType = 'veg' | 'non-veg' | 'jain';

export type MenuCategoryType = 
  | 'specials'
  | 'soups_salads'
  | 'starters'
  | 'mains_noodles'
  | 'pizza_pasta'
  | 'burgers_sandwiches'
  | 'momos_snacks'
  | 'healthy_no_oil'
  | 'jain_specials'
  | 'desserts'
  | 'beverages'
  | 'fizz'
  | 'combos_rolls';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryType;
  categoryLabel: string;
  price: number;
  description: string;
  dietary?: DietaryType;
  portion?: string;
  imageSrc?: string;
  isSpecial?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  tag: 'Interior' | 'Exterior' | 'Food' | 'Coffee' | 'Desserts' | 'Seating' | 'Café details';
  imageSrc: string;
}
