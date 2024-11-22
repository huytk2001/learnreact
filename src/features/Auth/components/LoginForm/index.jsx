import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/Album/Components/form-coutrolers/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Typography, Button, LinearProgress } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
// import PasswordField from "../../../../components/Album/Components/form-coutrolers/PasswordField/passwordField";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm({ onSubmit }) {
  // Cấu hình validation với yup
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address."),

    password: yup.string().required("Please enter your password"),
  });

  // Khởi tạo react-hook-form
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema), // Dùng yup để validate form
  });

  // Hàm xử lý khi submit form
  const handleSubmit = async (values) => {
    console.log("Todo form values:", values);
    // const {onSubmit}= props
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div sx={{ flexGrow: 2, position: "relative" }}>
      {isSubmitting && (
        <LinearProgress
          sx={(theme) => ({
            position: "absolute",
            top: theme.spacing(1),
            left: 0,
            right: 0,
          })}
        />
      )}
      <Avatar sx={{ margin: "0 auto", bgcolor: deepOrange[500] }}>
        <LockOutlined />
      </Avatar>
      <Typography
        component="h3"
        sx={(theme) => ({
          textAlign: "center",
          margin: theme.spacing(2, 0, 3, 0),
        })}
      >
        Sign in
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />

        <Button
          disabled={isSubmitting}
          sx={(theme) => ({
            margin: theme.spacing(3, 0, 2, 0),
            width: "fullwith",
          })}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
