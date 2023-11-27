/**
 * Interface representing a photographer.
 */
export interface IPhotographer {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
}

/**
 * Interface representing a media item.
 */
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

/**
 * Interface representing data containing photographers and media.
 */
export interface IDataPhotographers {
  photographers?: IPhotographer[];
  media?: IMedia[];
}

/**
 * Type representing parameters with an 'id' property.
 */
export type TParams = {
  id: string | undefined;
};

/**
 * Interface representing the state of a form.
 */
export interface IFormulaireState {
  [key: string]: string;
}

/**
 * Comparator function to sort media by popularity.
 */
export type TComparatorSortMedia = (a: IMedia, b: IMedia) => number;
