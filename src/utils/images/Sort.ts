import { IMedia, TComparatorSortMedia } from '../types/Types';

export const sortChoices: string[] = [
  'Popularité',
  'Date',
  'Titre',
];

export const sortByPopularity: TComparatorSortMedia = (a: IMedia, b: IMedia) => b.likes - a.likes;
// sortByDate need refactoring if Date in object photographer change
export const sortByDate: TComparatorSortMedia = (a: IMedia, b: IMedia) => new Date(b.date).valueOf() - new Date(a.date).valueOf();
export const sortByTitle: TComparatorSortMedia = (a: IMedia, b: IMedia) => a.title.localeCompare(b.title);


const Sort = (media: IMedia[], choice: string) => {
  const sortedMedia: IMedia[] = [...media];

  if (choice === 'Popularité') sortedMedia.sort(sortByPopularity);
  if (choice === 'Date') sortedMedia.sort(sortByDate);
  if (choice === 'Titre') sortedMedia.sort(sortByTitle);

  return sortedMedia;
};

export default Sort;
