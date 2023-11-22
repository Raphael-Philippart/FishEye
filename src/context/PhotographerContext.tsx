import React, { createContext, ReactNode, useContext, useState } from 'react';

interface PhotographerProps {
  statusLightBox: boolean;
  updateStatusLightBox: (newStatus: boolean) => void;
  mediaLightBox: string;
  updateMediaLightBox: (newStatus: string) => void;
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
  const [mediaLightBox, setMediaLightBox] = useState<string>('');

  const updateStatusLightBox = (newStatus: boolean) => {
    setStatus(newStatus);
  };

  const updateLikes = (newLikes: number) => {
    setLikes(newLikes);
  };

  const updateMediaLightBox = (newMedia: string) => {
    setMediaLightBox(newMedia);
  };

  return <PhotographerContext.Provider
    value={{ statusLightBox, updateStatusLightBox, likes, updateLikes, mediaLightBox, updateMediaLightBox }}>
    {children}
  </PhotographerContext.Provider>;
};

export const usePhotographerContext = (): PhotographerProps => {
  const context: PhotographerProps | undefined = useContext(PhotographerContext);
  if (!context) {
    throw new Error(`usePhotographerContext doit être utilisé à l'intérieur de PhotographerProvider`);
  }
  return context;
};
