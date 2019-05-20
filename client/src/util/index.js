import moment from 'moment';

export const getTime = time => validCheck(moment(time).format('YYYY.MM.DD HH:mm'));
export const getNow = () => moment();
export const getDiffFromNow = deadline => moment(deadline).diff(moment(), 'minutes');

const validCheck = time => (time === '' || time === undefined ? null : time);
