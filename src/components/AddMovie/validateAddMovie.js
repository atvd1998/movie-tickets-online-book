export default function validateLogin(values) {
  let errors = {};
  if (!values.movieID) {
    errors.movieID = 'Trường không được để trống *';
  }
  if (!values.movieName) {
    errors.movieName = 'Trường không được để trống';
  }
  if (!values.director) {
    errors.director = 'Trường không được để trống';
  }
  if (!values.casters) {
    errors.casters = 'Trường không được để trống';
  }
  if (!values.durable) {
    errors.durable = 'Trường không được để trống';
  } else if (isNaN(values.durable)) {
    errors.durable = 'Vui lòng nhập số';
  }
  if (!values.style) {
    errors.style = 'Trường không được để trống';
  }
  if (!values.ages) {
    errors.ages = 'Trường không được để trống';
  } else if (isNaN(values.ages)) {
    errors.ages = 'Vui lòng nhập số';
  }
  if (!values.detail) {
    errors.detail = 'Trường không được để trống';
  }
  return errors;
}
