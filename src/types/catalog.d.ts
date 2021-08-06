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
    description?: string;
  };
};

type Item = {
  id: string;
  fields: {
    id: number;
    name: string;
    slug: string;
    price: number;
    special_price?: number;
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

type ItemsList = {
  records: Array<Item>;
  offset?: string;
};

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
