import { IMedia } from '../types/Types';

const Sort = (images: IMedia[], sort: string) => {
  let sortedImages : IMedia[] = [];

  if (sort === 'popularity') {
    sortedImages = [...images].sort((a, b) => b.likes - a.likes);
  }

  if (sort === 'date') {
    sortedImages = [...images].sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
  }

  if (sort === 'title') {
    sortedImages = [...images].sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();

      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  return sortedImages;
}

export default Sort;
