import React, { createContext, ReactNode, useContext, useState } from 'react';

interface LightBoxContextProps {
  statusLightBox: boolean;
  updateStatusLightBox: (newStatus: boolean) => void;
  likes: number;
  updateLikes: (newStatus: number) => void;
}

interface LightBoxProviderProps {
  children: ReactNode;
}

const LightBoxContext = createContext<LightBoxContextProps | undefined>(undefined);

export const LightBoxProvider: React.FC<LightBoxProviderProps> = ({ children }: { children: ReactNode }) => {
  const [statusLightBox, setStatus] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  const updateStatusLightBox  = (newStatus: boolean) => {
    setStatus(newStatus);
  };

  const updateLikes  = (newLikes: number) => {
    setLikes(newLikes);
  };

  return (
    <LightBoxContext.Provider value={{ statusLightBox, updateStatusLightBox, likes, updateLikes }}>
      {children}
    </LightBoxContext.Provider>
  );
};

export const useLightBoxContext = (): LightBoxContextProps => {
  const context = useContext(LightBoxContext);
  if (!context) {
    throw new Error('useMyContext doit être utilisé à l\'intérieur de MyProvider');
  }
  return context;
};
