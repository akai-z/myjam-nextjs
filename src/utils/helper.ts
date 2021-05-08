export const normalizeData = <T extends Category>(arrData: Array<T>) => {
  let normalizedData: any = {};
  arrData.forEach((record: T) => {
    if (record.id) {
      normalizedData[record.id] = record;
    }
  });
  return normalizedData as { [key: string]: T };
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
