export const getRandomId = (value) => {
  return new Date().getDate() + value + new Date().getDate();
};

export const formatDate = (dateNeedFormat) => {
  return 'dd-mm-yyyy hh:mm:ss';
};