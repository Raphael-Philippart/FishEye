import { IMedia, TComparatorSortMedia } from '../types/Types';

/**
 * Array of sorting choices available for media.
 */
export const sortChoices: string[] = [
  'Popularité',
  'Date',
  'Titre',
];

/**
 * Comparator function to sort media by popularity.
 */
export const sortByPopularity: TComparatorSortMedia = (a: IMedia, b: IMedia) => b.likes - a.likes;
/**
 * Comparator function to sort media by date.
 */
export const sortByDate: TComparatorSortMedia = (a: IMedia, b: IMedia) => new Date(b.date).valueOf() - new Date(a.date).valueOf();
/**
 * Comparator function to sort media by title.
 */
export const sortByTitle: TComparatorSortMedia = (a: IMedia, b: IMedia) => a.title.localeCompare(b.title);

/**
 * Function to sort media based on the selected choice.
 * @param {IMedia[]} media - The array of media to be sorted.
 * @param {string} choice - The selected sorting choice.
 * @returns {IMedia[]} An array of media sorted according to the selected choice.
 */
const Sort = (media: IMedia[], choice: string): IMedia[] => {
  // Create a shallow copy of the media array to avoid mutating the original array
  const sortedMedia: IMedia[] = [...media];

  // Sort the array based on the selected choice using the corresponding comparator function
  if (choice === 'Popularité') sortedMedia.sort(sortByPopularity);
  if (choice === 'Date') sortedMedia.sort(sortByDate);
  if (choice === 'Titre') sortedMedia.sort(sortByTitle);

  return sortedMedia;
};

export default Sort;
