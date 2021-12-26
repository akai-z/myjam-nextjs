declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

type Category = {
  id: string;
  fields: {
    id: number;
    name: string;
    slug: string;
    status: 'enabled' | 'disabled';
    main_category?: boolean;
    featured?: boolean;
    image: string;
    items?: Array<string>;
    sub_categories?: Array<string>;
    description?: string;
    world_cuisine?: boolean;
    team_picks?: boolean;
    world_snakcs?: boolean;
    chef_touch?: boolean;
  };
};

type Item = {
  id: string;
  record_id: string;
  name: string;
  slug: string;
  price: string;
  special_price: string;
  sku: string;
  description: string;
  status: 'enabled' | 'disabled';
  main_image: string;
  thumbnail_image: string;
  more_images: string;
  options: Array<string>;
  categories: Array<string>;
};

type ItemsList = Array<Item>;

type CustomOption = {
  id: string;
  fields: {
    id: number;
    code: string;
    type: 'text' | 'select';
    label: string;
    values?: string;
  };
};

type SelectedOptions = {
  [key: string]: string;
};
