import interiorImg from '../assets/images/heritage_cafe_interior_1790363138480.jpg';
import courtyardImg from '../assets/images/cafe_courtyard_evening_1790363183124.jpg';
import grilledFishImg from '../assets/images/gourmet_grilled_fish_1790367469393.jpg';
import shepherdPieImg from '../assets/images/savory_shepherd_pie_1790367483074.jpg';
import coffeeImg from '../assets/images/kolkata_style_coffee_1790367495154.jpg';
import bakedMomosImg from '../assets/images/baked_momos_dish_1790365240613.jpg';
import chaiTableImg from '../assets/images/chai_adda_table_1790363172021.jpg';
import brownieImg from '../assets/images/cafe_dessert_detail_1790366145934.jpg';

export interface GalleryPhoto {
  id: string;
  title: string;
  tag: 'Interior' | 'Exterior' | 'Food' | 'Coffee' | 'Desserts' | 'Seating' | 'Café details';
  imageSrc: string;
}

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: 'g-interior',
    title: 'Warm Café Interior & Wooden Setting',
    tag: 'Interior',
    imageSrc: interiorImg,
  },
  {
    id: 'g-fish',
    title: 'Gourmet Grilled Vetki Fish with Garlic Herbs',
    tag: 'Food',
    imageSrc: grilledFishImg,
  },
  {
    id: 'g-shepherd',
    title: 'Artisanal Baked Shepherd’s Pie & Garlic Bread',
    tag: 'Food',
    imageSrc: shepherdPieImg,
  },
  {
    id: 'g-coffee',
    title: 'Kolkata Heritage Coffee & Brass Filter',
    tag: 'Coffee',
    imageSrc: coffeeImg,
  },
  {
    id: 'g-momos',
    title: 'Cheesy Baked Momos',
    tag: 'Food',
    imageSrc: bakedMomosImg,
  },
  {
    id: 'g-table',
    title: 'Earthen Cups & Warm Table Setting',
    tag: 'Café details',
    imageSrc: chaiTableImg,
  },
  {
    id: 'g-dessert',
    title: 'Brownie With Ice Cream',
    tag: 'Desserts',
    imageSrc: brownieImg,
  },
  {
    id: 'g-exterior',
    title: 'Evening Exterior & Outdoor Seating',
    tag: 'Exterior',
    imageSrc: courtyardImg,
  },
];

export const GALLERY_FILTER_TAGS = [
  'All',
  'Interior',
  'Exterior',
  'Food',
  'Coffee',
  'Desserts',
  'Café details',
] as const;
