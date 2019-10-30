export default function validateLogin(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Trường không được để trống *';
  }
  if (!values.password) {
    errors.password = 'Trường không được để trống';
  }
  return errors;
}
