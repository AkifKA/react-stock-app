import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";

export const registerSchema = object({
  username: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required(),
  first_name: string()
    .max(20, "Name must be at least 8 characters.")
    .required(),
  last_name: string()
    .max(20, "Last name must be a maximum of 20 characters.")
    .required(),
  email: string()
    .email("Please enter a valid email.")
    .required("Email is required"),
  password: string("Password is required")
    .required()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be a maximum of 20 characters")
    .matches(/\d+/, "Password must contain a number.")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});

const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
          />
          <TextField
            label="First Name"
            name="first_name"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.first_name && errors.first_name}
            error={touched.first_name && Boolean(errors.first_name)}
          />
          <TextField
            label="Last Name"
            name="last_name"
            id="last_name"
            type="text"
            variant="outlined"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.last_name && errors.last_name}
            error={touched.last_name && Boolean(errors.last_name)}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default SignUpForm;
