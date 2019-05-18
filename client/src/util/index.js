import moment from 'moment';

export const getTime = time => validCheck(moment(time).format('YYYY.MM.DD HH:mm'));
export const getNow = () => getTime(Date.now());

const validCheck = time => (time === '' || time === undefined ? null : time);
