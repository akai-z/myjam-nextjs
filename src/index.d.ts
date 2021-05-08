declare module '*.jpg';
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
  };
};

type Item = {
  id: string;
  fields: {
    id: number;
    name: string;
    slug: string;
    price: number;
    sku: string;
    description: string;
    status: 'enabled' | 'disabled';
    main_image: string;
    thumbnail_image: string;
    more_images?: string;
    options?: Array<string>;
    categories?: Array<string>;
  };
};
