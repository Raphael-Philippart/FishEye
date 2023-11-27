export interface IPhotographer {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
}

export interface IMedia {
  id: number;
  photographerId: number;
  title: string;
  image?: string;
  video?: string;
  likes: number;
  date: string;
  price: number;
}

export interface IDataPhotographers {
  photographers?: IPhotographer[];
  media?: IMedia[];
}

export type TParams = {
  id: string | undefined;
};

export interface IFormulaireState {
  [key: string]: string;
}

export type TComparatorSortMedia = (a: IMedia, b: IMedia) => number;
