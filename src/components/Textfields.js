import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const countries = [
  {
    value: 'hcm',
    label: 'TP Hồ Chí Minh'
  },
  {
    value: 'hn',
    label: 'Hà Nội'
  },
  {
    value: 'dn',
    label: 'Đà Nẵng'
  },
  {
    value: 'hue',
    label: 'Huế'
  },
  {
    value: 'vt',
    label: 'Bà Rịa Vũng Tàu'
  }
];

const gender = [
  {
    value: 'nam',
    label: 'Nam'
  },
  {
    value: 'nu',
    label: 'Nu'
  }
];

export default function Textfields() {
  const classes = useStyles();
  // const [values, setValues] = React.useState({
  //   name: 'Cat in the Hat',
  //   age: '',
  //   multiline: 'Controlled',
  //   currency: 'EUR'
  // });

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  return (
    <>
      <h1>Thông tin đăng ký</h1>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          placeholder="Nhập tên"
          id="signup-firstname"
          label="Tên"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />

        <TextField
          required
          placeholder="Nhập họ"
          id="signup-lastname"
          label="Họ"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          id="signup-date"
          label="Ngày sinh"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          required
          id="signup-gender"
          select
          label="Giới tính"
          className={classes.textField}
          // value={values.currency}
          // onChange={handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {gender.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          placeholder="Nhập email"
          id="signup-email"
          label="Địa chỉ email"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          placeholde="Nhập tên đăng nhập"
          id="signup-username"
          label="Tên đăng nhập"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          placeholder="Nhập password"
          id="signup-pwd"
          type="password"
          label="Mật khẩu"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          placeholde="Nhập lại password"
          id="signup-repwd"
          type="password"
          label="Nhập lại mật khẩu"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          required
          placeholder="Nhập số điện thoại"
          id="signup-sdt"
          label="Số điện thoại"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
        />

        <TextField
          required
          id="signup-thanhpho"
          select
          label="Thành phố"
          className={classes.textField}
          // value={values.currency}
          // onChange={handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your country"
          margin="normal"
        >
          {countries.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>

      <button type="submit" className="btn btn-primary">Đăng ký</button>
    </>
  );
}
