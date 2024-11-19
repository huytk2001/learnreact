import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import InputField from "../../../../components/Album/Components/form-coutrolers/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm({ onSubmit }) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter titile")
      .min(5, "Title is too short"),
    // age: yup.number().positive().integer().required()
  });
  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log("Todo form values:", values);
    // const {onSubmit}= props
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };

  return (
    <div sx={{ flexGrow: 2 }}>
      <Avatar sx={{ margin: "0 auto", bgcolor: deepOrange[500] }}>
        <LockOutlined></LockOutlined>
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
        <InputField name="fullname" label="Full name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <InputField name="password" label="password" form={form} />
        <InputField name="retypePassword" label="retypePassword" form={form} />
        <Button
          sx={(theme) => ({
            margin: theme.spacing(3, 0, 2, 0),
          })}
          variant="contained"
          color="primary"
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
