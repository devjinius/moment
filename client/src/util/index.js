import moment from 'moment';

export const getTime = time => validCheck(moment(time).format('YYYY.MM.DD HH:mm'));
export const getNow = () => moment();
export const getDiffFromNow = deadline => moment(deadline).diff(moment(), 'days');

const validCheck = time => (time === '' || time === undefined ? null : time);
