import React, { ReactNode } from 'react';
import { IS_CLIENT } from '@config/constants';

interface Viewport {
  width: number | undefined;
  height: number | undefined;
}

const initialState = { width: undefined, height: undefined };

export const ViewportContext = React.createContext(initialState);

export const useViewportContext = (): Viewport => React.useContext(ViewportContext);

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const [width, setWidth] = React.useState<any>(IS_CLIENT ? window.innerWidth : undefined);
  const [height, setHeight] = React.useState<any>(IS_CLIENT ? window.innerHeight : undefined);

  const handleWindowResize = () => {
    if (IS_CLIENT) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  };

  React.useEffect(() => {
    if (IS_CLIENT) {
      window.addEventListener('resize', handleWindowResize);
      handleWindowResize();
    }
    return () => (IS_CLIENT ? window.removeEventListener('resize', handleWindowResize) : undefined);
  }, []);

  return <ViewportContext.Provider value={{ width, height }}>{children}</ViewportContext.Provider>;
};
