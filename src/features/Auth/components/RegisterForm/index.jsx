import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/Album/Components/form-coutrolers/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Typography, Button, LinearProgress } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import PasswordField from "../../../../components/Album/Components/form-coutrolers/PasswordField/passwordField";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm({ onSubmit }) {
  // Cấu hình validation với yup
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Please enter your name")
      .test(
        "should has at least two words",
        "Please enter at least two words.",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email address."),

    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least six chars"),
    retypePassword: yup.string().required("Please enter your password"),
    avatar: yup.string().required("Please enter your Avatat").url("avatar"),
  });

  // Khởi tạo react-hook-form
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      retypePassword: "",
      avatar: "",
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
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <div sx={{ flexGrow: 2 }}>
      {isSubmitting && <LinearProgress />}
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
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="name" label="Full name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="Password" form={form} />
        <InputField name="retypePassword" label="Retype Password" form={form} />
        <InputField name="avatar" label="Avatar" form={form} />

        <Button
          sx={(theme) => ({
            margin: theme.spacing(3, 0, 2, 0),
          })}
          variant="contained"
          color="primary"
          type="submit"
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
