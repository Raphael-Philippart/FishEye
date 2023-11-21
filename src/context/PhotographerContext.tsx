import React, { createContext, ReactNode, useContext, useState } from 'react';

interface PhotographerProps {
  statusLightBox: boolean;
  updateStatusLightBox: (newStatus: boolean) => void;
  likes: number;
  updateLikes: (newStatus: number) => void;
}

interface LightBoxProviderProps {
  children: ReactNode;
}

const PhotographerContext = createContext<PhotographerProps | undefined>(undefined);

export const PhotographerProvider: React.FC<LightBoxProviderProps> = ({ children }: { children: ReactNode }) => {
  const [statusLightBox, setStatus] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  const updateStatusLightBox  = (newStatus: boolean) => {
    setStatus(newStatus);
  };

  const updateLikes  = (newLikes: number) => {
    setLikes(newLikes);
  };

  return (
    <PhotographerContext.Provider value={{ statusLightBox, updateStatusLightBox, likes, updateLikes }}>
      {children}
    </PhotographerContext.Provider>
  );
};

export const usePhotographerContext = (): PhotographerProps => {
  const context = useContext(PhotographerContext);
  if (!context) {
    throw new Error('useMyContext doit être utilisé à l\'intérieur de MyProvider');
  }
  return context;
};
