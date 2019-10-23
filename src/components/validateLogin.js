export default function validateLogin(values) {
  let errors = {};
  if (!values.fullname) {
    errors.fullname = 'Vui lòng nhập họ tên không dấu *';
  }
  if (!values.email) {
    errors.email = 'Vui lòng nhập thông tin email *';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email không hợp lệ';
  }
  if (!values.sdt) {
    errors.sdt = 'Vui lòng nhập thông tin sđt *';
  } else if (isNaN(values.sdt)) {
    errors.sdt = 'Vui lòng nhập sđt hợp lệ';
  } else if (values.sdt.length !== 10) {
    errors.sdt = 'Vui lòng nhập sđt hợp lệ';
  }
  if (!values.password) {
    errors.password = 'Vui lòng nhập mật khẩu';
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(values.password)
  ) {
    errors.password = 'Mật khẩu bao gồm 1 ký tự hoa và dài hơn 8 ký tự';
  }
  if (!values.repwd) {
    errors.repwd = 'Vui lòng nhập lại mật khẩu *';
  } else if (values.repwd !== values.password) {
    errors.repwd = 'Vui lòng nhập lại đúng mật khẩu';
  }
  return errors;
}
