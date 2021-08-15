import { CLOUDINARY_KEY, CLOUDINARY_PATH } from '@config/env';

export const normalizeData = <T extends Category | CustomOption>(
  arrData: Array<T>,
): { [key: string]: T } => {
  let normalizedData: { [key: string]: T } = {};
  arrData.forEach((record: T) => (normalizedData[record.id] = record));
  return normalizedData;
};

export const priceFormatter = (price: number): string => {
  const formattedPrice = (Math.round(price * 100) / 100).toFixed(2);
  return `£${formattedPrice}`;
};

export const isMobile = (width: number | undefined): boolean => (width ? width < 786 : false);

export const getPathName = (location: string): string => {
  const arrLocation = location.split('/');
  return arrLocation[arrLocation.length - 1];
};

export const imgUrlBuilder = (imgName: string) =>
  `https://res.cloudinary.com/${CLOUDINARY_KEY}/image/upload/q_auto,f_auto/${CLOUDINARY_PATH}/my-jam/${imgName}`;

// @ts-ignore
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
