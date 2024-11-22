import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { login } from "../../User/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import LoginForm from "../LoginForm";

Login.propTypes = {
  closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  // const handleSubmit = async (values) => {
  //   try {
  //     // auto set username = email

  //     const action = login(values);
  //     const resultAction = await dispatch(action);

  //     const user = unwrapResult(resultAction);
  //     if (!user) {
  //       console.log("Login successful but no user data returned (204).");
  //     } else {
  //       console.log("New user", user);
  //     }
  //     const { closeDialog } = props;
  //     if (closeDialog) {
  //       closeDialog();
  //     }
  //     enqueueSnackbar("Login successfully!!!", { variant: "success" });
  //   } catch (error) {
  //     console.log("Failed to Login", error);
  //     enqueueSnackbar(error.message, { variant: "error" });
  //   }
  // };
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);

      if (user) {
        enqueueSnackbar("Login successful!", { variant: "success" });
        console.log("Logged in user:", user);
      } else {
        enqueueSnackbar("Login successful but no user data returned (204).", {
          variant: "info",
        });
      }
    } catch (error) {
      console.log("Failed to login:", error);
      enqueueSnackbar(error.message, { variant: "error" });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
