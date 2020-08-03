import moment from "moment";

const postDate = (date = null) => {
  return date
    ? moment(new Date(date)).format("YYYY.MM.DD")
    : moment().format("YYYY.MM.DD");
};

const scrollTop = () => {
  return window.scrollTo(0, 0);
};

const titleExcerpt = (title) => {
  return title?.length > 40 ? title.substring(0, 42) + " . . ." : title;
};

export { postDate, titleExcerpt, scrollTop };
