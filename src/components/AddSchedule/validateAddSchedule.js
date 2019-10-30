export default function validateLogin(values) {
  let errors = {};
  if (!values.movieID) {
    errors.movieID = 'Trường không được để trống *';
  }
  if (!values.month) {
    errors.month = 'Trường không được để trống';
  } else if (isNaN(values.month)) {
    errors.month = 'Vui lòng nhập số';
  }
  if (!values.date) {
    errors.date = 'Trường không được để trống';
  } else if (isNaN(values.date)) {
    errors.date = 'Vui lòng nhập số';
  }
  if (!values.day) {
    errors.day = 'Trường không được để trống';
  }
  if (!values.hour) {
    errors.hour = 'Trường không được để trống';
  }
  if (!values.roomID) {
    errors.roomID = 'Trường không được để trống';
  }
  return errors;
}
