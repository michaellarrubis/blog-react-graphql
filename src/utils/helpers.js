import moment from 'moment';

const postDate = (date=null) => {
  	return date ? moment(new Date(date)).format('YYYY.MM.DD') : moment().format('YYYY.MM.DD');
}

const scrollToTopOnLoad = () => {
	return window.scrollTo(0, 0);
}

export {
	postDate,
	scrollToTopOnLoad
};